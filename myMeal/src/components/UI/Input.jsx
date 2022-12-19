import React from "react"
import styleClass from "../UI/Input.module.css"


export default React.forwardRef(function Input(props, ref) {
    return (
        <div className={styleClass.input}>
            <label htmlFor={props.input.id}> {props.label} </label>
            <input {...props.input} ref={ref} value={props.input.val}/>
        </div>
    )
})