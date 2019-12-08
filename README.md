# 💎️ Kiste
> A Vue component and SCSS utility library

See it in action:
- https://moritz-ruth.de
- https://test.cryptic-game.net

## Installation
```bash
yarn add -D kiste
```

Kiste requires `sass`.

## Usage
### Nuxt.js
Add `kiste/nuxt` to your buildModules:

```js
// nuxt.config.js

module.exports = {
  // ...
  
  kiste: {
    // options
  },
  
  buildModules: [
    "kiste/nuxt"
  ]
};
```

### Other
Register the Vue plugin:
```js
import Vue from "vue";
import Kiste from "kiste";

Vue.use(Kiste, {
  // options
});
```

## Options
### Theme
#### Colors
All colors can be strings or objects, whereas strings are converted to an object.

String format:
```raw
white/black/#0e0e0e
BASE/CONTRAST/ALTERNATIVE
```

Object format:
```js
import { DEFAULT_KEY } from "kiste/js/theming";

const background = {
  [DEFAULT_KEY]: "white",
  // contrast
  c: "black",
  // alternative
  a: "0e0e0e"
}
```

## Documentation
You can see all components and classes in [this storybook](https://app.moritz-ruth/kiste).
