[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/boom-react.svg)](https://badge.fury.io/js/boom-react)
![NPM Downloads](https://img.shields.io/npm/dm/boom-react?color=purple)

<!-- [![Boom-react Hero](https://www.primefaces.org/static/social/primereact-preview.jpg)](https://www.primereact.org) -->

# Boom-react

Boom-react is a rich set of open source UI Components for React. See [Boom-react homepage]() for live showcase and documentation.

This library is built upon Primereact and extends its functionality to better suit the needs of specific projects.

## Download

Boom-react is available at [npm](https://www.npmjs.com/package/boom-react).

```
# Using npm
npm install boom-react

# Using yarn
yarn add boom-react

# Using pnpm
pnpm add boom-react
```

## Import

Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component.

```javascript
//import { ComponentName } from 'boom-react/dist/{componentname}';
import { Button } from 'boom-react/dist/button';

export default function MyComponent() {
  return (
    <Button label="Boom-react" />
  )
}
```

## Theming

Boom-react has two theming modes; styled or unstyled.

**Styled Mode**

Styled mode is based on pre-skinned components with opinionated themes like Material, Bootstrap or PrimeOne themes. Theme is the required css file to be imported, visit the [Themes](https://primereact.org/theming) section for the complete list of available themes to choose from.

```javascript
// theme
import 'primereact/resources/themes/lara-light-cyan/theme.css';
```

**Unstyled Mode**

Unstyled mode is disabled by default for all components. Using the PrimeReact context, set `unstyled` as true to enable it globally. Visit the [Unstyled mode](https://primereact.org/unstyled) documentation for more information and examples.

## Contributors

<a href="https://github.com/skatwoh/boom-react/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=skatwoh/boom-react" />
</a>
