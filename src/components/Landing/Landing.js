import React from 'react';
import { Typography } from '@material-ui/core';
import background from '../../images/bg_mountain.jpg';

import useStyles from './styles';

const Landing = () => {
    const classes = useStyles();
    return(
        <div>
            <img src={background} alt="Background Image" />
            <h1 class={classes.centeredText}>Hello there!</h1>
        </div>
        

    );
};

export default Landing;