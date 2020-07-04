import React from "react"
import styled from "styled-components"

import {Button as BootstrapButton} from 'bootstrap'

const ButtonStyle = styled.button.attrs(props => ({
    size: props.size || "1em"
}))`
   font-size: ${props => props.size};
   text-align: center;
`;

const Button = (props) => {
    return (
        <ButtonStyle {...props} className={"btn " + (props.className || "")}  onClick={props.onClick} value={props.chidren} />
    )
}

export default Button

export const LargeButton = (props) => {
    return (
        <Button {...props} size="2em"></Button>
    )
}


export const BootstrapInfoButton = (props) => {
    return (
        <BootstrapButton {...props} />
    )
}