import React from "react"
import PropTypes from "prop-types"

import styles from "./text.module.css"

const Text = ({ text }) => {
    return (
        <span className={styles.green}>
            {text}
        </span>
    )
}

Text.propTypes = {
    "text": PropTypes.string.isRequired
}

export default Text