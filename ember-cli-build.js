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
  });

  return app.toTree();
};
