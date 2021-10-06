# simple-webp-converter
[![npm version](https://badge.fury.io/js/simple-webp-converter.svg)](https://badge.fury.io/js/simple-webp-converter)

A node library for converting .png and .jpg to .webp using [webp-converter](https://github.com/scionoftech/webp-converter).

## Instalation

```bash
npm i simple-webp-converter --save-dev
```

## How

```json
# package.json

{
  "scripts": {
    "webp": "simple-webp-converter"
  },
}
```

```bash
npm run webp
```

Running this will create a .webp copy on the same path as any .png or .jpg file (node_modules is excluded by default).

## Options

To change config, include the `"simple-webp-converter"` property in package.json

### src

Changes pattern to look for imagens in repository.
The value must be a [glob pattern](https://github.com/isaacs/node-glob#glob-primer) string

```json
# package.json

{
  "simple-webp-converter": {
    "src": "src/**/*.{png,jpg}"
  }
}
```

Running with this configuration will create a .webp copy on the same path as the .png and .jpgs files located under /src folder

## How (in JS)
```js
const simpleWebpConverter = require( "simple-webp-converter" );

// to run using default glob pattern
simpleWebpConverter();

// to run using custom pattern
simpleWebpConverter({
  src: "assets/**/*.{png,jpg}"
});

```
