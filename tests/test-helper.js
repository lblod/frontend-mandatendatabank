import Application from 'frontend-mandatendatabank/app';
import config from 'frontend-mandatendatabank/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
