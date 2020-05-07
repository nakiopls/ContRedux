import {createStore, applyMiddleware, compose} from 'redux';
//ayuda a realizar peticiones asincronas
import thunk from 'redux-thunk';
//import reducer from './reducers';
/*
const store = createStore(
    reducer,
    compose( applyMiddleware(thunk),

        typeof window === 'object' && 
            typeof window.__REDUX_DEVTOOLS_EXTENSION__  !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        
    )

);

export default store;

*/