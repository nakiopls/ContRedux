import React from 'react'

import { makeStyles} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, ThemeProvider } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import themeButton from '../Themes/ThemeConfig_Button';

import ModalAddUser from '../Component/ModalAddUser'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: '#F03637',
        [theme.breakpoints.up('sm')]:{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    button: {        
        margin: theme.spacing(1),
        palette: {
            primary: {
                main: '#701919'
            }
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display: 'none',
        },
    },
    
    title: {
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

const Navbar = (props) => {

    const classes = useStyles();

    //console.log ("props from navbar", props);

    return (

        <AppBar
            position="fixed"
            className={classes.appBar}
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    onClick={() => props.handleopenDrawer()}
                    color="inherit"
                    aria-label="open drawer"
                    //className={clsx(classes.menuButton, true && classes.hide)}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" >
                    Operación de Contadores
                    </Typography>
                <ThemeProvider theme={themeButton}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.button}
                        onClick={() => props.SumaTotalContadores()}>
                        Sumar contadores
                        </Button>
                    {/*</ThemeProvider><Button ml={1} variant="contained" color="primary" onClick={handleModalOpen}>*/}
                    <Button 
                        ml={1} 
                        variant="contained" 
                        color="primary" 
                        onClick={() => props.handleopenModal()}    
                    >
                        Agregar contador
                    </Button>
                    <ModalAddUser
                        open={props.openModal}  
                        handlecloseModal={props.handlecloseModal}                     
                    />
                </ThemeProvider>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;