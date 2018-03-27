import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default Route.extend(DataTableRouteMixin, {
  modelName: 'mandataris',
  queryParams: {
    page: { refreshModel: true },
    size: { refreshModel: true },
    sort: { refreshModel: true },
    bestuurseenheidId: { refreshModel: true },
    bestuursorgaanId: { refreshModel: true }
  },
  mergeQueryOptions(params) {
    const queryOptions = {
      filter: {
        'is-bestuurlijke-alias-van': {
          id: params.persoon_id
        },
        bekleedt: {
          'bevat-in': {
            id: params.bestuursorgaanId,
            'is-tijdsspecialisatie-van': {
              bestuurseenheid: {
                id: params.bestuurseenheidId
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
    return queryOptions;
  }
});
