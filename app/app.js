import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import { registerInflectorRules } from './config/custom-inflector-rules';
import config from 'frontend-mandatendatabank/config/environment';
import { handleDeprecations } from './utils/deprecations';

handleDeprecations();

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
registerInflectorRules(); // This should be run _after_ loadInitializers so that EmberData's compat detection code detects our custom rules.
