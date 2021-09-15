# bx-spinner
Bootstrap spinner component

# usage

A simple spinner component
```
<bx-spinner></bx-spinner>
```

## Properties [[API](#properties)]
**variant**
```
<bx-spinner variant="primary"></bx-spinner>
```

for list of available variants please check [[API](#properties)].

**grow**
```
<bx-spinner grow></bx-spinner>
```
switches to grow spinner

**small**
```
<bx-spinner small></bx-spinner>
```
resizes to small spinner


<hr>

## Methods [[API](#methods)]
### dispose
Destroys a bx-spinner component

simple js example:

```
let spinner = document.querySelector('bx-spinner');
spinner.dispose();
```



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                                                                                                                                                    | Default            |
| --------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `grow`    | `grow`    |             | `boolean`                                                                                                                                               | `false`            |
| `small`   | `small`   |             | `boolean`                                                                                                                                               | `false`            |
| `variant` | `variant` |             | `Variants.danger \| Variants.dark \| Variants.info \| Variants.light \| Variants.primary \| Variants.secondary \| Variants.success \| Variants.warning` | `Variants.primary` |


## Methods

### `dispose() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
