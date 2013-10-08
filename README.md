# karma-U-launcher

> Launcher for U.

## Installation

**This plugin ships with Karma by default, so you don't need to install it, it should just work ;-)**

The easiest way is to keep `karma-u-launcher` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-chrome-launcher": "~0.1"
  }
}
```

You can simple do it by:
```sh
npm install 'git+https://github.com/U/karma-u-launcher.git' --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['U']
  });
};
```
