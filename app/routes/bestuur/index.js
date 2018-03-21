import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

const filters = [
  {
    paramKey: 'mandaatId', type: 'mandaat', ctrlProperty: 'mandaat',
    backendFilter: 'filter[bekleedt][id]'
  },
  {
    paramKey: 'beleidsdomeinId', type: 'beleidsdomein-code', ctrlProperty: 'beleidsdomein',
    backendFilter: 'filter[beleidsdomein][id]'
  },
  {
    paramKey: 'bestuursorgaanId', type: 'bestuursorgaan', ctrlProperty: 'bestuursorgaan',
    backendFilter: 'filter[bekleedt][bevat-in][id]'
  },
  {
    paramKey: 'lijstId', type: 'kandidatenlijst', ctrlProperty: 'lijst',
    backendFilter: 'filter[is-bestuurlijke-alias-van][is-kandidaat-voor][id]'
  }
];

export default Route.extend(DataTableRouteMixin, {
  modelName: 'mandataris',
  queryParams: {
    page: { refreshModel: true },
    size: { refreshModel: true },
    sort: { refreshModel: true },
    // Filter query params
    mandaatId: { refreshModel: true },
    bestuursorgaanId: { refreshModel: true },
    beleidsdomeinId: { refreshModel: true },
    lijstId: { refreshModel: true }
  },
  beforeModel(params) {
    const controller = this.controllerFor(this.routeName);
    controller.set('bestuur', this.modelFor('bestuur'));
    const qParams = params.queryParams;
    filters.forEach( filter => this.setSelectedFilterValue(qParams,filter));
  },
  setSelectedFilterValue(qParams, { paramKey, ctrlProperty, type }) {
    const controller = this.controllerFor(this.routeName);
    if (qParams[paramKey]) {
      this.get('store').find(type, qParams[paramKey]).then( (result) => controller.set(ctrlProperty, result));
    }
    else {
      controller.set(ctrlProperty, null);
    }
  },
  mergeQueryOptions(params) {
    const bestuur = this.modelFor('bestuur');
    const queryOptions = {
      include: [
        'is-bestuurlijke-alias-van',
        'is-bestuurlijke-alias-van.geslacht',
        'is-bestuurlijke-alias-van.is-kandidaat-voor',
        'bekleedt',
        'bekleedt.bestuursfunctie',
        'heeft-lidmaatschap',
        'heeft-lidmaatschap.binnen-fractie',
        'beleidsdomein'
      ].join(','),
      'filter[bekleedt][bevat-in][is-tijdsspecialisatie-van][bestuurseenheid][id]': bestuur.get('id')
    };
    filters.forEach( f => {
      if (params[f.paramKey])
        queryOptions[f.backendFilter] = params[f.paramKey];
    });
    return queryOptions;
  }
});
