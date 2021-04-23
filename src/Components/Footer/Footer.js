import React from "react";
import { Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#eef4ed",
        paddingTop: "1rem",
    },
    footer: {
        color: "#2F4858",
        fontSize: "16px",
        fontWeight: "300",
        textAlign: "center",
        paddingTop: "1rem",
        paddingBottom: "1rem",
    }
}));

const Footer = () => {
    const classes = useStyles();
    const year = new Date().getFullYear();
    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <Divider style={{marginBottom: "2rem", marginLeft: "2rem", marginRight: "2rem"}}/>
                <span>Developed with ♥️ in Texas. All rights reserved &copy; {year}</span> 
            </footer>
        </div>
    )
}

export default Footer;