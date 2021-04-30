import {React, useState } from 'react';
import {Grid, Link, Box, Fade, makeStyles} from '@material-ui/core';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';
import OpenWithRoundedIcon from '@material-ui/icons/OpenWithRounded';
import ModalElement from '../ModalElement/ModalElement';
import Image from 'material-ui-image';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "rgba(0, 0, 0, 0.15)",
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
    icons: {
        color: "#f1faee",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingRight: "10px",
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
                 <Grid item xs={6}>
                    <Box display="flex" justifyContent="flex-start">
                        <div className={classes.cardContent}><b>Project: </b> {props.project}</div>
                    </Box>
                 </Grid>
                 <Grid item xs={6} className={classes.icons}>
                    <Box display="flex" justifyContent="flex-end">
                        <OpenWithRoundedIcon fontSize="large" style={{cursor: "pointer"}} onClick={() => setScreenshotOpen(!screenshotOpen)} />
                        <ModalElement open={screenshotOpen} close={() => closeModal()}>
                            <Fade in={screenshotOpen} {...(!screenshotOpen ? { timeout: 1000 } : {})}>
                                {screenshot}
                            </Fade>
                        </ModalElement>
                        <Link
                            href={props.link}
                            rel="noopener noreferrer" 
                            target="_blank" >
                                <OpenInNewRoundedIcon fontSize="large" style={{marginLeft: "15px", color: "#F26419"}} />
                        </Link> 
                    </Box>
                 </Grid>
            </Grid>
        </div>
    )
}

export default Project;