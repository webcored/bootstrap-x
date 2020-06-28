# bx-alert
Bootstrap alert component

# usage

A simple alert component
```
<bx-alert text="In ❤️ with stenciljs"></bx-alert>

-- or --

<bx-alert>
  In ❤️ with stenciljs
</bx-alert>
```

## Properties [[API](#properties)]

**dismissible**
```
<bx-alert dismissible />
```
makes an alert dismissible

**variant**
```
<bx-alert variant="info" messgage="Hello web world" />
```

for list of available variants please check [[API](#properties)].

<hr>

## Methods [[API](#methods)]

### alert
Makes a bx-alert component into a dismissible one

simple js example:

```
let alert = document.querySelector('bx-alert');
alert.alert();
```

### close
Closes & destroys a bx-alert component

simple js example:

```
let alert = document.querySelector('bx-alert');
alert.close();
```

### dispose
Destroys a bx-alert component

simple js example:

```
let alert = document.querySelector('bx-alert');
alert.dispose();
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
let alert = document.querySelector('bx-alert');
alert.addEventListener('closed', () => performSomething());
```



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                                                                                                                    | Default            |
| ------------- | ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `dismissible` | `dismissible` |             | `boolean`                                                                                                                                               | `false`            |
| `text`        | `text`        |             | `string`                                                                                                                                                | `undefined`        |
| `variant`     | `variant`     |             | `Variants.danger \| Variants.dark \| Variants.info \| Variants.light \| Variants.primary \| Variants.secondary \| Variants.success \| Variants.warning` | `Variants.primary` |


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
