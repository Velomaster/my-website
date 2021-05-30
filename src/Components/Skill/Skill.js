import React from "react";
import { Box, makeStyles } from '@material-ui/core';
import AdjustOutlinedIcon from '@material-ui/icons/AdjustOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "flex-start",
    },
    skill: {
        color: "#2F4858",
        fontSize: "22px",
        fontFamily: `'Jost', sans-serif`,
        paddingLeft: "15px",
        [theme.breakpoints.down('xs')]: { 
            fontSize: "18px",
            paddingLeft: "8px",
        }
    },
    listItem: {
        marginBottom: "2rem",
        textAlign: "flex-start",
       
    }
}))

const Skill = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.listItem}>
            <Box display="flex" alignItems="center">
                <AdjustOutlinedIcon style={{color: "#F26419"}} /><span className={classes.skill}> {props.skill}</span>
            </Box>
        </div>
    )
} 

export default Skill;