import React from "react"
import PropTypes from "prop-types"

const Dropdown = ({ options, onChange, value }) => {
    return (
        <select onChange={onChange} className="form-select" value={value}>
            {
                options.map((ele, idx) => {
                    return <option key={idx} value={ele.value}>{ele.text}</option>
                })
            }
        </select>

    )
}

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.string
}


export default Dropdown