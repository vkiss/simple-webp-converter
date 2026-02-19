# simple-webp-converter

[![npm version](https://badge.fury.io/js/simple-webp-converter.svg)](https://badge.fury.io/js/simple-webp-converter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple Node.js library for converting PNG and JPG images to WebP format using [webp-converter](https://github.com/scionoftech/webp-converter).

## Features

- Convert PNG and JPG images to WebP
- CLI tool for easy integration into build scripts
- Programmatic API for custom workflows
- Configurable source patterns using glob

## Installation

```bash
npm install simple-webp-converter --save-dev
```

## Usage

### CLI Usage

Add to your `package.json` scripts:

```json
{
  "scripts": {
    "webp": "simple-webp-converter"
  }
}
```

Run the conversion:

```bash
npm run webp
```

This will create WebP copies of all PNG and JPG files in the project (excluding `node_modules`).

### Configuration

Configure options in `package.json` under the `"simple-webp-converter"` key:

```json
{
  "simple-webp-converter": {
    "src": "src/**/*.{png,jpg}",
    "quality": 90
  }
}
```

With this config, only images under the `/src` folder will be converted with 90% quality.

### Programmatic Usage

```javascript
const simpleWebpConverter = require("simple-webp-converter");

// Use default settings (converts **/*.{png,jpg} at quality 80)
simpleWebpConverter();

// Use custom source pattern and quality
simpleWebpConverter({
  src: "assets/**/*.{png,jpg}",
  quality: 90
});
```

## Options

- `src` (string): Glob pattern to match source images. Default: `"**/*.{png,jpg}"`
- `quality` (number): WebP quality (0-100). Default: `80`

## Notes

- Output files are created in the same directory as the source files with `.webp` extension.
- Quality ranges from 0 (worst) to 100 (best).
- Requires `webp-converter` which depends on WebP tools being installed on the system.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/vkiss/simple-webp-converter).

## License

MIT
