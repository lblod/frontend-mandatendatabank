import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

const filters = [
  { paramKey: 'mandaat_id',  type: 'mandaat', property: 'mandaat', backendFilter: 'filter[bekleedt][id]' },
  { paramKey: 'bestuursorgaan',  type: 'bestuursorgaan', property: 'periode', backendFilter: 'filter[bekleedt][bevat-in][id]'},
  { paramKey: 'lijst_id', type: 'kandidatenlijst', property: 'lijst', backendFilter: 'filter[is-bestuurlijke-alias-van][is-kandidaat-voor][id]'}
];

export default Route.extend(DataTableRouteMixin, {
  queryParams: {
    page: { refreshModel: true },
    size: { refreshModel: true },
    sort: { refreshModel: true },
    mandaat_id:     {refreshModel: true},
    bestuursorgaan: {refreshModel: true},
    lijst_id:       {refreshModel: true}
  },
  modelName: 'mandataris',
  beforeModel(params) {
    let controller = this.controllerFor(this.routeName);
    controller.set('bestuur', this.modelFor('bestuur'));
    let qParams = params.queryParams;
    filters.forEach( filter => this.loadFilter(qParams,filter));
  },
  loadFilter(qParams, {paramKey, property, type}) {
    let controller = this.controllerFor(this.routeName);
    if (qParams[paramKey]) {
      this.get('store').find(type, qParams[paramKey]).then( (result) => controller.set(property, result));
    }
    else {
      this.controllerFor(this.routeName).set(property, null);
    }
  },
  mergeQueryOptions(params) {
    const bestuur = this.modelFor('bestuur');
    const queryOptions = { 'filter[bekleedt][bevat-in][is-tijdsspecialisatie-van][bestuurseenheid][id]': bestuur.get('id') };
    filters.forEach( f => {
      if (params[f.paramKey])
        queryOptions[f.backendFilter] = params[f.paramKey];
    });
    queryOptions.include = [
      'is-bestuurlijke-alias-van',
      'is-bestuurlijke-alias-van.geslacht',
      'is-bestuurlijke-alias-van.is-kandidaat-voor',
      'bekleedt',
      'bekleedt.bestuursfunctie',
      'heeft-lidmaatschap',
      'heeft-lidmaatschap.binnen-fractie',
      'beleidsdomein'
    ].join(',');
    return queryOptions;
  }
});
