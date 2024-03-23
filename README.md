# Empowering Recovery Chain

- ui live link : https://empowering-recovery-chain-client-site.netlify.app/

- client repo link : https://github.com/Md-Zehad-Sarkar/empowering-recovery-chain-client-final.git

- server repo link : https://github.com/Md-Zehad-Sarkar/empowering-recovery-chain-server-final.git

## technologies

- React
- Typescript
- Tailwind css

# installation project

## React

### command your terminal

- npm create vite@latest
- give your project name
- select react (or your preferred framework)
- select a variant which you want to use
- cd project name
- npm install
- npm run dev
- npm i react-router-dom (for navigating and dom manipulation)
  you successfully install.

## tailwind css

### command your terminal

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- replace your tailwind.config.js

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

- replace you index.css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

you successfully iunstall tailwind css. now you can run your project command - npm run dev

# Installation shadcn ui

- add it on tsconfig.json
  {
  "compilerOptions": {
  // ...
  "baseUrl": ".",
  "paths": {
  "@/_": [
  "./src/_"
  ]
  }
  // ...
  }
  }
- npm i -D @types/node
- update vite.config - # (so you can import "path" without error)
- import path from "path"
  import react from "@vitejs/plugin-react"
  import { defineConfig } from "vite"

export default defineConfig({
plugins: [react()],
resolve: {
alias: {
"@": path.resolve(\_\_dirname, "./src"),
},
},
})

- install shadcn - npx shadcn-ui@latest init
- answer the question carefully
  shadcn install successfully

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
