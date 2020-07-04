import React, { useState } from "react"

import { InputWithLabel } from "../../components/InputText/input"
import Button from "../../components/Button/button"
import Dropdown from "../../components/Dropdown/dropdown"

const LoginForm = () => {

    const defaultOptions = [
        {
            "value": "1",
            "text": "yes"
        },
        {
            "value": "2",
            "text": 'no'
        }
    ]
    const [formState, setFormState] = useState({
        "username": "",
        "password": "",
        "dropdown": 0
    })
    return (
        <form>
            <div className="md-3">
                <h4>Login Form</h4>
            </div>
            <div className="mb-3">
                <InputWithLabel id="username" label="User Name" callback={
                    (val) => {
                        setFormState({
                            ...formState,
                            "username": val
                        })
                    }
                } />
            </div>
            <div className="mb-3">
                <InputWithLabel type="password" id="password" label="Password" callback={
                    (val) => {
                        setFormState({
                            ...formState,
                            "password": val
                        })
                    }
                } />
            </div>
            <div className="mb-3">
                <Dropdown options={defaultOptions} value={formState.dropdown} onChange={
                    (evt) => {
                        setFormState({
                            ...formState,
                            "dropdown": evt.target.value
                        })
                    }
                } />
            </div>
            <Button className="btn-primary" onClick={(evt) => {
                evt.preventDefault()
                console.log("form submitted")
                console.log(formState)
            }}>Submit</Button>
        </form>
    )
}

export default LoginForm