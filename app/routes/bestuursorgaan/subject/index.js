import { debug } from '@ember/debug';
import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default Route.extend(DataTableRouteMixin, {
  modelName: 'mandataris',

  async getLastBestuursorgaan(bestuursorgaan){
    let organenInTijd = await bestuursorgaan.get('heeftTijdsspecialisaties');
    return organenInTijd.sortBy('bindingStart').get('lastObject');
  },
  async beforeModel() {
    const bestuursorgaan = await this.modelFor('bestuursorgaan.subject');
    if (!bestuursorgaan.get('isTijdsspecialisatieVan').content) { // niet-tijdsgebonden bestuursorgaan
      debug('Redirect to most recent time period.');
      let lastOrgaan = await this.getLastBestuursorgaan(bestuursorgaan);
      this.transitionTo('bestuursorgaan.subject.index', lastOrgaan.get('id'));
    }
  },
  mergeQueryOptions(params) {
    const { bestuursorgaan_id } = this.paramsFor('bestuursorgaan.subject');
    return {
      sort: params.sort,
      page: {
        number: params.page,
        size: params.size
      },
      filter: {
        bekleedt: {
          'bevat-in': {
            id: bestuursorgaan_id // tijdsgebonden bestuursorgaan
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
        'bekleedt.bevat-in.is-tijdsspecialisatie-van.bestuurseenheid',
        'bekleedt.bevat-in.is-tijdsspecialisatie-van.bestuurseenheid.classificatie',
        'heeft-lidmaatschap',
        'heeft-lidmaatschap.binnen-fractie',
        'beleidsdomein'
      ].join(',')
    };
  }
});
