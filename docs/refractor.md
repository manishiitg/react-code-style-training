## Purpose

We are trying to solve issues like

- Long term code maintanablity 
- Highly reusabled components
- Testable components
- Good ui (design) practices allowing easy for changing of designs in the long term


In the end having bullet proof component which are highly reusable, testable and allowing us to maintain large scale projects for a long time.

This will also act as an style guide for any developer coming in on the project.

*This is mainly for large projects and not smaller projects*

## Techstack

React

Redux

Sagas

CSS modules

prop types

storybook

react testing library / jest

bit.dev (optional)

### Main Steps

- Migrate to functional components
- Create custom hooks if state gets complex i.e if state management takes more than 5 lines create custom hook and move to a seperate file
- Migrate to using css modules and have global css only for global styles
- Migrate to write test cases for all components
- Add Storybook
- Add more components to storybook, and to do that need to have more container components and component which have redux should be seperated from view 
- Write test cases for all components
- Have layout components for different page layouts
- Write test cases for pages/containers as well. this will automatically cover test cases for redux
- All components to have propTypes mandatory
- Optionally move components to bit.dev still exploring this option

Let's upgrade to bootstrapv5 and latest react versions

https://v5.getbootstrap.com/

#### Sample 

https://github.com/manishiitg/react-code-style-training

this repository will have sample codes which i have tried/tested on

## Read Below

Documentation of component

https://github.com/manishiitg/react-code-style-training/blob/master/docs/components.md

Creating layout components

https://github.com/manishiitg/react-code-style-training/blob/master/docs/layoutcomponents.md

Adding storybook for all component and decoupling components

https://github.com/manishiitg/react-code-style-training/blob/master/docs/storybook.md

Styling

https://github.com/manishiitg/react-code-style-training/blob/master/docs/styling.md

Testing Testing Testing 

https://github.com/manishiitg/react-code-style-training/blob/master/docs/testing.md

