
### Components

By component i mean here are reusable base/generic components.

**Rule 1**
have one component per folder. so if we have a simple component like inputtype we create a folder for it.

```
src/components/InputType/inputype.js
```
this folder will contain the component, its style, its test case and its storybook and its bit.dev. 

if there are slight variations of component we can export multiple components from a single file. but for major variations we can create multiple folders.






This is how a sample component would be. This is a very small component and base/generic component

```
import React, { useState } from "react"

import PropTypes from 'prop-types';

import styles from "./input.module.scss"

const InputText = ({ id, ...props }) => {
    const [value, setValue] = useState("")
    return (
        <input type={props.type} id={id} className="form-control" value={value} onChange={
            (evt) => {
                setValue(evt.target.value)
                if ("callback" in props) {
                    props.callback(evt.target.value)
                }
            }
        } />
    )
}

InputText.defaultProps = {
    type: "text"
}


InputText.propTypes = {
    id: PropTypes.string.isRequired,
    callback: PropTypes.func,
    type: PropTypes.string.isRequired
}
```

**Rule2**

*Few things to notice here*

```
const InputText = ({ id, ...props }) => {
```

Its best to follow this practice, this way its very clear which props is actually used in this components and which props will be passed down further.


*this component has its own state*
```
const [value, setValue] = useState("")
```
This is fine, weather a component has its own state or not i.e managed by parent component is upto to the developer.

**Rule3**

The component has its own style managed via css modules
```
import styles from "./input.module.scss"
```
https://github.com/css-modules/css-modules

**Rule4**

Next when we want to a slight change in the compent display, we can create another component which refers the base component
```
export const InputWithLabel = ({ id, label, ...otherProps }) => {
    let helpText = null
    if ("help" in otherProps) {
        helpText = <div className="form-text">{otherProps.help}</div>
    }
    return (
        <>
            <label htmlFor={id} className="form-label">{label}</label>
            <InputText id={id} {...otherProps} />
            {helpText}
        </>
    )
}

InputWithLabel.defaultProps = {
    ...InputText.defaultProps
}

InputWithLabel.propTypes = {
    ...InputText.propTypes,
    label: PropTypes.string.isRequired,
    helpText: PropTypes.string,

}

export default InputText
```

This component is basically an input with label i.e it's an variation of the same component with different html. so we are exporting it seperatly. 


**Rule 5**
always define propsTypes for a component
