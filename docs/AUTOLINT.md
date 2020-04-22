To setup autolinting in your application:

1. Run the command below to add the required dependencies:
   `npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier eslint-plugin-react eslint`

2. Add the files `.eslintignore`, `.eslintrc.json`, `.prettierignore`.
   You may refer to the samples in this project and configure as per your needs.

3. Write a custom command to fix the linting issues on the project. In `package.json`,

```$xslt
 "scripts": {
   "lint": "prettier . --write"
 }
```
