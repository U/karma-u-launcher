# karma-U-launcher

> Launcher for U.

## Installation

The easiest way is to keep `karma-u-launcher` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-u-launcher": "git://github.com/U/karma-u-launcher.git"
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
