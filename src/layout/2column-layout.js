import React from 'react'

/** move then to components later on */
const Header = () => {
    return (
        <div></div>
    )
}
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

export default LayoutWith2Column