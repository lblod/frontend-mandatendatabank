import ScopedMandatarissenController from './scoped-mandatarissen';

export default ScopedMandatarissenController.extend({
  model(params, transition) {
    this.set('idParam', params.persoon_id);
    return this._super(params, transition);
  },
  mergeQueryOptions(params) {
    return {
      'filter[is-bestuurlijke-alias-van][id]': params.persoon_id
    };
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('persoonId', this.get('idParam'));
  }

});
