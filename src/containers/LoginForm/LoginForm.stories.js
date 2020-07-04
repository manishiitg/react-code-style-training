import React from 'react';

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links'

import LoginForm from "./LoginForm"


export default { title: 'LoginForm' };

export const LoginFormDemo = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}