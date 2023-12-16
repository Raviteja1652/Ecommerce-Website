import ReactDOM from "react-dom";
import './Modal.css'
import { Fragment } from "react";

const ModalOverlay = props => {
    return(
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    )
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
};

export default Modal;