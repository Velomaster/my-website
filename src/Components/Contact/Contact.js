import React from 'react';
import { Grid, Link, makeStyles } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactForm from '../ContactForm/ContactForm';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#eef4ed",
        paddingTop: "1rem",
        paddingBottom: "4rem",
    },
    title: {
        color: "#2F4858",
        textAlign: "center",
        paddingBottom: "2rem",
        fontFamily: `'Jost', sans-serif`,
        fontWeight: "400",
        fontSize: "55px",
        
    },
    icons: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
        color: "#2F4858",
        textAlign: "center",
        textDecoration: "none",
    },
    icon: {
        '&:hover': {
            color: "#F26419"
        },
        color: "#2F4858",
        cursor: "pointer",
    },
    iconsTitle: {
        marginBottom: "2rem", 
        marginTop: "3rem",
        fontSize: "30px", 
        fontWeight: "200",
    }
}));

const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="contact">
            <h1 className={classes.title}>Contact</h1>
            <Grid container spacing={2} alignItems="flex-end" >
                <Grid item xs={12} md={4} className={classes.icons}>
                        <h3 className={classes.iconsTitle}>Let's keep in touch:</h3>
                        <Link
                            href="mailto: gudkov.alex11@gmail.com" >
                                <AlternateEmailIcon className={classes.icon} fontSize="large"/>
                        </Link>
                        <Link
                            style={{marginLeft: "35px"}}
                            href="https://t.me/alex_gudkov"
                            rel="noopener noreferrer" 
                            target="_blank">
                                <TelegramIcon className={classes.icon} fontSize="large"/>
                        </Link>
                        <Link
                            style={{marginLeft: "35px"}}
                            href="https://www.linkedin.com/in/alexgudkov/"
                            rel="noopener noreferrer" 
                            target="_blank">
                            <LinkedInIcon className={classes.icon} fontSize="large"/>
                        </Link>
                        <Link
                            style={{marginLeft: "35px"}}
                            href="https://github.com/Velomaster"
                            rel="noopener noreferrer" 
                            target="_blank">
                            <GitHubIcon className={classes.icon} fontSize="large"/>
                        </Link>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container justify="center">
                        <Grid item xs={11}>
                            <div id="contact-form">
                                <ContactForm  />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

export default Contact;