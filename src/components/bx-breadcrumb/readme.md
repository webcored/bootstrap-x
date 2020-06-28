# bx-breadcrumb
Bootstrap breadcrumb component

# usage
A simple breadcrumb component
```
<bx-breadcrumb
  breadcrumbs="[{"text": "Home"}, {"text": "Dashboard"}]" // json stringified
  seperator="|"
>
</bx-breadcrumb>

-- or custom --

<bx-breadcrumb>
  <li class="breadcrumb-item"><a href="#Home">Home</a></li>
</bx-breadcrumb>
```

## Properties [[API](#properties)]

**breadcrumbs**

Array of breadcrumb objects in JSON stringified format

```
<bx-breadcrumb
  breadcrumbs="[{"text": "Home", "link": "http://somelink.com"}]"
>
</bx-breadcrumb>
```

breadcrumbs object format: [[DTO](https://github.com/bootstrap-x/bootstrap-x/tree/master/src/components/bx-breadcrumbs/bx-breadcrumb.dto.ts)]

`{ text: string; link?: string; active?: boolean; }`


Info:

* If the link is not present in the object, it will create its hash link with the given text. ex: #Home

* If active is not present in any of the object, the last object item will be rendered as **active** one.

* The stringified JSON array will be parsed once the component is rendered.

**separator**
```
<bx-breadcrumb
  breadcrumbs="[{"text": "Home"}]"
  seperator="|"
>
</bx-breadcrumb>
```
custom separator for breadcrumbs [[API](#properties)].

<hr>

## Methods

### add
Add's a new item into the breadcrumb component
```
let breadcrumb = document.querySelector('bx-breadcrumb');
breadcrumb.add({ text: 'stencil', active: true});
```

### active
Converts a breadcrumb item into an active state.

simple js example:

```
let breadcrumb = document.querySelector('bx-breadcrumb');
breadcrumb.active('home');
```

### dispose
Destroys a bx-breadcrumb component

simple js example:

```
let breadcrumb = document.querySelector('bx-breadcrumb');
breadcrumb.dispose();
```

<hr>

## Events  [[API](#events)]

## clicked
Event will be triggered if a breadcrumb item is clicked.

simple js example:
```
let breadcrumb = document.querySelector('bx-breadcrumb');
breadcrumb.addEventListener('clicked', () => performSomething());
```


<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                     | Default     |
| ------------- | ------------- | ----------- | ------------------------ | ----------- |
| `breadcrumbs` | `breadcrumbs` |             | `Breadcrumb[] \| string` | `undefined` |
| `separator`   | `separator`   |             | `string`                 | `'/'`       |


## Events

| Event     | Description                        | Type                      |
| --------- | ---------------------------------- | ------------------------- |
| `clicked` | A click event for breadcrumb items | `CustomEvent<Breadcrumb>` |


## Methods

### `active(text: String) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `add(breadcrumb: Breadcrumb) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `delete(text: String) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `dispose() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
