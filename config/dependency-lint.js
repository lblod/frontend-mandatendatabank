'use strict';

module.exports = {
  generateTests: false,
  allowedVersions: {
    'ember-modifier': '*', // ember-rdfa-helpers depends on ember-modifier v3, but we don't use the modifier so we ignore the lint issue until we move away from that addon
  },
};
