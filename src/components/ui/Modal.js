import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {

    return <React.Fragment>
        {ReactDOM.createPortal(
            <div className="modal d-block" id={props.id} tabIndex="-1" style={{background: "rgba(0, 0, 0, .7)"}}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content shadow">
                        {props.children}
                    </div>
                </div>
            </div>,
            document.getElementById("overlays")
        )}
    </React.Fragment>

}

export default Modal;
