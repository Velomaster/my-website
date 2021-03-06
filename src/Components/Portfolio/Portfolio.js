import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Container, makeStyles } from '@material-ui/core';
import Project from '../Project/Project';
import projectData from '../../Projects-data';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#33658A",
        paddingTop: "2rem",
        paddingBottom: "2rem",
    },
    title: {
        color: "#eef4ed",
        fontFamily: `'Jost', sans-serif`,
        fontSize: "55px",
        fontWeight: "400",
        marginTop: "2rem",
        marginBottom: "3rem"
    }
}));

const Portfolio = () => {

    const classes = useStyles()
    return (
        <div className={classes.root} id={'projects'}>
            <h1 className={classes.title}>Projects</h1>
            <Container className={classes.carousel}>
                 <Carousel 
                    indicatorIconButtonProps={{
                        style: {
                            padding: '5px',
                            color: '#eef4ed'
                        }
                    }}
                    activeIndicatorIconButtonProps={{
                        style: {
                            color: '#F6AE2D'
                        }
                    }}
                    interval="5000"  >
                    {projectData.map((item, i) => <Project key={i} project={item.name} image={item.imagePath} link={item.link} />)}
                </Carousel>
            </Container>
        </div>
    )
}

export default Portfolio;