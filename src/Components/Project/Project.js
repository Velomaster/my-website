import {React, useState } from 'react';
import { Card, CardContent, CardMedia, Grid, makeStyles, CardActions } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';
import OpenWithRoundedIcon from '@material-ui/icons/OpenWithRounded';
import ModalElement from '../ModalElement/ModalElement';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "rgba(0, 0, 0, 0.15)",
        marginBottom: "2rem",
        maxWidth: "1000px",
        marginLeft: "107px"
    },
    cardContent: {
        color: "#eef4ed",
        fontSize: "20px",
        fontWeight: "300",
    },
    icons: {
        color: "#f1faee",
        justifyContent: "flex-end",
        paddingTop: "15px",
    },
    image: {
        height: "500px",
        backgroundSize: 'contain'
    },
    screenshot: {
        height: "400px",
        backgroundSize: 'contain',
        textDecoration: "none"

    },
    popup: {
        justifyContent: "center",
        position: 'absolute',
        width: 800,
        boxShadow: theme.shadows[5],
    }
}));

const Project = (props) => {
    const classes = useStyles();
    const [screenshotOpen, setScreenshotOpen] = useState(false);
    const closeModal = () => {
        setScreenshotOpen(false);
    };

    const screenshot = <Card className={classes.popup}>
            <CardMedia
                className={classes.screenshot}
                image={props.image}
                title={props.name}
                onClick={() => closeModal()} />
        </Card>

    return (
        <Card className={classes.root} >
            <Grid container >
                <Grid item xs={12}>
                    <CardMedia className={classes.image} image={props.image}/>
                </Grid>
                <Grid item xs={6} >
                    <CardContent className={classes.cardContent} style={{paddingTop: "18px"}}>
                        <span><b>Project: </b> {props.project}</span>
                    </CardContent>
                </Grid>
                <Grid item xs={6} >
                    <CardActions className={classes.icons}>
                        <OpenWithRoundedIcon fontSize="large" style={{cursor: "pointer"}} onClick={() => setScreenshotOpen(!screenshotOpen)} />
                        <ModalElement open={screenshotOpen} close={() => closeModal()}>
                           {screenshot}
                        </ModalElement>
                       <Link
                       
                        href={props.link}
                        rel="noopener noreferrer" 
                        target="_blank" >
                            <OpenInNewRoundedIcon fontSize="large" style={{marginLeft: "15px", color: "#F26419"}} />
                        </Link> 
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    )
}

export default Project;