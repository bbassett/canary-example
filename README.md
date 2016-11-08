# canary-example

## Running

```sh
git clone https://github.com/bbassett/canary-example
cd canary-example
npm i
make
```

## expose canary to your app

```
// src/index.js

module.exports = Poe(document.getElementById('app'), {
  canary: (require('./canary'))(store),
  router: {
    activeLinkClassName: 'is-active',
    basename: __app_path__,
    routes: routes
  },
  format: format,
  forms: new Forms(client),
  store: store,
  translate: new Translate('.translations.canary-example')
});
```

## configure canary flags
```
// src/canary.js

var CanaryStore = require('canary-store');
var CanaryUI = require('canary-ui');

module.exports = function(store) {
  var canary = new CanaryStore();
  canary
    .config('show-banner') // flag name
    .assign('show-banner', process.env.FEATURE_SHOW_BANNER) // default value for flag, if not assigned will default to false

  window['canary-ui'] = CanaryUI(canary)
    .sessionStorage()
    .hashchange();

  return canary;
};
```

## access the flag in the app
```
// anywhere in web dir

:doc
  @name App

import './__local__/index.ess'

var showBanner = this.canary.get('show-banner')

h1 canary-example

if showBanner
  h1 THIS IS BANNER
```

## trigger flag in browser
* add `#canary` to the end of your url and check the box

## License

MIT