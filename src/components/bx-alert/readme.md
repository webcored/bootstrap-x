# bx-alert
Bootstrap alert component

# usage

A simple alert component
```
<bx-alert message="In ❤️ with stenciljs" />

-- or --

<bx-alert>
  In ❤️ with stenciljs
</bx-alert>
```

## Properties [[API](#properties)]

Dismissible alert
```
<bx-alert dismissible />
```
Type variants
```
<bx-alert type="info" messgage="Hello web world" />
```

for list of available types please check [[API](#properties)].

<hr>

## Methods [[API](#methods)]

### alert
Makes a bx-alert component into a dismissible one

simple js example:

```
let bootstrapAlert = document.querySelector('bx-alert');
bootstrapAlert.alert();
```

### close
Closes & destroys a bx-alert component

simple js example:

```
let bootstrapAlert = document.querySelector('bx-alert');
bootstrapAlert.close();
```

### dispose
Destroys a bx-alert component

simple js example:

```
let bootstrapAlert = document.querySelector('bx-alert');
bootstrapAlert.dispose();
```

<hr>

## Events  [[API](#events)]

## onClosing
Event will be triggered when the close method is called.

```
<bx-alert dismissible onClosing=() => doSomething() />
```

## onClosed
Event will be triggered when the bx-alert has been closed
> will wait for CSS transitions to complete

simple js example:
```
let bootstrapAlert = document.querySelector('bx-alert');
bootstrapAlert.addEventListener('closed', () => performSomething());
```



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                                                                                            | Default         |
| ------------- | ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `dismissible` | `dismissible` |             | `boolean`                                                                                                                       | `false`         |
| `message`     | `message`     |             | `string`                                                                                                                        | `undefined`     |
| `type`        | `type`        |             | `types.danger \| types.dark \| types.info \| types.light \| types.primary \| types.secondary \| types.success \| types.warning` | `types.primary` |


## Events

| Event     | Description | Type                |
| --------- | ----------- | ------------------- |
| `closed`  |             | `CustomEvent<void>` |
| `closing` |             | `CustomEvent<void>` |


## Methods

### `alert() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `close() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `dispose() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
