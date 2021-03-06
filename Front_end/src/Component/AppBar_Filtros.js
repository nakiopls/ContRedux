import React from 'react';
import { fade, makeStyles, useTheme} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Drawer, Button, ThemeProvider} from '@material-ui/core';

import Lista_Menu from './Lista_Menu';

import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
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
    backgroundImage : `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize:"cover",
    backgroundColor: "#FFFFFF",
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
    background : `url(${image})`,
    backgroundRepeat: "no-repeat",
    
    backgroundSize:"cover",
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
  },
  drawerHeader: {
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
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));




export default function AppBar_Filtros() {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

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
          <div className={classes.drawerHeader}>
            <Typography variant="h6" color="initial" align="left">
              Menu
            </Typography>
            <IconButton onClick={handleDrawerClose} className={classes.ButtonMenuBack}>              
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>

          <Lista_Menu></Lista_Menu>

        </Drawer>
        <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
                <div className={classes.drawerHeader} />
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                  facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                  gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                  donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                  adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                  Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                  imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                  arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                  donec massa sapien faucibus et molestie ac.
                </Typography>
        </main>
      </div>
    );
  }