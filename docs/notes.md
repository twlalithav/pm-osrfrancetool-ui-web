# Package Manager - Npm or Yarn?

Npm and Yarn are two popular package managers for building and managing project dependencies.

This project uses `yarn`.

It is highly recommended to use only one of the two `package-lock.json` if using npm, `yarn.lock` if using yarn for locking your dependencies.
https://classic.yarnpkg.com/blog/2018/06/04/yarn-import-package-lock/

# Setting up automatic linter

The project uses `prettier` to fix linting issues automatically. Details [AUTOLINT](docs/AUTOLINT.md).

# Using Hooks

### useState

[Using Hooks](https://itnext.io/how-to-build-a-dynamic-controlled-form-with-react-hooks-2019-b39840f75c4f)

### useEffect

With useEffect, you can handle lifecycle events directly inside function components.
Namely, three of them: componentDidMount, componentDidUpdate, and componentWillUnmount.
All with one function! (source : https://daveceddia.com/useeffect-hook-examples/)

The function passed to useEffect will run after the render is committed to the screen.

By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.

### useLayoutEffect

[useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)

# Hooks vs. Higher Order Functions

Do Hooks replace Higher Order Functions?
https://medium.com/javascript-scene/do-react-hooks-replace-higher-order-components-hocs-7ae4a08b7b58

# GraphQL

When you want to aggregate data from multiple places into one convenient api.
[N+1 queries](https://itnext.io/what-is-the-n-1-problem-in-graphql-dd4921cb3c1a)

#React + Redux vs. React + GraphQL
https://medium.com/@mailtosankar08/react-vs-react-redux-vs-react-graphql-perspective-from-front-end-development-f1ec3483340f
