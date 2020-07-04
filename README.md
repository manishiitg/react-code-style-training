## Purpose

The purpose of this repository is to provide training on the best code practices to use for our inhouse large scale reactjs apps.

This part of a series to show case how to manage the coding style for inhouse our inhouse projects. This is specific for large projects which go on months and years. Over such a long period and large code base it becomes essential to have a proper style guide which is testable, easy to use and upgradable to latest tech stack.

We are trying to solve issues like

- Long term code maintanablity 
- Highly reusabled components
- Testable components
- Good ui (design) practices allowing easy for changing of designs in the long term


In the end having bullet proof component which are highly reusable, testable and allowing us to maintain large scale projects for a long time.

This will also act as an style guide for any developer coming in on the project.

*This is mainly for large projects and not smaller projects*

## Techstack

The tech stack proposed 

- Reactjs
    - Redux
    - Styled Components
    - saga
    - prop types

(library agnostic tech stack)

- storybook
- bit.dev
- testing library (https://testing-library.com/)
- typescript (prop types)
- saas


 ### CSS

 - styled components for highly reusabled components
 - css/sass using css modules for general layouts using class names
 - incase libraries like bootstrap or 3rd party libraries are used use classname like for grid etc.


 ### Layout/Pages
 - create HOC for layouts. so that app only have few specific layouts
 - create pages/ folder every page managed via a route
 - create containers/ for redux connected
 - create components and publish to story book
 - publish ui only components to bit.dev and story book

--- pages
    --- layouts
        ---- multiple containers        
            --- multiple components
                --- custom hooks
                --- ui components

### Testing
write tests across the board only integration tests


### Steps

- Migrate to functional components
- Create custom hooks if state gets complex i.e if state management takes more than 5 lines create custom hook and move to a seperate file
- Migrate to using css modules and have global css only for global styles
- Migrate to write test cases for all components
- Add Storybook
- Add more components to storybook, and to do that need to have more container components and component which have redux should be seperated from view
- Write test cases for most components
- Have layout components for different page layouts
- Write test cases for pages/containers as well. this will automatically cover test cases for redux
- All components to have propTypes mandatory
- Optionally move components to bit.dev still exploring this option