import React from "react";
import { Button, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#eef4ed",
        height: "100vh",
    },
    title: {
        color: "#2F4858",
        paddingBottom: "2rem",
        paddingTop: "12rem",
        marginTop: "0",
        fontFamily: `'Jost', sans-serif`,
        fontWeight: "400",
        fontSize: "55px",

    },
    button: {
        color: "#2F4858",
        marginTop: "20px",
        border: "solid 1px #2F4858",
        borderRadius: "20px",
        fontSize: "14px",
        fontWeight: "400",
    }
}));

const ErrorPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>Page Not Found</h2>
           <Link underline="none" href="/"><Button className={classes.button}>Go Back</Button></Link> 
        </div>
    );
};

export default ErrorPage;