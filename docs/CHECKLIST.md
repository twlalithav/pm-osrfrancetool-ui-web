# Package Manager - Npm or Yarn?

Npm and Yarn are two popular package managers for building and managing project dependencies.

This project uses `yarn`.

It is highly recommended to use only one of the two `package-lock.json` if using npm, `yarn.lock` if using yarn for locking your dependencies.
https://classic.yarnpkg.com/blog/2018/06/04/yarn-import-package-lock/

# Setting up automatic linter

The project uses `prettier` to fix linting issues automatically. Details [AUTOLINT](docs/AUTOLINT.md).

#Using Hooks

### useEffect

With useEffect, you can handle lifecycle events directly inside function components.
Namely, three of them: componentDidMount, componentDidUpdate, and componentWillUnmount.
All with one function! (source : https://daveceddia.com/useeffect-hook-examples/)

The function passed to useEffect will run after the render is committed to the screen.

By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.

# GraphQL

Use GraphQL,

1. When you want to aggregate data from multiple places into one convenient api.
