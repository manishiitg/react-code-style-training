import React, { useState } from "react"

import styles from "./input.module.scss"

const InputText = ({ id, ...props }) => {
    const [value, setValue] = useState("")
    return (
        <input type="text" id={id} className="form-control" value={value} onChange={
            (evt) => {
                setValue(evt.target.value)
                if ("callback" in props) {
                    props.callback(evt.target.value)
                }
            }
        } />
    )
}

export const InputWithLabel = ({ id, label, ...otherProps }) => {
    let helpText = null
    if ("help" in otherProps) {
        helpText = <div className="form-text">{otherProps.help}</div>
    }
    return (
        <>
            <label for={id} className="form-label">{label}</label>
            <InputText {...otherProps} />
            {helpText}
        </>
    )
}

export default InputText