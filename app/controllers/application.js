import Controller from '@ember/controller';
import ENV from 'frontend-mandatendatabank/config/environment';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  fastboot: service(),
  isFastBoot: reads('fastboot.isFastBoot'),

  init() {
    this._super(...arguments);
    this.set('header', ENV['vo-webuniversum']['header']);
    this.set('footer', ENV['vo-webuniversum']['footer']);
  }
});
