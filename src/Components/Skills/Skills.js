import React from "react";
import {Grid, makeStyles } from '@material-ui/core';
import Skill from '../Skill/Skill';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#eef4ed",
        paddingTop: "2rem",
        paddingBottom: "3rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")`,
    },
    title: {
        fontFamily: `'Jost', sans-serif`,
        fontSize: "55px",
        fontWeight: "400",
        color: "#2F4858",
    },
    skills: {
        maxWidth: "650px",
        margin: "auto",

    },
    iconsList: {
        paddingTop: "5rem",
    },
    icons: {
        height: "40px",
        backgroundSize: 'contain',
        marginBottom: "3rem",
    },
}));

const Skills = () => {
    const classes = useStyles();

    const icons = [
        {
            logo: "https://res.cloudinary.com/dpaz0qw3s/image/upload/v1618368371/icons/js_ocszjm.png",
            alt: "js"
        },
        {
            logo: "https://res.cloudinary.com/dpaz0qw3s/image/upload/v1618368371/icons/html_ax57zo.png",
            alt: "html"
        },
        {
            logo: "https://res.cloudinary.com/dpaz0qw3s/image/upload/v1618368371/icons/css_qy3nfs.png",
            alt: "css"
        },
        {
            logo: "https://res.cloudinary.com/dpaz0qw3s/image/upload/v1618368622/icons/react_vdyzcm.png",
            alt: "react"
        },
        {
            logo: "https://res.cloudinary.com/dpaz0qw3s/image/upload/v1618367410/icons/redux_nue22g.png",
            alt: "redux"
        },
        {
            logo: "https://res.cloudinary.com/dpaz0qw3s/image/upload/v1618369045/icons/node_rf1god.png",
            alt: "node"
        },
        {
            logo: "https://res.cloudinary.com/dpaz0qw3s/image/upload/v1618369122/icons/bootstrap-logo_dic1ku.png",
            alt: "bootstrap"
        },
        {
            logo: "https://res.cloudinary.com/dpaz0qw3s/image/upload/v1618369394/icons/materialui_u6soz0.png",
            alt: "material-ui"
        },
        {
            logo: "https://res.cloudinary.com/dpaz0qw3s/image/upload/v1618368870/icons/mongodb_x7anfb.png",
            alt: "mongodb"
        },
        {
            logo: "https://res.cloudinary.com/dpaz0qw3s/image/upload/v1618368870/icons/firebase_zoyulu.png",
            alt: "firebase"
        },
    ]
    const skills = [
        "JavaScript", "HTML", "CSS", "ReactJS", "Redux", "Parcel JS", "Bootstrap", "jQuery", "MongoDB", "Firebase", "NodeJS", "Express", "GitHub", "REST", "API"
    ]

    return (
        <div className={classes.root} id="skills">
                <h1 className={classes.title}>My Skills</h1>
            <Grid container alignItems="center" className={classes.skills}>
                {skills.map((skill, i) => (
                    <Grid item xs={6} sm={4} key={i}>
                        <Skill skill={skill} />
                    </Grid>
                ))}
            </Grid>

            <Grid container justify="center" className={classes.iconsList}>
                {icons.map((item, i) => (
                     <Grid item key={i} xs={6} sm={6} md={1} >
                        <img src={item.logo} alt={item.alt} className={classes.icons} />
                     </Grid>
                )) }
            </Grid>
        </div>
    )
}

export default Skills;