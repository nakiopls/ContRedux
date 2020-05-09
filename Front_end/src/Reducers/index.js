import {combineReducers} from 'redux';
import contadorReducer from './ContReducer';


export default combineReducers({
    contador: contadorReducer
})