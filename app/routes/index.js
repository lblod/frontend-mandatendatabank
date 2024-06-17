import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  queryParams = {
    werkingsgebiedId: { refreshModel: true },
    bestuurseenheidId: { refreshModel: true },
    bestuursorgaanId: {},
  };

  getBestuurseenheden(gebiedId) {
    let queryParams = {
      include: 'classificatie',
      'filter[werkingsgebied][id]': gebiedId,
      sort: 'naam',
    };

    return this.store.query('bestuurseenheid', queryParams);
  }

  getBestuursorganen(bestuurseenheidId) {
    let queryParams = {
      include: 'classificatie',
      'filter[bestuurseenheid][id]': bestuurseenheidId,
      'filter[:has:heeft-tijdsspecialisaties]': true,
      sort: 'naam',
    };

    return this.store.query('bestuursorgaan', queryParams);
  }

  model(params) {
    let modelHash = {
      werkingsgebied: null,
      bestuurseenheden: null,
      bestuursorganen: null,
    };

    if (params.werkingsgebiedId) {
      modelHash.werkingsgebied = this.store.findRecord(
        'werkingsgebied',
        params.werkingsgebiedId
      );
      modelHash.bestuurseenheden = this.getBestuurseenheden(
        params.werkingsgebiedId
      );
    }

    if (params.bestuurseenheidId) {
      modelHash.bestuursorganen = this.getBestuursorganen(
        params.bestuurseenheidId
      );
    }

    return RSVP.hash(modelHash);
  }
}
