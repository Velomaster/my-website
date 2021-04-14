import React from "react";
import { Modal } from '@material-ui/core';

const ModalElement = (props) => {
    return (
        <Modal
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