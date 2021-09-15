# bx-badge
Bootstrap badge component

# usage

A simple badge component
```
<bx-badge text="Open"></bx-badge>

-- or --

<bx-badge>
  Merged
</bx-badge>
```

## Properties [[API](#properties)]

**variant**
```
<bx-badge variant="danger">Closed</bx-badge>
```
for list of available variants please check [[API](#properties)].


**pill**

```
<bx-badge pill>Circled</bx-badge>
```
More rounded pill badges

**link**

If link property is passed, badge will become a link tag

**target**

&lt;a&gt; tag target property.

<hr>

## Invoke programmatically

### pill
Convert a simple bx-badge component to pill

simple js example:

```
let badge = document.querySelector('bx-badge');
badge.pill = true;
```

### link
Adding link and target

simple js example:

```
let badge = document.querySelector('bx-badge');
badge.link = "https://stenciljs.com/";
badge.target = "_top";
```



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                                                                                                                                                    | Default            |
| --------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `link`    | `link`    |             | `string`                                                                                                                                                | `undefined`        |
| `pill`    | `pill`    |             | `boolean`                                                                                                                                               | `false`            |
| `target`  | `target`  |             | `string`                                                                                                                                                | `undefined`        |
| `text`    | `text`    |             | `string`                                                                                                                                                | `undefined`        |
| `variant` | `variant` |             | `Variants.danger \| Variants.dark \| Variants.info \| Variants.light \| Variants.primary \| Variants.secondary \| Variants.success \| Variants.warning` | `Variants.primary` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
