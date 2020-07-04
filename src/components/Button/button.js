import React from "react"
import styled from "styled-components"

const ButtonStyle = styled.button`
   font-size: 1rem;
   text-align: center;
`;

const Button = (props) => {
    return (
        <ButtonStyle onClick={props.onClick}>
            {props.text}
        </ButtonStyle>
    )
}

const LargeButtonStyle = styled(ButtonStyle)`
   font-size: 2rem
`;

export const LargeButton = (props) => {
    return (
        <LargeButtonStyle onClick={props.onClick}>
            {props.text}
        </LargeButtonStyle>
    )
}

export default Button