import React,{useEffect}  from 'react';
import { fade, makeStyles, useTheme} from '@material-ui/core/styles';
import {useSelector,useDispatch} from 'react-redux';

import Typography from '@material-ui/core/Typography';

import { Drawer} from '@material-ui/core';
import ListaMenu from '../Component/Lista_Menu';
import NavbarFiltros from '../Component/ComponentFiltros/NavBarFiltros'
import TableFiltros from  '../Component/ComponentFiltros/TableFiltros'

import {obtenerTitulosAction} from '../Actions/titleAction'

import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';

import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

/*
import image from '../Images/food.jpg'

    palette: {
        primary: {
            main: '#b71c1c',
        }        
      },
*/ 
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
    backgroundSize:"cover",
    */
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




export default function Filtros() {

    const classes = useStyles();
    const theme = useTheme();

    // Abrir Drawer
    const [open, setOpen] = React.useState(false);
    // Filtro del Select
    const [select, setSelect] = React.useState("");
    // Palabra a filtrar
    const [search,setSearch] = React.useState("");
    // Resultado de la filtracion
    const [searchResult,setSearchResult] = React.useState([]);

    const dispatch = useDispatch();



    useEffect( ()=> {

      //consultar a la api
      const cargarTitulos = () => dispatch( obtenerTitulosAction() ) 
      cargarTitulos();
      // eslint-disable-next-line 
    },[]);

    const titulos = useSelector(state => state.contador.contadores);

    const titulos_aux = useSelector(state => state.contador.contadores);


    const handleChange = event => {
      setSearch(event.target.value);
    };

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const ordenarArregloAscendente = (arreglo) => {

      arreglo.sort((a,b) => (a.count-b.count))

    }

    const ordenarArregloDescendente = (arreglo) => {

      arreglo.sort((a,b) => (b.count-a.count))

    }

    const ordenarArregloAlfabeticamente = (arreglo) => {

      arreglo.sort((a,b) => (a.title.title.localeCompare(b.title.title)))

    }

    //REALIZAR ORDENAMIENTOS
    const renderSwitch = (params) => {

      switch (params.value) {
        case "Alfabeticamente":
          {if(searchResult.length !== 0)
            return ordenarArregloAlfabeticamente(searchResult)
           else{
            return ordenarArregloAlfabeticamente(titulos)            
           }
          }
          //return console.log("switch: ",params.value)
        case "MayorAMenor":
          {if(searchResult.length !== 0)
            return ordenarArregloDescendente(searchResult)
           else{
             return ordenarArregloDescendente(titulos)             
           }
          }
          //return console.log("switch: ",params.value)
        case "MenorAMayor":
          {if(searchResult.length !== 0)
            return ordenarArregloAscendente(searchResult)
           else{
            return ordenarArregloAscendente(titulos)            
           }
          }
          //return console.log("switch: ",params.value)                        
        default:
          console.log("swicht default");
      }      

    }
    
    return (
        
      <div className={classes.root}>
        <CssBaseline />
        <NavbarFiltros
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}  
          open={open}
          search={search}
          handleChange={handleChange}
          contadores={titulos_aux}
          setSearchResult={setSearchResult}
          handleChangeSelect={setSelect}
          select={select}
        />
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
                {renderSwitch(select)}

                {searchResult.length !== 0 ? 
                  
                  <TableFiltros titulos={searchResult}/> :

                  <TableFiltros titulos={titulos}/>                
                }
                                
        </main>
      </div>
    );
  }