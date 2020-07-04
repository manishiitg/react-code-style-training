import React, { useState } from "react"

import { InputWithLabel } from "../../components/InputText/input"
import Button from "../../components/Button/button"

const LoginForm = () => {
    const [formState, setFormState] = useState({
        "username": "",
        "password": ""
    })
    return (
        <form>
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
            <Button className="btn-primary" onClick={(evt) => {
                evt.preventDefault()
                console.log("form submitted")
                console.log(formState)
            }}>Submit</Button>
        </form>
    )
}

export default LoginForm