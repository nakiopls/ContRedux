import {
    AGREGAR_TITULO,
    AGREGAR_TITULO_EXITO,
    COMENZAR_DESCARGA_TITULO,
    COMENZAR_DESCARGA_TITULO_EXITO,
    OBTENER_CONTADOR_ELIMINAR,
    CONTADOR_ELIMINADO_EXITO,
    REALIZAR_SUMA_CONTADOR,
    SUMA_CONTADOR_EXITO,
    REALIZAR_RESTA_CONTADOR,
    RESTA_CONTADOR_EXITO

} from '../types'

import Swal from 'sweetalert2';

export  function crearNuevoTituloAction(title){
    return async (dispatch) => {
        dispatch (agregarTitulo());

        try {            
            fetch('http://localhost:5000/api/v1/counter', {
            mode:'cors',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
                
            },
            body: JSON.stringify({
                title
            })
            })
            .then(res => res.json())
            .then(res => dispatch(agregarTituloExito(res)))
            .then(res => console.log(res))
            

            Swal.fire(
                'Correct',
                'El titulo se agrego de pana',
                'success'
            )
            
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon:'error',
                title: 'Cago compa',
                text: 'intenta de nuevo'
            })
            
        }
    }
}

const agregarTitulo = () => ({
    type:AGREGAR_TITULO,    
})

const agregarTituloExito = title => ({
    type:AGREGAR_TITULO_EXITO,
    payload: title
})

export  function obtenerTitulosAction(){
    return async (dispatch) => {
        dispatch(descargarTitulos());
        
        try {
            //Llama los datos a la API
            fetch('http://localhost:5000/api/v1/counters', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*'
                    
                }
                })
               .then(res => res.json())
               //Carga los datos de la API al store
               .then(res => dispatch(descargaTitulosExitosa(res)))
               
            
            
        } catch (error) {
            console.log("error en la descarga")
        }
    }
}

const descargarTitulos = () => ({
    type: COMENZAR_DESCARGA_TITULO,     
})

//Guarda los contadores en el store
const descargaTitulosExitosa = contadores => ({
    type: COMENZAR_DESCARGA_TITULO_EXITO, 
    payload: contadores    
})

export function borrarContadorAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));
        fetch('http://localhost:5000/api/v1/counter', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
                
            },
            body: JSON.stringify({
                id
            })
            })                       
            .then(res => console.log(res))

            dispatch(eliminarContadorExito());

            Swal.fire(
                'borrado',
                'el contador se elimino correctamente',
                'success'
            )

    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_CONTADOR_ELIMINAR,
    payload: id
})

const eliminarContadorExito = () => ({
    type: CONTADOR_ELIMINADO_EXITO
})


export function SumarContadorAction (id) {

    return async (dispatch) => {
        dispatch(SumarContador())
        fetch('http://localhost:5000/api/v1/counter/inc', {            
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'                
            },
            body: JSON.stringify({
                id
            })
            })
            .then(res => res.json())
            .then(res => dispatch(SumarContadorExito(res)))
            .then(res => console.log(res))


    }

}

const SumarContador = () => ({
    type: REALIZAR_SUMA_CONTADOR
})

const SumarContadorExito = contador => ({
    type: SUMA_CONTADOR_EXITO,
    payload: contador
})


export function RestarContadorAction (id) {

    return async (dispatch) => {
        dispatch(RestarContador())
        fetch('http://localhost:5000/api/v1/counter/dec', {            
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'                
            },
            body: JSON.stringify({
                id
            })
            })
            .then(res => res.json())
            .then(res => dispatch(RestarContadorExito(res)))
            .then(res => console.log(res))


    }

}

const RestarContador = () => ({
    type: REALIZAR_RESTA_CONTADOR
})

const RestarContadorExito = contador => ({
    type: RESTA_CONTADOR_EXITO,
    payload: contador
})