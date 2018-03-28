import ScopedMandatarissenController from './scoped-mandatarissen';

export default ScopedMandatarissenController.extend({
  model(params, transition) {
    this.set('idParam', params.bestuursfunctie_id);
    return this._super(params, transition);
  },
  mergeQueryOptions(params) {
    return {
      'filter[bekleedt][bestuursfunctie][id]': params.bestuursfunctie_id
    };
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('bestuursfunctieId', this.get('idParam'));
  }
});
