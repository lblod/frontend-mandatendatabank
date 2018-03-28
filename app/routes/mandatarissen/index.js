import ScopedMandatarissenController from './scoped-mandatarissen';

export default ScopedMandatarissenController.extend({
  queryParams: {
    page: { refreshModel: true },
    size: { refreshModel: true },
    sort: { refreshModel: true },
    beleidsdomeinId: { refreshModel: true }
  },
  beforeModel(params) {
    const controller = this.controllerFor(this.get('routeName'));
    const qParams = params.queryParams;

    if (qParams.beleidsdomeinId) {
      this.get('store').findRecord('beleidsdomein-code', qParams.beleidsdomeinId).then( (result) => {
        controller.set('beleidsdomein', result);
      });
    }
  },
  mergeQueryOptions(params) {
    return {
      'filter[beleidsdomein][id]': params.beleidsdomeinId
    };
  }
});
