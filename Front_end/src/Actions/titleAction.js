import {
    AGREGAR_TITULO,
    COMENZAR_DESCARGA_TITULO,
    OBTENER_PRODUCTO_TITULO,
    OBTENER_PRODUCTO_INCREMENTAR,
    OBTENER_PRODUCTO_DESINCREMENTAR 

} from '../types'

import swal from 'sweetalert2';
import Swal from 'sweetalert2';

export default function crearNuevoTituloAction(title){
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
                title: title
            })
            })
            .then(res => res.json())
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
    type:AGREGAR_TITULO
})