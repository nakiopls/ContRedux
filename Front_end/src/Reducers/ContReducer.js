import {
    AGREGAR_TITULO,
    COMENZAR_DESCARGA_TITULO,
    OBTENER_PRODUCTO_TITULO,
    OBTENER_PRODUCTO_INCREMENTAR,
    OBTENER_PRODUCTO_DESINCREMENTAR 

} from '../types'

const initialState = {
    contadores: []

}

export default function (state =initialState,action) {
    switch (action.type) {        
        case COMENZAR_DESCARGA_TITULO:
            return{
                ...state,                
            }
        case AGREGAR_TITULO:
            return{
                ...state,
                contadores: [...state.contadores,action.payload]
            }                
        default:
            return state;
    }
}