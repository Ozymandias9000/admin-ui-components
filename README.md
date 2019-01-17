# admin-ui-components

>

[![NPM](https://img.shields.io/npm/v/fs-admin-ui-components.svg)](https://www.npmjs.com/package/fs-admin-ui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

- [Development](#development)
- [Components](#components)
- [License](#license)

## Development

```jsx
npm i
npm start
```

## Components

- [Headings](#headings)
- [Lists](#lists)
- [Navbars](#navbars)
- [Buttons](#buttons)
- [Thumbnails](#thumbnails)
- [Wells](#wells)
- [Forms](#forms)
- [Pagination](#pagination)
- [Alerts](#alerts)

### Headings

```jsx
<h1>h1 Heading</h1>
<h2>h2 Heading</h2>
<h3>h3 Heading</h3>
<h4>h4 Heading</h4>
<h5>h5 Heading</h5>
<h6>h6 Heading</h6>
```

### Lists

### Navbars

#### TabNav

```jsx
import { TabNav } from "fs-admin-ui-components";

<TabNav>
  <div label="Home" />
  <div label="Profile" />
  <div label="Messages" />
</TabNav>;
```

### Buttons

#### Generic Button

```jsx
import { Button } from "fs-admin-ui-components";

<Button onClick={() => alert("Hi!")}>Click me!</Button>;
```

#### Dropdowns

```jsx
import { Dropdown } from "fs-admin-ui-components";

<Dropdown>
  <div option="blue">Blue</div>
  <div option="red">Red</div>
  <div option="green">Green</div>
</Dropdown>;
```

#### Using [React-Select](https://github.com/JedWatson/react-select) Dropdown

```jsx
import { Select } from "react-select

<Select
  options={[
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ]}
/>
```

### Thumbnails

```jsx
import { Thumbnail } from "fs-admin-ui-components";

<Thumbnail
  image="https://source.unsplash.com/random/300x300?abstract"
  alt="Random abstract art"
/>;
```

### Wells

```jsx
import { Well } from "fs-admin-ui-components";

<Well>
  <p>Hello there!</p>
</Well>;
```

```jsx
import { Card } from "fs-admin-ui-components";

<Card>
  <p>Let us go now, you and I...</p>
</Card>;
```

### Forms

### Pagination

#### Using [React-JS-Pagination](https://www.npmjs.com/package/react-js-pagination)

```jsx
import { PageNav } from "fs-admin-ui-components";

<PageNav itemsCountPerPage={10} totalItemsCount={450} pageRangeDisplayed={5} />;
```

### Alerts

```jsx
<Alert primary="true">Primary alert</Alert>
<Alert secondary="true">Secondary alert</Alert>
<Alert success="true">Success alert</Alert>
<Alert warning="true">Warning alert</Alert>
<Alert danger="true">Danger alert</Alert>
```

## License

MIT © [Ozymandias9000](https://github.com/Ozymandias9000)
