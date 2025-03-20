/* eslint-disable ember/no-mixins */
import { debug } from '@ember/debug';
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default class BestuursorgaanSubjectIndexRoute extends Route.extend(
  DataTableRouteMixin,
) {
  @service router;
  @service store;

  modelName = 'mandataris';

  async getLastBestuursorgaan(bestuursorgaan) {
    let organenInTijd = await bestuursorgaan.heeftTijdsspecialisaties;

    return organenInTijd.slice().sort(byBindingStart).at(-1);
  }

  async beforeModel() {
    const bestuursorgaan = await this.modelFor('bestuursorgaan.subject');

    if (!(await bestuursorgaan.isTijdsspecialisatieVan)) {
      // niet-tijdsgebonden bestuursorgaan
      debug('Redirect to most recent time period.');
      let lastOrgaan = await this.getLastBestuursorgaan(bestuursorgaan);
      this.router.transitionTo('bestuursorgaan.subject.index', lastOrgaan.id);
    }
  }

  mergeQueryOptions(params) {
    const { bestuursorgaan_id } = this.paramsFor('bestuursorgaan.subject');

    return {
      sort: params.sort,
      page: {
        number: params.page,
        size: params.size,
      },
      filter: {
        bekleedt: {
          'bevat-in': {
            id: bestuursorgaan_id, // tijdsgebonden bestuursorgaan
          },
        },
      },
      include: [
        'is-bestuurlijke-alias-van',
        'bekleedt.bestuursfunctie',
        'heeft-lidmaatschap.binnen-fractie',
        'beleidsdomein',
        'status',
      ].join(','),
    };
  }
}

function byBindingStart(a, b) {
  return a.bindingStart - b.bindingStart;
}
