import { debug } from '@ember/debug';
import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default Route.extend(DataTableRouteMixin, {
  modelName: 'mandataris',
  beforeModel() {
    const bestuursorgaan = this.modelFor('bestuursorgaan.subject');
    if (!bestuursorgaan.get('isTijdsspecialisatieVan').content) { // niet-tijdsgebonden bestuursorgaan
      debug('Accessing a niet-tijdsgebonden bestuursorgaan. Redirect to most recent time period.');
      this.transitionTo('bestuursorgaan.subject.index', '5ab12113496009290c00b465');
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
