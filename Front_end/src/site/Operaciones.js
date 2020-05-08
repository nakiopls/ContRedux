import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Hidden} from '@material-ui/core';

import Navbar from '../Component/Navbar'
import DrawerCajon from '../Component/Drawer_cajon';
import Table from '../Component/Table';

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    
  },
  content: {
    /*
    backgroundImage : `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize:"cover",
    width: "100%",
    height: "700px",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    */
    backgroundColor: "#fce4ec",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {    
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
    Typography: {
      align: "left",
    },}
}));

export default function Operaciones(props) {

    const classes = useStyles();
    //Drawer
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const handleopenDrawer = () => {
      setOpenDrawer(!openDrawer) 
    }
    const handlecloseDrawer = () => {
      console.log("handle close")
      setOpenDrawer(false)
    }

    //Modal
    //const [openModal, setOpenModal] = React.useState(false);

    console.log();
    console.log("operaciones vgts");
    return (
      <div className={classes.root}>
        
        <Navbar handleopenDrawer={handleopenDrawer}/>
        <Hidden xsDown>
          <DrawerCajon
            variant="permanent"
            open={true}
          />
        </Hidden>
        <Hidden smUp>
          <DrawerCajon
            variant="temporary"
            open={openDrawer}
            onClose={handleopenDrawer}
            onCloseIcon={handlecloseDrawer}
          />
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Table/>
        </main>
      </div>
    );
  }