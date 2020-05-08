import React ,{useState} from 'react'

import { useDispatch,useSelector} from 'react-redux';
import {crearNuevoTituloAction} from '../Actions/titleAction'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function NewCont() {

    //State del componente
    const[title,guardarTitle] = useState('');

    const dispatch = useDispatch();

    const agregarTitulo = (titulo) => dispatch( crearNuevoTituloAction(titulo));

    return(
        <div>

        </div>

    );
}