import React from 'react';
import { Typography, Card, List, ListItem, ListSubheader} from '@material-ui/core';
import useStyles from './styles';
import ProjectCard from '../Card/ProjectCard';
import DegreePlannerImg from '../../images/DegreePlannerImg.PNG';
import resume from '../../images/resume.pdf';
const Resume = () => {
    const classes = useStyles();
    return(
        <Card width="300">
            
            <div>
                <iframe src={resume} width="1000px" height="1000px"></iframe>
            </div>
            <ProjectCard cardImage={DegreePlannerImg} cardTitle="Degree Planner" cardDescription="Test Description" link="https://csclab.murraystate.edu/csc530/dev/"/>
        </Card>
        
    );
};

export default Resume;