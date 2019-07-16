import { debug } from '@ember/debug';
import Route from '@ember/routing/route';
import _ from 'lodash';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default Route.extend(DataTableRouteMixin, {
  modelName: 'mandataris',

  async getLastBestuursorgaan(bestuursorgaan){
    let organenInTijd = await bestuursorgaan.get('heeftTijdsspecialisaties');
    return organenInTijd.sortBy('bindingStart').get('lastObject');
  },
  async beforeModel() {
    const bestuursorgaan = await this.modelFor('bestuursorgaan.subject');
    if (! await bestuursorgaan.get('isTijdsspecialisatieVan')) { // niet-tijdsgebonden bestuursorgaan
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
        'bekleedt.bestuursfunctie'
      ].join(',')
    };
  },

  /*********************************************************************************
   * Temporary workaround fastboot and ember-data-table/addon/mixins/route.js
   * We keep these here, as we want to experiment on how to tackle fastboot issues.
   * Effective code changes will be preceded by //--- FASTBOOT WORKAROUND ---//
   *********************************************************************************/
  model(params) {
    const options = {
        sort: params.sort,
        page: {
          number: params.page,
          size: params.size
        }
    };
    // TODO: sending an empty filter param to backend returns []
    if (params.filter) { options['filter'] = params.filter; }


    //--- FASTBOOT WORKAROUND ---//

    //previous code

    // $.extend(options, this.mergeQueryOptions(params));

    // $.extend is complex, so opted to use lodash
    _.merge(options, this.mergeQueryOptions(params));


    return this.store.query(this.modelName, options);
  }

  /*********************************************************************************
   * end workaround
  *********************************************************************************/
});
