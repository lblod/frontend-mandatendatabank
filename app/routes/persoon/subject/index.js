import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PersoonSubjectIndexRoute extends Route {
  @service store;

  queryParams = {
    page: { refreshModel: true },
    size: { refreshModel: true },
    sort: { refreshModel: true },
  };

  model(params) {
    const { persoon_id } = this.paramsFor('persoon.subject');

    return this.store.query('mandataris', {
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
    });
  }
}
