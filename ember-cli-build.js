'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    '@embroider/macros': {
      setConfig: {
        '@appuniversum/ember-appuniversum': {
          disableInternalAuContentUsage: true,
        },
      },
    },
    emberData: {
      deprecations: {
        DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false,
      },
    },
  });

  return app.toTree();
};
