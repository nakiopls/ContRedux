import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';



/*
    {
        "id": "ka2zq9xk",
        "title": {
            "title": "fox7"
        },
        "count": 0
    },

*/

const useStyles = makeStyles((theme) => ({
    ButtonCell: {
      '& > *': {
        margin: theme.spacing(1),
        
      },
    },
    title: {
        flexGrow: 1,
        display: 'block'
    },
  }));

const Contador = ({contador}) => { 

    const classes = useStyles();

    const {id,title,count} = contador

    return(
        
            <TableRow >
                <TableCell  align="center">
                    {id}
                </TableCell>
                <TableCell  align="center">
                    {title.title}
                </TableCell>
                <TableCell  align="center">
                    <Typography className={classes.title}>                    
                            Valor Contador: {count}
                    </Typography>
                </TableCell>
            </TableRow>
    )

}

export default Contador;