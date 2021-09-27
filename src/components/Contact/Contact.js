import React, {useRef} from 'react';
import { Typography, Card, Button } from '@material-ui/core';
import {init} from 'emailjs-com';
import emailjs from 'emailjs-com';

import useStyles from './styles';

const Contact = (props) => {
    const form = useRef();
    const classes = useStyles();
    init("user_IF4sImebAFiM0TmTlly5I");
    //const {cardLink} = this.props;
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(`default_service`, `template_zwx3t5i`, form.current, `user_IF4sImebAFiM0TmTlly5I`)
            .then((result) => {
                alert("Message Sent, We will get back to you shortly", result.text);
            },
            (error) => {
                alert("An error occurred, Please try again", error.text);
            });
        e.target.reset();
    };
    
    return(
        <form onSubmit={handleSubmit} ref={form}>
            <Card>
                <div>
                    <Typography className={classes.typography}>Contact Me Here: </Typography>
                </div>
                <div>
                    <label for="from">From: </label>
                    <input type="text" name="from"></input>
                </div>
                <div>
                    <label for="message">Message: </label>
                    <textArea name="message" rows="5" col="20"/>
                </div>
                <input type="submit" value="Send Message"></input>
                    {/*<Button onClick={handleSubmit}>Submit</Button>*/}
            </Card>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

            <script type="text/javascript">
                emailjs.init('user_IF4sImebAFiM0TmTlly5I')

            </script>
        </form>
        
        
    );
};

export default Contact;