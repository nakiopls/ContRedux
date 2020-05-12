import {
    AGREGAR_TITULO,
    AGREGAR_TITULO_EXITO,
    COMENZAR_DESCARGA_TITULO,
    COMENZAR_DESCARGA_TITULO_EXITO,
    OBTENER_PRODUCTO_TITULO,
    OBTENER_PRODUCTO_INCREMENTAR,
    OBTENER_PRODUCTO_DESINCREMENTAR 

} from '../types'

import swal from 'sweetalert2';
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