import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {

    return <React.Fragment>
        {ReactDOM.createPortal(
            <div className="modal d-block" id={props.id} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {props.children}
                    </div>
                </div>
            </div>,
            document.getElementById("overlays")
        )}
    </React.Fragment>

}

export default Modal;
