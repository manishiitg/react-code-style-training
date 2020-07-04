import React from 'react';

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links'

import Button, { LargeButton }  from "./button"

export default { title: 'Buttons' };


export const SimpleButton = () => {
    return (
        <Button onClick={action("clicked")}>
            Simple Button
        </Button>
    )
}

export const LargeSimpleButton = () => {
    return (
        <LargeButton onClick={linkTo("Button")}>Large Button</LargeButton>
    )
}