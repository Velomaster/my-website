import {React, useState } from 'react';
import {Grid, Link, Fade, Button, makeStyles} from '@material-ui/core';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';
import OpenWithRoundedIcon from '@material-ui/icons/OpenWithRounded';
import ModalElement from '../ModalElement/ModalElement';
import Image from 'material-ui-image';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "2rem",
    },
    cardContent: {
        color: "#eef4ed",
        fontSize: "20px",
        fontWeight: "300",
        fontFamily: `'Jost', sans-serif`,
        paddingLeft: "10px",
        [theme.breakpoints.down('xs')]: {
            fontSize: "14px",
            paddingLeft: "5px",
        }
    },
    buttons: {
        color: "#eef4ed",
        marginTop: "20px",
        border: "solid 1px #eef4ed",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "400",
        '&:hover': {
            color: "#F26419",
            border: "solid 1px #F26419",
        },
    },
    image: {
        width: "80%",
        objectFit: "initial",
    },
    popup: {
        width: "80%",
        objectFit: "initial",
        boxShadow: theme.shadows[5],
        [theme.breakpoints.down('xs')]: {
            width: "90%",
        },
    }
}));

const Project = (props) => {
    const classes = useStyles();
    const [screenshotOpen, setScreenshotOpen] = useState(false);
    const closeModal = () => {
        setScreenshotOpen(false);
    };

    const aspectRatio = 2 / 1;

    const screenshot = (
        <div className={classes.popup}>
            <Image src={props.image} aspectRatio={aspectRatio} cover onClick={() => closeModal()} />
        </div>);
    
    return (
        <div className={classes.root}>
            <Grid container justify="center" alignItems="center">
                 <Grid item xs={12}>
                    <Image className={classes.image} src={props.image} aspectRatio={aspectRatio} cover />
                 </Grid>
                 <Grid item xs={12} >
                    <Button className={classes.buttons} small variant="outlined" endIcon={<OpenWithRoundedIcon />} onClick={() => setScreenshotOpen(!screenshotOpen)}>open</Button>
                    <ModalElement open={screenshotOpen} close={() => closeModal()}>
                        <Fade in={screenshotOpen} {...(!screenshotOpen ? { timeout: 1000 } : {})}>
                            {screenshot}
                        </Fade>
                    </ModalElement>
                    <Link
                        href={props.link}
                        rel="noopener noreferrer" 
                        target="_blank" >
                            <Button className={classes.buttons} style={{marginLeft: "20px"}} small variant="outlined" endIcon={<OpenInNewRoundedIcon />}>try out</Button>
                    </Link> 
                 </Grid>
            </Grid>
        </div>
    )
}

export default Project;