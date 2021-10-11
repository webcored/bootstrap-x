# bx-dropdown

Bootstrap dropdown component

# usage

```
    <bx-dropdown
      button-text="prop items"
      items='[{ "text": "home" , "link" : "/home" },"divider", {"text": "test"}]'
    ></bx-dropdown>

    ---using custon items --
    <bx-dropdown button-text="using slot" />
        <a class="dropdown-item" href="#">
            Action
        </a>
        <a class="dropdown-item" href="#">
            Another action
        </a>
        <a class="dropdown-item" href="#">
            Something else here
        </a>
    </bx-dropdown>
```

## Properties [[API](#properties)]

**button-text**

text in dropdown buttom

```
 <bx-dropdown
      button-text="prop items"
    ></bx-dropdown>
```

**items**

```
 <bx-dropdown
      button-text="prop items"
      items='[{ "text": "home" , "link" : "/home" },"divider", {"text": "test"}]'
    ></bx-dropdown>
```

items is array of object or string "divider" `DropItem(object) | "divider"`

dropdown item object format:

`{ text: string; link?: string; active?: boolean; isHeader?: boolean; disabled?: boolean; }`

Info:

- If the link is not present in the object, it will create its hash link with the given text. ex: #Home

- If isHeader is true, item is rendered as an header

- if "divider", dropdown divider would be rendered

- The stringified JSON array will be parsed once the component is rendered.

**size**

dropdown button size

```
    <bx-dropdown button-text="lg button" size="lg" split></bx-dropdown>
```

**text-variant**
dropdown button text color

```
    <bx-dropdown button-text="Red text" text-variant="danger" /></bx-dropdown>
```

for list of available variants please check [[API](#properties)].

**variant**
button color variant

```
    <bx-dropdown button-text="Red button" variant="danger" /></bx-dropdown>
```

for list of available variants please check [[API](#properties)].

**is-link**
render dropdown button as action tag

```
    <bx-dropdown button-text="anchor" is-link/></bx-dropdown>
```

**split**
render split dropdown button

```
    <bx-dropdown button-text="split button" split></bx-dropdown>
```

**direction**

dropdown direction

```
    <bx-dropdown button-text="Red button" variant="danger" direction="up" /></bx-dropdown>
```

for list of available variants please check [[API](#properties)].

<hr>

## Methods [[API](#methods)]

### toggle

toggle dropdown

```
let dropdown = document.querySelector('bx-dropdown');
dropdown.toggle();
```

### dispose

Destroys a bx-dropdown component

simple js example:

```
let dropdown = document.querySelector('bx-dropdown');
dropdown.dispose();
```

<hr>

## Events [[API](#events)]

### onOpening

Event will be triggered when bx-dropdown is about to open.

```
<bx-dropdown dismissible onOpening=() => doSomething() />
```

### onOpened

Event will be triggered when the bx-dropdown has opened.

```
<bx-dropdown dismissible onOpened=() => doSomething() />
```

### onClosing

Event will be triggered when the bx-dropdown is about to close.

```
<bx-dropdown dismissible onClosing=() => doSomething() />
```

### onClosed

Event will be triggered when the bx-dropdown has been closed

> will wait for CSS transitions to complete

simple js example:

```
let dropdown = document.querySelector('bx-dropdown');
dropdown.addEventListener('closed', () => performSomething());
```

simple jsx

```
<bx-dropdown dismissible onClosed=() => doSomething() />
```

<hr>

## Properties

| Property       | Attribute | Description            | Type                                                                                                                                                    | Default          |
| -------------- | --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `button-text`  | `text`    | `dropdown button text` | `string`                                                                                                                                                | `undefined`      |
| `variant`      | `variant` |                        | `Variants.danger \| Variants.dark \| Variants.info \| Variants.light \| Variants.primary \| Variants.secondary \| Variants.success \| Variants.warning` | `Variants.light` |
| `text-variant` | `variant` |                        | `Variants.danger \| Variants.dark \| Variants.info \| Variants.light \| Variants.primary \| Variants.secondary \| Variants.success \| Variants.warning` | `Variants.light` |
| `is-link`      | `is-link` |                        | `boolean`                                                                                                                                               | `false`          |
| `split`        | `split`   |                        | `boolean`                                                                                                                                               | `false`          |
| `direction`    | `text`    |                        | `up \| down \| left \| right`                                                                                                                           | `down`           |
| `size`         | `text`    |                        | `sm \| md \| lg`                                                                                                                                        | `md`             |
| `items`        | `items`   |                        | `(DropdownItems \| "divider" )[] \| string`                                                                                                             | `undefined`      |

## Events

| Event     | Description | Type                 |
| --------- | ----------- | -------------------- |
| `closed`  |             | `EmitterEvent<void>` |
| `closing` |             | `EmitterEvent<void>` |
| `opening` |             | `EmitterEvent<void>` |
| `opened`  |             | `EmitterEvent<void>` |

## Methods

### `toggle() => Promise<void>`

#### Returns

Type: `Promise<void>`

### `dispose() => Promise<void>`

#### Returns

Type: `Promise<void>`

---

_Built with [StencilJS](https://stenciljs.com/)_
