import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BestuursorgaanSubjectRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('bestuursorgaan', params.bestuursorgaan_id, {
      include: 'is-tijdsspecialisatie-van,heeft-tijdsspecialisaties,bevat',
    });
  }
}
