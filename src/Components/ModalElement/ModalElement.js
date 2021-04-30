import React from "react";
import { Modal, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const ModalElement = (props) => {
    const classes = useStyles();

    return (
        <Modal
            className={classes.modal}
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open={props.open} 
            onClose={props.close} >
            {props.children}
        </Modal>
    )
}

export default ModalElement;