import React,{useEffect}  from 'react'

import Select from 'react-select';

import TextField from '@material-ui/core/TextField';
import {fade,makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';




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
        width: '20ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    inputSelect: {
        padding: theme.spacing(1, 1, 1, 0),
        color:'#000',
        // vertical padding + font size from searchIcon
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '22ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    inputNumber: {
      
      background:'inherent',
      color:'#808080',
      colors: {
        ...theme.colors,
        primary25: '#F03637',
        primary: '#ffffff',
      }
    },  
    menuButton: {
      marginRight: theme.spacing(2),
    },
    margin:{
      margin: theme.spacing(1)
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
    textField: {
      width: '30ch',
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  }));

const Navbar = (props) => {

    const classes = useStyles();

    const options = [
        { value: 'Alfabeticamente', label: 'Alfabeticamente' },
        { value: 'MayorAMenor', label: 'Mayor a menor' },
        { value: 'MenorAMayor', label: 'Menor a mayor' },
      ];

    const optionsNumber = [
      { value: 'Alfabeticamente', label: 'Alfabeticamente' },
      { value: 'MayorAMenor', label: 'Mayor a menor' },
      { value: 'MenorAMayor', label: 'Menor a mayor' },
      { value: 'MenorQue', label: 'Menor que '+(props.number) },
      { value: 'MayorQue', label: 'Mayor que '+(props.number) },
    ];

    const {contadores,search,number,select,
            handleChangeSearchResult,setNumberMayorResult,
           searchResult,setNumberMenorResult} = props;
    
    //console.log("select, number from navbar",select.value,number)

    useEffect( ()=> {

        //AGREGAR CONDICION, LA CUAL VERIFICA SI NUMBER ES NULO
        // SI ES NULO Y EL VALUE DEL SELECT TBN,MANDAR FILTRO EN EL INPUTSEARCH CON SETSEARCH(RESULT DE TITULOS)
        // EN EL CASO CONTRARIO CON VALUE DEL SELECT 'MAYORQUE' ENVIAR FILTRADO MAYORQUE CON SETSEARCH(RESULTMAYORQUE CON SEARCHRESULT), 
        // CON VALUE DEL SELECT 'MENORQUE', ENVIAR FILTRADO MENORQUE CON SETSEACRH(RESULTMENORQUE CON SEARCHRESULT)                                                                    

        if(number.length === 0 ){
          console.log("number.lenght === 0")
          const result = contadores.filter(Contador => Contador.title.title.toLowerCase().includes(search));
          handleChangeSearchResult(result);
        }
        else{
          if(number.length !== 0 && search.length !== 0 && (select.value !=='MenorQue' && select.value !=='MayorQue')){
            console.log("ñeeeeee",search)
            if(searchResult.length !== 0){
              console.log("ñeeeeee2",search)
              const result = searchResult.filter(Contador => Contador.title.title.toLowerCase().includes(search));
              console.log("ñeeeeee final",result)
              handleChangeSearchResult(result);
            }
            else{
              if(select.value !=='MenorQue' && select.value !=='MayorQue' ){
                const result = contadores.filter(Contador => Contador.title.title.toLowerCase().includes(search));
                handleChangeSearchResult(result);
              }
            }
          }else{

            console.log("else 1st condition -----------------------")
          if (select.value ===  'MenorQue' && number.length !== 0){
            console.log("----------------------- ")
            if(searchResult.length !== 0){
              console.log("----------------------- 2")
              const aux = searchResult.filter(contador => contador.count < number)
              console.log("aux",aux);
              //setSearchResult(aux)
              handleChangeSearchResult(aux);  
            }
            else{
              console.log("----------------------- 3")
              const aux = contadores.filter(contador => contador.count < number)
              //setSearchResult(aux)
              console.log("aux",aux);
              handleChangeSearchResult(aux);
            }
          }
          else{
            if (select.value ===  'MayorQue' && number.length !== 0){
              console.log("----------------------- mayorQe")
              if(searchResult.length !== 0){
              const aux2 = searchResult.filter(contador => contador.count > number)
              console.log("from useEffect", aux2)
              //setSearchResult(aux)
              handleChangeSearchResult(aux2);  
              }
              else{
                const aux2 = contadores.filter(contador => contador.count > number)
                //setSearchResult(aux)
                handleChangeSearchResult(aux2);
              }
            }
          }

          }
          
        }
        console.log("lenght search----------------", search.length)
        if(search.length === 0 && number.length === 0){
          //const result = contadores.filter(Contador => Contador.title.title.toLowerCase().includes(search));
          handleChangeSearchResult(contadores);
        }

        //const resultNumberMayor = contadores.filter(Contador => (Contador.count > number));
        //setNumberMayorResult(resultNumberMayor)
        //const resultNumberMenor = contadores.filter(Contador => (Contador.count < number));
        //setNumberMenorResult(resultNumberMenor)
        // eslint-disable-next-line        
    },[search,select])

    return (

        <AppBar 
        position="fixed" 
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={props.handleDrawerOpen}
            color="inherit"
            aria-label="open drawer"
            className={clsx(classes.menuButton, props.open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Filtro de Contadores
          </Typography>
          <InputBase
              type="number"
              placeholder="Número a comparar ..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={props.number}
              onChange={props.handleChangeNumber}
              //value={props.search}
              //onChange={props.handleChange}
              inputProps={{ 'aria-label': 'searchNumber' }}
              
            />
          <TextField
            label="Número a comparar "
            type="number"
            color="#fff"
            id="filled-start-adornment"
            className={clsx(classes.margin, classes.textField,classes.inputNumber)}
            variant="outlined"
            theme={theme => ({
              ...theme,
              //borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#F03637',
                primary: '#ffffff',
              },
            })}
            
          />
          {props.number.length > 0 
              ?              
              <Select                
              placeholder = "ordernar ..."
              onChange={props.handleChangeSelect}
              options={optionsNumber}
              className={classes.inputSelect}                
              autoFocus
              //theme={classes}
              theme={theme => ({
                ...theme,
                //borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: '#F03637',
                  primary: '#000',
                },
              })}
              />
              :
              <Select                
              placeholder = "ordernar ..."
              onChange={props.handleChangeSelect}
              options={options}
              className={classes.inputSelect}                
              autoFocus
              //theme={classes}
              theme={theme => ({
                ...theme,
                //borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: '#F03637',
                  primary: '#000',
                },
              })}
          />
          }        
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              type="text"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={props.search}
              onChange={props.handleChange}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar;