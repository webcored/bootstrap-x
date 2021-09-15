---
title: Guide
---

# B𝕏
Bootstrap X - Framework agnostic bootstrap web components powered with stenciljs

Write less Javascript & leverage the functionalties of webcomponents

[https://www.npmjs.com/package/@webcored/bootstrap-x](https://www.npmjs.com/package/@webcored/bootstrap-x)

### Pros
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


## Contributions

### Component naming conventions:

When creating a new component, use prefix 'bx'.
