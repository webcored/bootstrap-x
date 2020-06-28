![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
[![Generic badge](https://img.shields.io/badge/contributions-welcome-<COLOR>.svg?style=flat-square)](https://github.com/bootstrap-x/bootstrap-x)
[![npm version](http://img.shields.io/npm/v/bootstrap-x.svg?style=flat-square&color=success)](https://npmjs.org/package/bootstrap-x "View this project on npm")
[![npm](https://img.shields.io/npm/dm/bootstrap-x.svg?style=flat-square)](https://www.npmjs.com/package/bootstrap-x)



# Bootstrap X

Framework agnostic bootstrap web components powered with stenciljs

Knock of jQuery dependency in your boostrap project & leverage the functionalties of webcomponents

> npm: https://www.npmjs.com/package/bootstrap-x

## Pros
  * Simple to use & knock of other library requirements for bootstrap
  * Framework agnostic
  * Invoke web components programmatically [ex: alert.close()]
  * Bootstrap equvalent methods and events [ex: onClose => performSomething()]

## Getting Started

Add the latest bootstrap css file to your project,

sample:
```
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
>
```

Add the bootstrap-x component library to the root of your poject (head of your index.html)

via CDN:

```
<script
  type="module"
  src="https://unpkg.com/bootstrap-x/dist/bootstrap-x/bootstrap-x.esm.js">
</script>

<script
  nomodule
  src="https://unpkg.com/bootstrap-x/dist/bootstrap-x/bootstrap-x.js">
</script>
```

via npm (Node Modules):

- Run `npm install bootstrap-x --save`
- Then add the library file to your
 `<script src='node_modules/bootstrap-x/dist/bootstrap-x.js'></script>`

Then you can use the element anywhere in your template, JSX, html etc

<hr>

### Available components

* [Alert](https://github.com/bootstrap-x/bootstrap-x/tree/master/src/components/bx-alert)
* [Badge](https://github.com/bootstrap-x/bootstrap-x/tree/master/src/components/bx-badge)
* [Button](https://github.com/bootstrap-x/bootstrap-x/tree/master/src/components/bx-button)
* [Breadcrumb](https://github.com/bootstrap-x/bootstrap-x/tree/master/src/components/bx-breadcrumb)
* [Spinner](https://github.com/bootstrap-x/bootstrap-x/tree/master/src/components/bx-spinner)

* ... rest is [in progress](https://github.com/bootstrap-x/bootstrap-x/projects/1)

<hr>

### To run this project

```bash
git clone
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).


## Naming Components

When creating new component tags, use prefix 'bx'.
