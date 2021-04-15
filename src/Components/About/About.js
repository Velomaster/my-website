import React from "react";
// import { sizing, shadows } from '@material-ui/system';
import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import picture from '../../assets/About/my-pic.jpg'

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#33658A",
        textAlign:  "center",
        paddingTop: "2rem",
        paddingBottom: "2rem",
    },
    section: {
        flexWrap: "nowrap",
    },
    picture: {
        height: "350px",
        marginBottom: "-3px",

    },
    about: {
        paddingLeft: "3rem",
    },
    bio: {
        paddingLeft: "3rem",
        marginRight: "3rem",
        color: "#eef4ed",
        fontSize: "20px",
        fontWeight: "200",
        textAlign: "start"
    }
}))

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 style={{ color: "#eef4ed", paddingBottom: "2rem"}}>About Me</h1>
            <Grid container className={classes.section}>
                <Grid item className={classes.about}>
                    <Box boxShadow={6} border={18} borderColor="white">
                        <img src={picture} alt="pic" className={classes.picture}/>
                    </Box>
                </Grid>
                <Grid item >
                    <Typography variant="body1" component={'div'} className={classes.bio}>
                    <p>I’m a Texas based front-end developer. I work with a diverse range of clients, from home stay freelansers to well-established small and mid-size businesses.</p>
                    <p>With a mindset focused on results, I am good at picking up new skills quickly and implementing new information and techniques as soon as I learn them. I use my resourcefulness and positive mindset to adapt to new environments and situations. I welcome constructive criticism because it leads to growth, and I look at new challenges as learning opportunities. These are qualities and skills I would like to bring to your company.</p>
                    <p>I am looking forward to build an efficient and profitable project for you. Feel free to contact me in the Contact section below.</p>
                    <br></br>
                    <p><b>Alexander Gudkov</b></p>
                    </Typography>
                </Grid>
            </Grid>

        </div>
    )
}

export default About;