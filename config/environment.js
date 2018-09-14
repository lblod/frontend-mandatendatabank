'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'frontend-mandatendatabank',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    moment: {
      allowEmpty: true
    },
    browserUpdate: {
      vs: {i:11,f:-3,o:-3,s:-3,c:-3},
      style: 'corner',
      l: 'nl',
      shift_page_down: false
    },
    'vo-webuniversum': {
      version: '2.8.3',
      header: '//widgets.vlaanderen.be/widget/live/536f9f3a7a7d4842aecd269a28a636d1',
      footer: '//widgets.vlaanderen.be/widget/live/40cd2af0f2fb4ac0bd834c1b7562101f'
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
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

  if (process.env.DEPLOY_ENV === 'production') {
    ENV['vo-webuniversum']['header'] = '//widgets.vlaanderen.be/widget/live/08f44cf079f54a0ba954b91dbf3e69ab';
    ENV['vo-webuniversum']['footer'] = '//widgets.vlaanderen.be/widget/live/a7367e63e7b3444382ef264b25776f38';
  }

  return ENV;
};
