var CanaryStore = require('canary-store');
var CanaryUI = require('canary-ui');

module.exports = function(store) {
  var canary = new CanaryStore();
  canary
    .config('show-banner')
    .assign('show-banner', process.env.FEATURE_SHOW_BANNER) // default value for flag

  window['canary-ui'] = CanaryUI(canary)
    .sessionStorage()
    .hashchange();

  return canary;
};
