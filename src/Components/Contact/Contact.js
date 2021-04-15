import React from 'react';
import { Grid, Link, makeStyles } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#eef4ed",
        paddingTop: "2rem",
        paddingBottom: "2rem",
    },
    title: {
        color: "#2F4858",
        textAlign: "center",
    },
    icons: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
        color: "#2F4858",
        textAlign: "center",
        textDecoration: "none",
        
    }
}));

const ContactForm = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Contact Me</h1>
            <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item xs={4} className={classes.icons}>
                        <Link
                            href="mailto: gudkov.alex11@gmail.com" >
                                <AlternateEmailIcon fontSize="large" style={{color: "#2F4858", cursor: "pointer"}}/>
                        </Link>
                        <Link
                            href="https://t.me/alex_gudkov"
                            rel="noopener noreferrer" 
                            target="_blank">
                                <TelegramIcon fontSize="large" style={{marginLeft: "35px", color: "#2F4858", cursor: "pointer"}}/>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/alexgudkov/"
                            rel="noopener noreferrer" 
                            target="_blank">
                            <LinkedInIcon fontSize="large" style={{marginLeft: "35px", color: "#2F4858", cursor: "pointer"}}/>
                        </Link>
                        <Link
                            href="https://github.com/Velomaster"
                            rel="noopener noreferrer" 
                            target="_blank">
                            <GitHubIcon fontSize="large" style={{marginLeft: "35px", color: "#2F4858", cursor: "pointer"}}/>
                        </Link>
                </Grid>
                <Grid item xs={8} style={{backgroundColor: "green"}}>
                <div>content</div>
                </Grid>
            </Grid>
        </div>
    )
};

export default ContactForm;