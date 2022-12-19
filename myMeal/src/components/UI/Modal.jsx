import React from "react"
import styleClass from "./Modal.module.css"
import ReactDOM from "react-dom"

function Backdrop(props){
    return(<div className={styleClass.backdrop} onClick={props.onHideCart}/>)
}

function ModalOverlay(props){
    return(
    <div className={styleClass.modal}>
        <div className={styleClass.content}>{props.children}</div>
    </div> 
    )
}

export default function Modal(props){

    const portalElement = document.getElementById("overlays")
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    )
}