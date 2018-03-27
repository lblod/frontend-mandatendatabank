import ScopedMandatarissenController from './scoped-mandatarissen';

export default ScopedMandatarissenController.extend({
  model(params, transition) {
    this.set('idParam', params.beleidsdomein_id);
    return this._super(params, transition);
  },
  mergeQueryOptions(params) {
    return {
      'filter[beleidsdomein][id]': params.beleidsdomein_id
    };
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('beleidsdomeinId', this.get('idParam'));
  }

});
