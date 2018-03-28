import ScopedMandatarissenController from './scoped-mandatarissen';

export default ScopedMandatarissenController.extend({
  model(params, transition) {
    this.set('idParam', params.fractie_id);
    return this._super(params, transition);
  },
  mergeQueryOptions(params) {
    return {
      'filter[heeft-lidmaatschap][binnen-fractie][id]': params.fractie_id
    };
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('fractieId', this.get('idParam'));
  }

});
