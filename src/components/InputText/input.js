import React, { useState } from "react"

import PropTypes from 'prop-types';

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

InputText.propTypes = {
    id: PropTypes.string.isRequired,
    callback: PropTypes.func
}

export const InputWithLabel = ({ id, label, ...otherProps }) => {
    let helpText = null
    if ("help" in otherProps) {
        helpText = <div className="form-text">{otherProps.help}</div>
    }
    return (
        <>
            <label htmlFor={id} className="form-label">{label}</label>
            <InputText id={id} {...otherProps} />
            {helpText}
        </>
    )
}

InputWithLabel.propTypes = {
    ...InputText.propTypes,
    label: PropTypes.string.isRequired,
    helpText: PropTypes.string,

}

export default InputText