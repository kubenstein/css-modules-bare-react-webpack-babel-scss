Minimum CSS Modules setup React/Babel/Webpack/Sass
=============

This repo is an absolute bare minimum env setup that supports CSS modules in React using `styleName` syntax. It uses SCSS as stylesheet preprocessor as its my favourite and requires zero config - postCSS config soon…

## Key setup points:

- The `css-loader` by default supports css modules via `modules: true` flag
- The `styleName` react syntax is done by `babel-plugin-react-css-modules` plugin
- Binding between those two is done via `cssModulesIdentifier`


## How to use this demo
```
npm i
npm run build
```

and then open `dist/index.html` file (the index.html files is not generated via webpack in this repo to reduce scope to css modules only) 
