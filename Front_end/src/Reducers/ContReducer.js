import {
    AGREGAR_TITULO,
    COMENZAR_DESCARGA_TITULO,
    COMENZAR_DESCARGA_TITULO_EXITO,
    OBTENER_PRODUCTO_TITULO,
    OBTENER_PRODUCTO_INCREMENTAR,
    OBTENER_PRODUCTO_DESINCREMENTAR, 
    AGREGAR_TITULO_EXITO


} from '../types'

const initialState = {
    contadores: []

}

export default function (state =initialState,action) {
    switch (action.type) {        
        case AGREGAR_TITULO:
            return{
                ...state,                
            }
        case AGREGAR_TITULO_EXITO:
            return{
                ...state,
                contadores: [...state.contadores,action.payload]
            }
        case COMENZAR_DESCARGA_TITULO_EXITO:
            return{
                ...state,
                contadores: action.payload
            }                   
        default:
            return state;
    }
}