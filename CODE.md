```
import React from "react"

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button
```



```
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

const LargeButton = (props) => {
    return (
        <LargeButtonStyle onClick={props.onClick}>
            {props.text}
        </LargeButtonStyle>
    )
}

export default Button

export LargeButton
```



```
import React from "react"
import styled from "styled-components"

const ButtonStyle = styled.button.attrs(props => ({
    size: props.size || "1em"
}))`
   font-size: ${props => props.size};
   text-align: center;
`;

const Button = (props) => {
    return (
        <ButtonStyle {...props} onClick={props.onClick} value={props.chidren} />
    )
}

export default Button

export const LargeButton = (props) => {
    return (
        <Button {...props} size="2em"></Button>
    )
}
```