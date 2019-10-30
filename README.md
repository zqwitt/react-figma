<p align="center"><img src="./logo.svg" width="128"></p>

# React Figma

[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)
[![npm version](https://img.shields.io/npm/v/react-figma.svg)](https://www.npmjs.com/package/react-figma)
[![CircleCI](https://circleci.com/gh/react-figma/react-figma.svg?style=svg)](https://circleci.com/gh/react-figma/react-figma)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/react-figma)

Render React components to Figma.

* 💡 Inspired by [react-sketchapp](https://github.com/airbnb/react-sketchapp).
* 🎨 Designed to create manageable design systems.
* 🦄 Flexible layouts support with [Yoga Layout](https://yogalayout.com/)
* ♻️ Hydration support.
* ⚙️ Built on [Figma Plugin API](https://www.figma.com/plugin-docs/intro/).

<p align="center"><img src="./demo.gif" width="800"></p>

Example of code:

```javascript
import * as React from 'react';
import { Page, Rectangle, Text } from 'react-figma';

export const App = () => {
    return (
        <Page name="New page">
            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
            <Text characters="text" style={{ color: '#ffffff' }} />
        </Page>
    );
};
```

___

⚠️ Warning!️ Project is not production ready and currently at alpha version. API can be changed.


## Installation

#### Using boilerplate

You can use [react-figma-boilerplate](https://github.com/LosYear/react-figma-boilerplate) for creating own projects.

#### From scratch

Install it with yarn:

```
yarn add react react-figma yoga-layout
```

Or with npm:

```
npm i react react-figma yoga-layout --save
```

### Usage

#### Configure main thread

```javascript
import * as React from 'react';
import { render, subscribeOnMessages } from 'react-figma';
import { App } from './App';

figma.showUI(__html__, { visible: false });

figma.ui.onmessage = message => {
    subscribeOnMessages(message);
};

render(<App />);
```

#### Configure ui thread

```javascript
import * as yoga from 'yoga-layout';
import { uiWorker } from 'react-figma';

onmessage = event => {
    uiWorker({ yoga })(event);
};
```

#### Import components

```javascript
import * as React from 'react';
import { Page, Rectangle, Text } from 'react-figma';

export const App = () => {
    return (
        <Page name="New page">
            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
            <Text characters="text" style={{ color: '#ffffff' }} />
        </Page>
    );
};
```

## Examples

* [basic](examples/basic)
* [design-system](examples/design-system)
* [groups](examples/groups)

## Roadmap

* Adding components:
  - Ellipse
  - Etc.
* Improving existing components:
  - Adding support of all figma properties.
  - Improving style prop support.
  - Adding support of all yoga-layout properties.
* react-primitives support.
* HMR support.
* styled-components support.

## Become a Contributor 🎖

Whether you're helping us implement features, fix bugs or improve the docs, we'd love to have you as part of the community! 

#### Reasons to be a contributor

* You pump your knowledge about:
  - **React**. Best way to figure out how React works - implementing custom renderer. In the project we operate with most advanced concepts: [Reconciliation](https://reactjs.org/docs/reconciliation.html), [Hooks](https://reactjs.org/docs/hooks-intro.html) etc.
  - **Figma Plugins** creation.
  - [Yoga Layout](https://yogalayout.com/)
  - [RxJS](https://rxjs-dev.firebaseapp.com/)
* Take a place at the contributors list. 😉

#### How to Contribute

Check out our [Contributing Guide](./contributing.md) for ideas on contributing and setup steps for getting repository up and running on your local machine.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/ilialesik"><img src="https://avatars2.githubusercontent.com/u/1270648?v=4" width="100px;" alt="Ilya Lesik"/><br /><sub><b>Ilya Lesik</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=ilyalesik" title="Code">💻</a></td>
    <td align="center"><a href="http://losyar.com"><img src="https://avatars2.githubusercontent.com/u/1065122?v=4" width="100px;" alt="Losev Yaroslav"/><br /><sub><b>Losev Yaroslav</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=LosYear" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/HVish"><img src="https://avatars1.githubusercontent.com/u/14261201?v=4" width="100px;" alt="Vishnu Singh"/><br /><sub><b>Vishnu Singh</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=HVish" title="Code">💻</a></td>
    <td align="center"><a href="http://corrinachow.com"><img src="https://avatars1.githubusercontent.com/u/35117708?v=4" width="100px;" alt="corrina"/><br /><sub><b>corrina</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=corrinachow" title="Code">💻</a></td>
    <td align="center"><a href="http://www.zacharyquintenwitt.com"><img src="https://avatars1.githubusercontent.com/u/5651980?v=4" width="100px;" alt="Zachary Witt"/><br /><sub><b>Zachary Witt</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=zqwitt" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
