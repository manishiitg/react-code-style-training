### Testing


This is the most important aspect which is going to improve the code stablity

Tech stack we are going to use react testing library (javascript testing library) and jest.

**Rule1**

All components are going to have testing file. So for a component, or container or page or layout we are going to have "component.test.js" file attached with it.

Installation

```
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/user-event
```


**Rule2**
We are going to mainly integration testing only.

What this means 

- For a component we are going to test based input/output and actual dom functions.
- So we will pass props, see how functions are called and what output they return
- We are going to see DOM of the elements. like if it hidden, it has styles, it has class etc.
- Redux/API will be tested using mocks.
- More focus on componet testing instead of testing business logic. Business logic will be tested automtically based on ui updates.

e.g let's take example of login component.

we are not going to directly test api calls or redux state updates.

We will directly test if username/pass is wrong, the component should show error message.

If username/pass is correct, the component is going to show success message.

**Rule3**

All api's will be mocked, no actual api calls during testing at all.

**Rule4**

Don't write two many test cases for simple view components.  Those components are mostly simple and work.

Write more test cases for container which have api calls and redux, these tend to fail more than simple view component.

The interaction with state/api is more important to test.



Here is some examples of test cases

https://github.com/manishiitg/react-code-style-training/commit/04db8dbf583fffab2e527f1689dcdb3ef877014a

https://github.com/manishiitg/react-code-style-training/commit/980d93e117dd5a12ed817cc9fd906c10cb95fe44

```
test('button renders properly', () => {

    const mockClick = jest.fn()

    let button = <Button onClick={mockClick}>Test Button</Button>
    const { getByText } = render(button)

    const element = getByText("Test Button")
    expect(element).toBeInTheDocument()

    userEvent.click(element)

    expect(mockClick.mock.calls.length).toBe(1)
})
```


```
test("large button", () => {
    const mockClick = jest.fn()
    let largebutton = <LargeButton onClick={mockClick}>Test Button</LargeButton>
    const { getByText } = render(largebutton)
    const element = getByText("Test Button")

    expect(element).toHaveStyle("font-size:2em")
})
```

https://github.com/manishiitg/react-code-style-training/pull/1



Important links to open and read when writing test cases

https://testing-library.com/docs/dom-testing-library/api-queries

https://github.com/testing-library/user-event#table-of-contents

https://github.com/testing-library/jest-dom#table-of-contents

https://jestjs.io/docs/en/mock-functions

https://testing-library.com/docs/dom-testing-library/api-async

https://testing-library.com/docs/dom-testing-library/cheatsheet

https://testing-library.com/docs/react-testing-library/example-intro


Will be adding more blogs and resouces on how we can test better.

But testing is going to be an important component from now.

