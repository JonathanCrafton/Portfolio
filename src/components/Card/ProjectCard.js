import React from 'react';
import { Typography, Card, Button } from '@material-ui/core';

import useStyles from './styles';

const ProjectCard = (props) => {
    const classes = useStyles();
    //const {cardLink} = this.props;
    return(
        
        <Card width={500}>
            <img src={props.cardImage} width={1000}/>
            <Typography>{props.cardTitle}</Typography>
            <Typography>{props.cardDescription}</Typography>
            <a href={props.link} target="_blank">
                <Button>View</Button>
            </a>
            
        </Card>
        
    );
};

export default ProjectCard;