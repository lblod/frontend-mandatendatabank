import { registerDeprecationHandler } from '@ember/debug';
// import config from 'frontend-mandatendatabank/config/environment';

/*
  This util silences specific deprecations, similar to the deprecations-workflow addon, but simplified
  Source: https://github.com/emberjs/rfcs/blob/9310137035a094ccc1675aff66af73c0691a047c/text/1009-move-deprecation-workflow-to-apps.md
 */

// const SHOULD_THROW = config.environment !== 'production';
const SHOULD_THROW = false;
const SILENCED_DEPRECATIONS = [
  // Add ids of deprecations you temporarily want to silence here.
  'ember-string.add-package', // TODO: The deprecation is triggered by false positives. We can remove this after updating to Ember v5
];

export function handleDeprecations() {
  registerDeprecationHandler((message, options, next) => {
    if (!options) {
      console.error('Missing options');
      throw new Error(message);
    }

    if (SILENCED_DEPRECATIONS.includes(options.id)) {
      return;
    } else if (SHOULD_THROW) {
      throw new Error(message);
    }

    next(message, options);
  });
}