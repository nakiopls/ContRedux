import React from 'react';
import './App.css';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

//Sites
import Operaciones from './site/Operaciones'
import Filtros from './site/Filtros'

//REDUX 
import {Provider} from 'react-redux'
//import {provider} from 'react-redux';
import store from './store'


function App() {

  
  return (

    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact>
            <Operaciones/>
          </Route>
          <Route path="/filtros">
            <Filtros />
          </Route>
        </Switch>
      </Provider>  
    </Router>
  );
}

/*
        <div>
          <img src={image} style={{
              width: '50vw',
              height: '100vh',
              'object-fit': 'cover',
              'object-position': "center center",
              position: 'absolute',
              'z-index': '-1'              
          }}></img>
        </div>

*/

export default App;
