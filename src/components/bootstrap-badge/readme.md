# bootstrap-badge
Bootstrap badge component

# usage

A simple badge component
```
<bootstrap-badge content="Open" />

-- or --

<bootstrap-badge>
  Merged
</bootstrap-badge>
```

## Properties [[API](#properties)]

Type variants
```
<bootstrap-badge type="danger">Closed</bootstrap-badge>
```
for list of available types please check [[API](#properties)].


pill

> More rounded pill badges

```
<bootstrap-badge pill>Circled</bootstrap-badge>
```

link

If link property is passed, badge will become a link tag

target

&lt;a&gt; tag target property.

<hr>

## Invoke programmatically

### pill
Convert a simple bootstrap-badge component to pill

simple js example:

```
let bootstrapBadge = document.querySelector('bootstrap-badge');
bootstrapBadge.pill = true;
```

### link
Adding link and target

simple js example:

```
let bootstrapBadge = document.querySelector('bootstrap-badge');
bootstrapBadge.link = "https://stenciljs.com/";
bootstrapBadge.target = "_top";
```



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                                                                                                                            | Default         |
| --------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `content` | `content` |             | `string`                                                                                                                        | `undefined`     |
| `link`    | `link`    |             | `string`                                                                                                                        | `undefined`     |
| `pill`    | `pill`    |             | `boolean`                                                                                                                       | `false`         |
| `target`  | `target`  |             | `string`                                                                                                                        | `'_self'`       |
| `type`    | `type`    |             | `types.danger \| types.dark \| types.info \| types.light \| types.primary \| types.secondary \| types.success \| types.warning` | `types.primary` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
