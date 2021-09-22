import React from 'react';
import { Typography, Card, List, ListItem} from '@material-ui/core';
import jcrafton from '../../images/jcrafton.JPG';

import useStyles from './styles';

const About = () => {
    const classes = useStyles();
    return(
        <Card width="300">
            <img src={jcrafton} alt="Jonathan Crafton" width="300" />
            <Typography className={classes.typography}>Who is Jonathan Crafton?</Typography>
            <List>
                <ListItem>Date of Birth: July 6th, 1996</ListItem>
                <ListItem>Graduated from Murray State University in May 2021</ListItem>
                <ListItem>B.S. in Computer Science with Game Development Minor</ListItem>
                <ListItem>Email: jhcrafton@gmail.com</ListItem>
            </List>
        </Card>
    );
};

export default About;