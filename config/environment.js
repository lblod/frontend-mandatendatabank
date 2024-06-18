'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'frontend-mandatendatabank',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },
    'ember-moment': {
      allowEmpty: true,
    },
    browserUpdate: {
      vs: { i: 11, f: -3, o: -3, s: -3, c: -3 },
      style: 'corner',
      l: 'nl',
      shift_page_down: false,
    },

    fastboot: {
      hostWhitelist: [
        'mandaten.lokaalbestuur.vlaanderen.be',
        'mandaten.lblod.info',
        'dev.mandaten.lblod.info',
        `${/^localhost:\d+$/.toString()}`,
        'localhost',
      ],
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
