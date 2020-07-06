import React from "react"

import PropTypes from "prop-types"

const Table = ({ id, columns, rows }) => {
    return (
        <table id={id} data-testid={id} className="table">

            <thead>
                <tr>
                    {
                        columns.map((ele, idx) => {
                            return <th scope="col" key={id + "-" + idx}>{ele}</th>
                        })
                    }


                </tr>
            </thead>

            <tbody>
                {
                    rows.map((ele, idx) => {
                        return (
                            <tr key={id + "--" + idx}>
                                {Object.keys(ele).map((innerKey, innerIdx) => {
                                    return (
                                        <td key={id + "---" + innerIdx} scope="row">{ele[innerKey]}</td>
                                    )
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    )
}

Table.propTypes = {
    id: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default Table