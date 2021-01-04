import Route from '@ember/routing/route';

export default class PersoonSubjectRoute extends Route {
  model(params) {
    return this.store.findRecord('persoon', params.persoon_id);
  }
}
