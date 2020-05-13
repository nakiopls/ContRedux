import {
    AGREGAR_TITULO,
    COMENZAR_DESCARGA_TITULO_EXITO,
    AGREGAR_TITULO_EXITO,
    OBTENER_CONTADOR_ELIMINAR,
    CONTADOR_ELIMINADO_EXITO,
    SUMA_CONTADOR_EXITO,
    RESTA_CONTADOR_EXITO

} from '../types'

const initialState = {
    contadores: [],
    contadoreliminar: null,

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
        case OBTENER_CONTADOR_ELIMINAR:
            return{
                ...state,
                contadoreliminar: action.payload
            }
        case CONTADOR_ELIMINADO_EXITO:
            return{
                ...state,
                contadores: state.contadores.filter(contador => contador.id !== state.contadoreliminar),
                productoeliminar : null
            } 
        case SUMA_CONTADOR_EXITO:
            return{
                ...state,
                contadores: state.contadores.map( contador => 
                    contador.id === action.payload.id ? contador = action.payload : contador 
                )
            }   
        case RESTA_CONTADOR_EXITO:
            return{
                ...state,
                contadores: state.contadores.map( contador => 
                (contador.id === action.payload.id)  ? contador = action.payload : contador 
                //*** POSIBLE CONDICION PARA EL CONTADOR****
                //(contador.id === action.payload.id && action.payload.count >=0)  ? contador = action.payload : contador 
                )
            }                                         
        default:
            return state;
    }
}