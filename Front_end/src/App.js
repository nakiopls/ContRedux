import React from 'react';
import './App.css';
import {makeStyles} from '@material-ui/core/styles'

import image from './Images/food.jpg'

import App_bar from './Component/App_bar'
import AppBar_filtros from './Component/AppBar_Filtros'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  Background: {
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    background : `url(${image})`
  }
}))

function App() {

  const classes = useStyles();
  
  return (
     <div className={classes.root}>
        <div>
          <AppBar_filtros></AppBar_filtros>
       
        </div>
      </div>
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
