# bx-button
Bootstrap button component

# usage

A simple button component
```
<bx-button text="Submit"></bx-button>

-- or --

<bx-button>
  Send Message
</bx-button>
```

## Properties [[API](#properties)]

**text**
```
<bx-button text="closed"></bx-button>
```

**variant**
```
<bx-button variant="danger">Closed</bx-button>
```
for list of available variants please check [[API](#properties)].


**size**
```
<bx-button size="large">Large button</bx-button>
```
for list of available sizes please check [[API](#properties)].

**outline**
```
<bx-button outline>Outline</bx-button>
```
outline styled bootstrap button

**block**
```
<bx-button block>Block button</bx-button>
```
block styled bootstrap button

**active**
```
<bx-button active>Block button</bx-button>
```
button active state

**disabled**
```
<bx-button disabled>Disabled</bx-button>
```
button disabled state

**link**
```
<bx-button link="/home">Home</bx-button>
```
If link property is passed, button will become a link tag

**target**

&lt;a&gt; tag target property.

<hr>

## Methods

### toggle
Turns bx-button into activated state.

simple js example:

```
let bootstrapButton = document.querySelector('bx-button');
bootstrapButton.toggle();
```

### dispose
Destroys a bx-button component

simple js example:

```
let bootstrapButton = document.querySelector('bx-button');
bootstrapButton.dispose();
```


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                                                                                                                                          | Default            |
| ---------- | ---------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `active`   | `active`   |             | `boolean`                                                                                                                                                                     | `false`            |
| `block`    | `block`    |             | `boolean`                                                                                                                                                                     | `false`            |
| `disabled` | `disabled` |             | `boolean`                                                                                                                                                                     | `false`            |
| `link`     | `link`     |             | `string`                                                                                                                                                                      | `undefined`        |
| `outline`  | `outline`  |             | `boolean`                                                                                                                                                                     | `false`            |
| `size`     | `size`     |             | `Sizes.large \| Sizes.small`                                                                                                                                                  | `undefined`        |
| `target`   | `target`   |             | `string`                                                                                                                                                                      | `undefined`        |
| `text`     | `text`     |             | `string`                                                                                                                                                                      | `undefined`        |
| `variant`  | `variant`  |             | `AdditionalVariants \| Variants.danger \| Variants.dark \| Variants.info \| Variants.light \| Variants.primary \| Variants.secondary \| Variants.success \| Variants.warning` | `Variants.primary` |


## Methods

### `dispose() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `toggle() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
