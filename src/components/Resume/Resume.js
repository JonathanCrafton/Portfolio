import React from 'react';
import { Typography, Card, List, ListItem, ListSubheader} from '@material-ui/core';
import useStyles from './styles';
import ProjectCard from '../Card/ProjectCard';
import jcrafton from '../../images/jcrafton.JPG';

const Resume = () => {
    const classes = useStyles();
    return(
        <Card width="300">
            <Typography className={classes.typography}>Here's my Resume</Typography>
            <Typography className={classes.h1}>Experience</Typography>
            <Typography className={classes.h2}>Strawberry's BBQ</Typography>
            <Typography className={classes.h3}>Where: Holcomb, MO</Typography>
            <Typography className={classes.h3}>Position: Cook</Typography>
            <Typography className={classes.h3}>Dates: September 2014 - May 2015</Typography>
            <Typography className={classes.h3}>Duties:</Typography>
            <ul>
                <li className={classes.li}>Prepared meals for customers</li>
                <li className={classes.li}>Cleane and stocked the kitchen</li>
                <li className={classes.li}>Cleaned dishes</li>
            </ul>
            <Typography className={classes.h2}>Kennett Public Schools</Typography>
            <Typography className={classes.h3}>Where: Kennett, MO</Typography>
            <Typography className={classes.h3}>Position: I.T.</Typography>
            <Typography className={classes.h3}>Dates: May 2015 - July 2015</Typography>
            <Typography className={classes.h3}>Duties:</Typography>
            <ul>
                <li className={classes.li}>Ran network cabling</li>
                <li className={classes.li}>Reset computers</li>
                <li className={classes.li}>Set up Chromebooks</li>
            </ul>
            <Typography className={classes.h2}>Senath-Hornersville C-8 Schools</Typography>
            <Typography className={classes.h3}>Where: Senath, MO</Typography>
            <Typography className={classes.h3}>Position: I.T.</Typography>
            <Typography className={classes.h3}>Dates: August 2015 - May 2016</Typography>
            <Typography className={classes.h3}>Duties:</Typography>
            <ul>
                <li className={classes.li}>Repaired Chromebooks</li>
                <li className={classes.li}>Set up printers</li>
                <li className={classes.li}>Fixed computer issues</li>
            </ul>
            <Typography className={classes.h2}>McDonald's</Typography>
            <Typography className={classes.h3}>Where: Murray, KY</Typography>
            <Typography className={classes.h3}>Position: Cook</Typography>
            <Typography className={classes.h3}>Dates: September 2019 - April 2020</Typography>
            <Typography className={classes.h3}>Duties:</Typography>
            <ul>
            <li className={classes.li}>Prepared meals for customers</li>
                <li className={classes.li}>Cleane and stocked the kitchen</li>
                <li className={classes.li}>Cleaned dishes</li>
            </ul>
            <ProjectCard cardImage={jcrafton} cardTitle="Test" cardDescription="Test Description"/>
        </Card>
        
    );
};

export default Resume;