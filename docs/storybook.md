### Storybook

We will be using storybook to be able to easily view our component.

Now there is an very important distinction here.

**Rule0**
story of a component should be in the same folder as the component itself.
and storybook should should all different varities of the component

**Rule1**

When i say component, i just don't me the simple base generic components but also container components which are composed of multiple components.

Like if take example of login page.

Login page has basic components like text fields and button.

But in this specific case, i mean we need to make the entire login page into a story book component.

For this to happen, we need to decouple our state management (redux/api calls) etc from view.

So we will have a componey which is a logic form but this will not be connected to redux at all.

We will have a seperate container for LoginForm which will handle of business logic and state management.

*Previously we didn't do this.*

So, another example would like we have a form to apply leave.

Again, i for storybook i am not taking just about the simple textfields and button here.

I am talking about, having a view only component for apply leave form and a seperate container for apply leave form which all apis, redux etc.

**Rule2**

When using storybook, we should be able to highlight different features of that component.
Not minor features, but major.

e.g we have a GenericTable.

We have pass props different ways to that table and display things differently.

The storybook for that table should display all these variations and it might require some hard coded data as well to show these variations.

That is fine, we should pass json objects hard coded to demonstrate how the component can be used via storybook.


### Implentation ###

installing storybook is very easy
```
https://storybook.js.org/docs/guides/guide-react/#automatic-setup
```

for our every component we will have a file named "component.stories.js"

and we will define our stories here

example code is 

```
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
```

We will be using two addons in most the case 

https://github.com/storybookjs/storybook/tree/master/addons/actions

https://github.com/storybookjs/storybook/tree/master/addons/links

both are very simple to understand.



also we include bootstrap in config.js as its common across all components

live code example can be seen here 

https://github.com/manishiitg/react-code-style-training/commit/bca6dc3dc104f5c39088feb83cfd9b3f3b432104
