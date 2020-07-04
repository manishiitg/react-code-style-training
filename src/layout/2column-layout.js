import React from 'react'

import PropTypes from "prop-types"

import Header from "./../components/Header/header"

/** move then to components later on */
const Footer = () => {
    return (
        <div>

        </div>
    )
}

const LayoutWith2Column = (props) => {
    return (
        <>
            <Header></Header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        {props.children}
                    </div>
                    <div className="col-4">
                        {
                            /**
                             * he we can have some if condition based on props
                             * or even pass components via props
                             */
                            props.side_column_component
                        }
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}

LayoutWith2Column.propTypes = {
    side_column_component: PropTypes.element,
    children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.array.isRequired, PropTypes.string.isRequired ])
}


export default LayoutWith2Column