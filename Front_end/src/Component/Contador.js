import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Swal from 'sweetalert2';

import {useDispatch} from 'react-redux';

import { red } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import DeleteIcon from '@material-ui/icons/Delete';

import {borrarContadorAction,SumarContadorAction,RestarContadorAction} from '../Actions/titleAction'

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

    const dispatch = useDispatch();

    const {id,title,count} = contador

    const confirmarEliminarContador = id =>{
       
        Swal.fire({
            title:'seguro?',
            text: "no se podra recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, borrar',
            cancelButtonText: 'cancelar '
        }).then((result) => {
            if (result.value) {
                //Pasar al action
                dispatch( borrarContadorAction(id) );
            }
        })

    }
    const SumarContador = id => {

        dispatch( SumarContadorAction(id) )
    }

    const RestarContador = id => {

        dispatch( RestarContadorAction(id) )
    }

    return(
        
            <TableRow >
                <TableCell  align="center">
                    {id}
                </TableCell>
                <TableCell  align="center">
                    {title.title}
                </TableCell>
                <TableCell  align="center">
                    <Typography className={classes.title}>                    
                            Valor Contador: {count}
                    </Typography>
                </TableCell>
                <TableCell   align="center" >              
                    <IconButton  
                        style={{ color: green[500] }}
                        onClick={() => SumarContador(id)}
                        >
                        <PlusOneIcon/>
                    </IconButton>
                    <IconButton  
                    style={{ color: red[500] }}
                    onClick={() => RestarContador(id)}
                    >
                        <ExposureNeg1Icon/>
                    </IconButton>
                    <IconButton 
                        onClick={() => confirmarEliminarContador(id)}
                    >
                        <DeleteIcon/>
                    </IconButton>

                </TableCell>
            </TableRow>
    )

}

export default Contador;