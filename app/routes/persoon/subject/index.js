/* eslint-disable ember/no-mixins */
import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default class PersoonSubjectIndexRoute extends Route.extend(
  DataTableRouteMixin
) {
  modelName = 'mandataris';
  mergeQueryOptions(params) {
    const { persoon_id } = this.paramsFor('persoon.subject');

    return {
      sort: params.sort,
      page: {
        number: params.page,
        size: params.size,
      },
      filter: {
        'is-bestuurlijke-alias-van': {
          id: persoon_id,
        },
      },
      include: [
        'is-bestuurlijke-alias-van.is-kandidaat-voor',
        'bekleedt.bestuursfunctie',
        'bekleedt.bevat-in.is-tijdsspecialisatie-van',
        'bekleedt.bevat-in.is-tijdsspecialisatie-van.classificatie',
        'bekleedt.bevat-in.is-tijdsspecialisatie-van.bestuurseenheid.classificatie',
        'bekleedt.bevat-in.is-tijdsspecialisatie-van.bestuurseenheid.werkingsgebied',
        'heeft-lidmaatschap.binnen-fractie',
        'beleidsdomein',
        'status',
      ].join(','),
    };
  }
}
