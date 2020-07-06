import React, { useState } from "react"

import styles from "./title.module.css"
import PropTypes from "prop-types"

const Title = (props) => {
    const [color, setColor] = useState(true)
    return (
        <h1 onClick={() => {
            setColor(!color)
        }} className={color ? styles.green : ""}>{props.children}</h1>
    )
}

Title.propTypes = {
    children: PropTypes.string.isRequired
}

export default Title