import React from "react"
import styled from "styled-components"

import PropTypes from "prop-types"

const ButtonStyle = styled.button.attrs(props => ({
    size: props.size || "1em"
}))`
   font-size: ${props => props.size};
   text-align: center;
   color: ${props => props.theme.primaryColor}
`;

const Button = (props) => {
    return (
        <ButtonStyle {...props} className={"btn " + (props.className || "")} onClick={props.onClick} value={props.chidren} />
    )
}

Button.defaultProps = {
    onClick: () => { }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.string.isRequired
}



export default Button

export const LargeButton = (props) => {
    return (
        <Button {...props} size="2em"></Button>
    )
}

LargeButton.propTypes = {
    ...Button.propTypes
}


// export const BootstrapInfoButton = (props) => {
//     return (
//         <BootstrapButton {...props} />
//     )
// }