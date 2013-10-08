var UBrowser = function(baseBrowserDecorator, args) {
  baseBrowserDecorator(this);

  var flags = args.flags || [];

  this._getOptions = function(url) {
    // Chrome CLI options
    // http://peter.sh/experiments/chromium-command-line-switches/
    return [
      '--user-data-dir=' + this._tempDir,
      '--no-default-browser-check',
      '--no-first-run',
      '--disable-default-apps',
      '--start-maximized'
    ].concat(flags, [url]);
  };
};

UBrowser.prototype = {
  name: 'U',

  DEFAULT_CMD: {
    darwin: '/Applications/U.app/Contents/MacOS/U',
    win32: process.env.LOCALAPPDATA + '\\Conduit\\U\\Application\\U.exe'
  },
  ENV_CMD: 'CHROME_BIN'
};

UBrowser.$inject = ['baseBrowserDecorator', 'args'];

// PUBLISH DI MODULE
module.exports = {
  'launcher:U': ['type', UBrowser]
};
