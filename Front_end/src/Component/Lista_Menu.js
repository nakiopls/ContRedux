import React from 'react'


import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import TuneIcon from '@material-ui/icons/Tune';
import ExposureIcon from '@material-ui/icons/Exposure';

import {Link} from 'react-router-dom';



const ListaMenu = () => {
    return (
        <div>
                
                <Divider />
                <List component="nav">
                    <Link to="/filtros">
                        <ListItem button>                        
                            <ListItemIcon>
                                <TuneIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Filtros'>                        
                            </ListItemText>                        
                        </ListItem>
                    </Link>
                    <Link to="/">
                        <ListItem button>
                            <ListItemIcon>
                                <ExposureIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Operaciones'>                        
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Divider />
                </List>
   
        </div>
    )
}

export default ListaMenu