import React from "react";
import {Grid, Typography, makeStyles } from '@material-ui/core';
import picture from '../../assets/About/my-pic.jpeg'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#33658A",
        paddingTop: "2rem",
        paddingBottom: "4rem",
    },
    title: {
        color: "#eef4ed", 
        paddingBottom: "2rem",
        fontFamily: `'Jost', sans-serif`,
        fontWeight: "400",
        fontSize: "55px",
    },
    content: {
        textAlign: "start",
    },
    picture: {
        width: "85%",
        height: "auto",
        borderRadius: "50%",
        [theme.breakpoints.down('sm')]: {
            width: "60%",
            marginBottom: "2rem",
        },
    },
    about: {
        paddingLeft: "3rem",
        paddingRight: "3rem",
    },
    bio: {
        paddingLeft: "3rem",
        color: "#eef4ed",
        fontSize: "22px",
        fontWeight: "200",
        textAlign: "start",
        float: "left",
        [theme.breakpoints.down('sm')]: {
            fontSize: "18px",
            paddingLeft: 0,
        },
    }
}))

const About = () => {
    const classes = useStyles();
    return (  
        <div className={classes.root}>
            <h1 className={classes.title}>About Me</h1>
            <Grid container className={classes.about}>
                <Grid item xs={12} md={4} >
                        <img src={picture} alt="pic" className={classes.picture}/>
                </Grid>
                <Grid item xs={12} md={8} >
                    <Typography variant="body1" component={'div'} className={classes.bio}>
                    <p style={{marginTop: "0"}}>I am a Texas based self-taught website developer with 8 years of experience.</p>
                    <p>I build websites and applications for small and medium sized businesses including manufacturing companies, financial services, retailing, construction, engineering, legal, interior design, and architectural firms.</p>
                    <p>I am looking forward to build an efficient and profitable project for you. Feel free to contact me in the Contact section below.</p>
                    <br></br>
                    <p style={{marginTop: "0"}}><b>Alexander Gudkov</b></p>
                    </Typography>
                </Grid>
            </Grid>
        </div>  
    )
}

export default About;