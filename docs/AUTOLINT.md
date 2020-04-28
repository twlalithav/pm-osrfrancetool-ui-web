To setup autolinting in your application:

1. Run the command below to add the required dependencies:
   `yarn add --dev eslint-config-prettier eslint-plugin-prettier prettier eslint-plugin-react eslint`

2. Add the files `.eslintignore`, `.eslintrc.json`, `.prettierignore`.
   You may refer to the samples in this project and configure as per your needs.

3. Write a custom command to fix the linting issues on the project. In `package.json`,

```$xslt
 "scripts": {
   "lint": "prettier . --write"
 }
```

4. You may want to add this command as part of a pre-commit hook.
   `yarn add -dev husky lint-staged`

### References

[Autolinting with airbnb style guides](https://coffeencoding.com/reactjs-auto-lint-format-on-git-commit-with-airbnb-styleguide/)
