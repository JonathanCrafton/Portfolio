import React from 'react';
import { Typography, Card, Button } from '@material-ui/core';

import useStyles from './styles';

const ProjectCard = (props) => {
    const classes = useStyles();
    //const {cardLink} = this.props;
    return(
        
        <Card width={250}>
            <img src={props.cardImage} width={250}/>
            <Typography>{props.cardTitle}</Typography>
            <Typography>{props.cardDescription}</Typography>
            <Button>View</Button>
        </Card>
        
    );
};

export default ProjectCard;