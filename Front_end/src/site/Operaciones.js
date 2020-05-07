import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Drawer, Button, ThemeProvider} from '@material-ui/core';

import ListaMenu from '../Component/Lista_Menu';
import Table from '../Component/Table';

import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import themeButton from '../Themes/ThemeConfig_Button';
import image from '../Images/food.jpg'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexGrow: 1,
  },
  appBar: {
    background:'#F03637',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  button: {
    margin:  theme.spacing(2),
    palette :{
      primary :{
        main: '#701919'
      }
    },
  },
  ButtonMenuBack: {
    padding: theme.spacing(0),
  },
  content: {
    /*
    backgroundImage : `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize:"cover",
    */
    backgroundColor: "#fce4ec",
    width: "100%",
    height: "700px",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    /*
    background : `url(${image})`,
    backgroundRepeat: "no-repeat",    
    backgroundSize:"cover",*/
    backgroundColor: "#fce4ec",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
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
  drawerHeader_Content: {
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
  hide: {
    display: 'none',
  },
  inputRoot: {
    color: 'inherit',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function Operaciones() {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    console.log("operaciones vgts");
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar 
          position="fixed" 
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              edge="start"
              onClick={handleDrawerOpen}
              color="inherit"
              aria-label="open drawer"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Operación de Contadores
            </Typography>
            <ThemeProvider theme={themeButton}>
            <Button variant="contained" color="primary" className={classes.button}>
              Sumar contadores
            </Button>
            <Button ml={1} variant="contained" color="primary">
              Agregar contador
            </Button>            
            </ThemeProvider>          
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader_Menu}>
            <Typography variant="h6" color="initial" align="left">
              Menu
            </Typography>
            <IconButton onClick={handleDrawerClose} className={classes.ButtonMenuBack}>              
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>

          <ListaMenu></ListaMenu>

        </Drawer>
        <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
                <div className={classes.drawerHeader_Content} />
                <Table/>
        </main>
      </div>
    );
  }