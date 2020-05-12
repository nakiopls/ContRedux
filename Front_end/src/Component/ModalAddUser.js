import React,{Fragment} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {useDispatch} from 'react-redux';
import Swal from 'sweetalert2';

import {crearNuevoTituloAction} from '../Actions/titleAction'


export default function ModalAddUser(props) {
    
    //States
    const [title, guardarTitle] = React.useState('');

    const dispatch = useDispatch();

    //Comprobacion onChange
    //console.log("input from modal",title);

    const agregarTitulo = (title) => dispatch( crearNuevoTituloAction(title));
    

    const handleSubmit = () => {

        if (title === '') {
            Swal.fire({
                icon:'error',
                title: 'El campo no puede ser vacio',
                text: 'intente nuevamente'
            })
            props.handlecloseModal();
            return;
        }

        agregarTitulo({
            title
        });

        guardarTitle('');

        props.handlecloseModal();

    }

    return (
        <Fragment>

            <Dialog open={props.open} onClose={props.handlecloseModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Agregar Contador
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Favor de ingresar el nombre del titulo
                    </DialogContentText>
                    <form
                        
                    >
                        <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Title Name"
                            value={title}            
                            fullWidth
                            onChange={e => guardarTitle(e.target.value)}
                        />


                    </form>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={() => props.handlecloseModal()}>
                        Cancel
                    </Button>
                    <Button  color="primary" onClick={() => handleSubmit()}>
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}