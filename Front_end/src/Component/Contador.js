import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Swal from 'sweetalert2';

import {Box} from '@material-ui/core'

import { red } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';

//Redux
//import { useDispatch } from 'react-redux';
//import {borrarProductoAction,obtenerProductoEditar} from '../actions/productoActions';

/*
    {
        "id": "ka2zq9xk",
        "title": {
            "title": "fox7"
        },
        "count": 0
    },

*/

const useStyles = makeStyles((theme) => ({
    ButtonCell: {
      '& > *': {
        margin: theme.spacing(1),
        
      },
    },
    title: {
        flexGrow: 1,
        display: 'block'
    },
  }));

const Contador = ({contador}) => { 

    const classes = useStyles();

    const {id,title,count} = contador

    //const dispatch = useDispatch();

    /*
    const confirmarEliminarContador = id => {

        Swal.fire({
            title:'seguro?',
            text: "nos e podra recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, borrar',
            cancelButtonText: 'cancelar '
        }).then((result) => {
            if (result.value) {
                //Pasar al action
                dispatch( borrarProductoAction(id) );
            }
        })         
    }
    */

    /*   SUMAR EN CONTADOR
    const redireccionarEdicion = producto => {
    dispatch( obtenerProductoEditar(producto) );
    history.push(`/producto/editar/${producto.id}`)
    */
    return(
        
            <TableRow >
                <TableCell style={{ width: 160 }} align="center">
                    {id}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                    {title.title}
                </TableCell>
                <TableCell   align="center" className={classes.ButtonCell}>              
                    <IconButton  style={{ color: green[500] }}>
                        <PlusOneIcon/>
                    </IconButton>
                    <Button  style={{ color: red[500] }}>
                        <ExposureNeg1Icon/>
                    </Button>
                    <Typography className={classes.title}>                    
                        Valor Contador: {count}
                    </Typography>
                </TableCell>
            </TableRow>
    )

}

export default Contador;