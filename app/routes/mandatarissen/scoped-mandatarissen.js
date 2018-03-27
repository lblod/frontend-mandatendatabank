import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
import $ from 'jquery';

export default Route.extend(DataTableRouteMixin, {
  modelName: 'mandataris',
  queryParams: {
    page: { refreshModel: true },
    size: { refreshModel: true },
    sort: { refreshModel: true }
  },
  model(params, transition) {
    const options = {
      sort: params.sort,
      page: {
        number: params.page,
        size: params.size
      },
      filter: {
        bekleedt: {
          'bevat-in': {
            id: transition.queryParams.bestuursorgaanId,
            'is-tijdsspecialisatie-van': {
              bestuurseenheid: {
                id: transition.queryParams.bestuurseenheidId
              }
            }
          }
        }
      },
      include: [
        'is-bestuurlijke-alias-van',
        'is-bestuurlijke-alias-van.geslacht',
        'is-bestuurlijke-alias-van.is-kandidaat-voor',
        'bekleedt',
        'bekleedt.bestuursfunctie',
        'bekleedt.bevat-in.is-tijdsspecialisatie-van.classificatie',
        'bekleedt.bevat-in.is-tijdsspecialisatie-van.bestuurseenheid.classificatie',
        'heeft-lidmaatschap',
        'heeft-lidmaatschap.binnen-fractie',
        'beleidsdomein'
      ].join(',')
    };
    $.extend(options, this.mergeQueryOptions(params));
    return this.get('store').query(this.get('modelName'), options);
  },
  afterModel(params, transition) {
    this.controllerFor(this.get('routeName')).set('bestuurseenheidId', transition.queryParams.bestuurseenheidId);
    this.controllerFor(this.get('routeName')).set('bestuursorgaanId', transition.queryParams.bestuursorgaanId);
  }
});
