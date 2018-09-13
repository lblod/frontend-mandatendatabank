import { reads } from '@ember/object/computed';
import { inject } from '@ember/service';
import Controller from '@ember/controller';
import ENV from 'frontend-mandatendatabank/config/environment';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('header', ENV['vo-webuniversum']['header']);
    this.set('footer', ENV['vo-webuniversum']['footer']);
  },
  fastboot: inject(),
  isFastBoot: reads('fastboot.isFastBoot')
});
