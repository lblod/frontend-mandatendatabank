import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  queryParams: {
    werkingsgebiedId: { refreshModel: true },
    bestuurseenheidId: { refreshModel: true },
    bestuursorgaanId: {}
  },

  getBestuurseenheden: function(gebiedId){
    let queryParams = {'include': 'classificatie',
                       'filter[werkingsgebied][id]': gebiedId,
                       'sort': 'naam'};
    return this.get('store').query('bestuurseenheid', queryParams);
    },

  getBestuursorganen: function(bestuurseenheidId){
    let queryParams = {'include': 'classificatie',
                       'filter[bestuurseenheid][id]': bestuurseenheidId,
                       'sort': 'naam'};
    return this.get('store').query('bestuursorgaan', queryParams);
  },

  model(params){
    let modelHash = {werkingsgebied: null, bestuurseenheden: null, bestuursorganen: null};
    if(params.werkingsgebiedId){
      modelHash.werkingsgebied = this.get('store').findRecord('werkingsgebied', params.werkingsgebiedId);
      modelHash.bestuurseenheden = this.getBestuurseenheden(params.werkingsgebiedId);
    }
    if(params.bestuurseenheidId){
      modelHash.bestuursorganen = this.getBestuursorganen(params.bestuurseenheidId);
    }
    return RSVP.hash(modelHash);
  }
});
