import React from "react";
import { Grid, Button, makeStyles } from '@material-ui/core';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    root: {
       backgroundColor: "#eef4ed",
    },
    title: {
        fontFamily: `'Jost', sans-serif`,
        fontWeight: "400",
        color: "#33658A",
        fontSize: "7vw",
        [theme.breakpoints.down('xs')]: {
            fontSize: "48px",
            marginTop: "2rem",
            marginBottom: "1rem",
        },
        marginTop: "6rem",
        marginBottom: "2rem",
        minWidth: "80%",
    },
    subtitle: {
        fontFamily: `'Jost', sans-serif`,
        fontWeight: "900",
        letterSpacing: "1px",
        color: "#2F4858",
        fontSize: "2vw",
        marginBottom: "5rem",
        [theme.breakpoints.down('md')]: {
            fontSize: "22px",
            marginBottom: "3rem",
        }
    },
    button: {
        textAlign: "center",
        backgroundColor: "#F26419",
        borderRadius: "35px",
        width: "160px",
        height: "45px",
        fontSize: "20px",
        fontWeight: "400",
        '&:hover': {
            backgroundColor: "#C2570A"
        }
    },
    arrow: {
        display: "block",
        color: "#2F4858",
        marginTop: "7rem",
        marginBottom: "2rem"
    }
}));

const Main = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="center">
                <Grid item xs={12}>
                    <h1 className={classes.title}>I Make Powerful Things</h1>
                </Grid>
                <Grid item xs={12}>
                    <h3 className={classes.subtitle}> &#123; front-end web developer &#125;</h3>
                </Grid>
                <Grid item xs={12}>
                    <Link to="contact-form" smooth="true" style={{textDecoration: "none"}}> 
                        <Button variant="contained" color="secondary" disableElevation className={classes.button}>Hire Me</Button>
                    </Link>
                </Grid>
                <Grid>
                    <ArrowDropDownCircleOutlinedIcon className={classes.arrow} fontSize="large"/>
                </Grid>
            </Grid>
        </div>

    )
}

export default Main;