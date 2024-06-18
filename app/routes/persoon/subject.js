import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PersoonSubjectRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('persoon', params.persoon_id);
  }
}
