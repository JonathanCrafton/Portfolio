import React from 'react';
import { BottomNavigation } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

const Card = () => {
    const classes = useStyles();
    return(
        <BottomNavigation>
            <Toolbar>
                <Typography>Footer</Typography>
            </Toolbar>
        </BottomNavigation>
        
    );
};

export default Card;