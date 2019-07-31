import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Controller.extend({
  fastboot: service(),
  isFastBoot: reads('fastboot.isFastBoot'),
  sort: 'is-bestuurlijke-alias-van.achternaam',
  page: 0,
  size: 20
});
