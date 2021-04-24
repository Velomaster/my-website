import React from "react";
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';

const useStyles = makeStyles((theme) => ({
    body: {
        backgroundColor: "#F6AE2D",
    },
    hero: {
       paddingTop: "2rem",
       paddingBottom: "2rem",
    },
    title: {
        fontFamily: `'RocknRoll One', sans-serif`,
        color: "#33658A",
        fontSize: "70px",
        textAlign: "center",
        marginTop: "8rem",
        marginBottom: "2rem"
    },
    subtitle: {
        color: "#2F4858",
        fontSize: "20px",
        textAlign: "center",
        marginBottom: "7rem"
    },
    button: {
        textAlign: "center",
        backgroundColor: "#F26419",
        borderRadius: "35px",
        width: "160px",
        height: "45px",
        fontSize: "16px",
        fontWeight: "400"

    },
    arrow: {
        margin: "8rem auto 0",
        display: "block",
        color: "#2F4858",

    }
}));

const Main = () => {
    const classes = useStyles();
    return (
        <div className={classes.body}>

            <Container className={classes.hero}>
                <h1 className={classes.title}>I Make Powerful Things</h1>
                <h3 className={classes.subtitle}> &#123; front-end web developer &#125;</h3>
                <Box justifyContent="center" display="flex">
                    <Button variant="contained" color="secondary" disableElevation className={classes.button}>Hire Me</Button>
                </Box>
                <ArrowDropDownCircleOutlinedIcon className={classes.arrow} fontSize="large"/>

            </Container>
        </div>

    )
}

export default Main;