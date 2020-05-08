import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Drawer} from '@material-ui/core';

import ListaMenu from './Lista_Menu';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  ButtonMenuBack: {
    padding: theme.spacing(0),
    [theme.breakpoints.up('sm')]:{
      display: 'none',
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#bdbdbd'
  },
  drawerHeader_Menu: {
    backgroundColor: '#616161',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
    Typography: {
      align: "left",
    },
  },

}));

export default function Drawer_cajon(props) {

    const classes = useStyles();
    const theme = useTheme();
 
    console.log(" Drawer vgt ");
    return (     
        <Drawer
          className={classes.drawer}
          variant={props.variant}
          anchor="left"
          open={props.open}
          onClose={props.onClose ? props.onClose : null}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader_Menu}>
            <Typography variant="h6" color="initial" align="left">
              Menu
            </Typography>
            <IconButton onClick={() => props.onCloseIcon()} className={classes.ButtonMenuBack}>              
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>

          <ListaMenu></ListaMenu>

        </Drawer>
    );
  }