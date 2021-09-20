import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return(
      <AppBar classname={classes.appBar}>
            <Toolbar>
                <Typography>Jonathan Crafton</Typography>
            </Toolbar>
      </AppBar>  
    );
};

export default Navbar;