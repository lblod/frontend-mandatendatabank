import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default Route.extend(DataTableRouteMixin, {
  modelName: 'mandataris',
  mergeQueryOptions(params) {
    const { persoon_id } = this.paramsFor('persoon.subject');
    return {
      sort: params.sort,
      page: {
        number: params.page,
        size: params.size
      },
      filter: {
        'is-bestuurlijke-alias-van': {
          id: persoon_id
        }
      },
      include: [
        'is-bestuurlijke-alias-van',
        'is-bestuurlijke-alias-van.geslacht',
        'is-bestuurlijke-alias-van.is-kandidaat-voor',
        'bekleedt',
        'bekleedt.bestuursfunctie',
        'bekleedt.bevat-in.is-tijdsspecialisatie-van.classificatie',
        'bekleedt.bevat-in.is-tijdsspecialisatie-van.bestuurseenheid',
        'bekleedt.bevat-in.is-tijdsspecialisatie-van.bestuurseenheid.classificatie',
        'heeft-lidmaatschap',
        'heeft-lidmaatschap.binnen-fractie',
        'beleidsdomein'
      ].join(',')
    };
  }
});
