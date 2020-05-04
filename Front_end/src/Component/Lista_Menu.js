import React from 'react'


import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import TuneIcon from '@material-ui/icons/Tune';
import ExposureIcon from '@material-ui/icons/Exposure';




const Lista_Menu = () => {
    return (
        <div>
                
                <Divider />
                <List component="nav">
                    <ListItem button>
                        <ListItemIcon>
                            <TuneIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Filtros'>                        
                        </ListItemText>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <ExposureIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Operaciones'>                        
                        </ListItemText>
                    </ListItem>
                    
                    <Divider />
                </List>
   
        </div>
    )
}

export default Lista_Menu