import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Sites
import Operaciones from './site/Operaciones'
import Filtros from './site/Filtros'


function App() {

  
  return (

    <Router>
      <Switch>
        <Route path="/" exact>
          <Operaciones/>
        </Route>
        <Route path="/filtros">
          <Filtros />
        </Route>
      </Switch>
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
