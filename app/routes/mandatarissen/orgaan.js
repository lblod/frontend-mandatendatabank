import ScopedMandatarissenController from './scoped-mandatarissen';

export default ScopedMandatarissenController.extend({
  model(params, transition) {
    this.set('idParam', params.orgaan_id);
    return this._super(params, transition);
  },
  mergeQueryOptions(params) {
    return {
      'filter[bekleedt][bevat-in][is-tijdsspecialisatie-van][id]': params.orgaan_id
    };
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('orgaanId', this.get('idParam'));
  }

});
