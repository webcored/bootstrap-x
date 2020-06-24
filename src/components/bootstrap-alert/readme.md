# bootstrap-alert
Bootstrap alert component

# usage

A simple alert component
```
<bootstrap-alert message="In ❤️ with stenciljs" />
```

Dismissible alert
```
<bootstrap-alert dismissible />
```
Type variants
```
<bootstrap-alert type="info" messgage="Hello web world" />
```

for list of available types please check below.

<hr>

# Methods

## alert
Makes a bootstrap-alert component into a dismissible one

simple js example:

```
let bootstrapAlert = document.querySelector('bootstrap-alert');
bootstrapAlert.alert();
```

## close
Closes & destroys a bootstrap-alert component

simple js example:

```
let bootstrapAlert = document.querySelector('bootstrap-alert');
bootstrapAlert.close();
```

## dispose
Destroys a bootstrap-alert component

simple js example:

```
let bootstrapAlert = document.querySelector('bootstrap-alert');
bootstrapAlert.dispose();
```

<hr>

# Events

## onClosing
Event will be triggered when the close method is called.

```
<bootstrap-alert dismissible onClosing=() => doSomething() />
```

## onClosed
Event will be triggered when the bootstrap-alert has been closed
> will wait for CSS transitions to complete

simple js example:
```
let bootstrapAlert = document.querySelector('bootstrap-alert');
bootstrapAlert.addEventListener('closed', () => performSomething());
```



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                                                                                            | Default                                        |
| ------------- | ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `dismissible` | `dismissible` |             | `boolean`                                                                                                                       | `false`                                        |
| `message`     | `message`     |             | `string`                                                                                                                        | `` A simple ${this.type} alert—check it out!`` |
| `type`        | `type`        |             | `types.danger \| types.dark \| types.info \| types.light \| types.primary \| types.secondary \| types.success \| types.warning` | `types.primary`                                |


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
