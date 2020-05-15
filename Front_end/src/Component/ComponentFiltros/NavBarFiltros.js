import React,{useEffect}  from 'react'

import Select from 'react-select';
import {fade,makeStyles,useTheme} from '@material-ui/core/styles';
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
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    inputSelect: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '22ch',
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

const Navbar = (props) => {

    const classes = useStyles();
    //const theme = useTheme();

    const selectedOption = props.select;

    const options = [
        { value: 'Alfabeticamente', label: 'Alfabeticamente' },
        { value: 'Mayor a menor', label: 'Mayor a menor' },
        { value: 'Menor a mayor', label: 'Menor a mayor' },
      ];

    //console.log ("props from navbar", props);

    //console.log("contadores.[0]",props.contadores[0]);

    //props.contadores ? props.contadores[0].id : null;

    useEffect( ()=> {
        //console.log("------------------------");
        const result = props.contadores.filter(Contador => Contador.title.title.toLowerCase().includes(props.search));
        //console.log("resultado navbar", result);
        props.setSearchResult(result);
    },[props.search])

    //(props.contadores).map((cont) => 
    
    //console.log("resultado navbar",props.search)
    //)

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
          <Select                
                placeholder = "ordernar ..."
                onChange={props.handleChangeSelect}
                options={options}
                className={classes.inputSelect}
                isSearchable
                autoFocus
                theme={classes}
            />
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