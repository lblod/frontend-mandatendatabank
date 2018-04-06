import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  werkingsgebiedId: '',
  bestuurseenheidId: '',
  bestuurseenheden: null,
  bestuursorganen: null,

  searchWerkingsgebied: task(function* (term) {
    yield timeout(250);
    let queryParams = {'filter[naam]': term};
    return this.get('store').query('werkingsgebied', queryParams);
  }),

  setBestuurseenheden: async function(gebiedId){
    let queryParams = {'include': 'classificatie',
                       'filter[werkingsgebied][id]': gebiedId};
    let bestuurseenheden = await this.get('store').query('bestuurseenheid', queryParams);
    this.set('bestuurseenheden', bestuurseenheden);
  },

  setBestuursorganen: async function(bestuurseenheidId){
    let queryParams = {'include': 'classificatie',
                       'filter[bestuurseenheid][id]': bestuurseenheidId};
    let bestuursorganen = await this.get('store').query('bestuursorgaan', queryParams);
    this.set('bestuursorganen', bestuursorganen);
  },

  actions: {
    download(file) {
      window.location = file;
    },
    async listBestuurseenheden(gebied){
      this.set('werkingsgebiedId', gebied.get('id'));
      await this.setBestuurseenheden(gebied.get('id'));
    },
    async listBestuursorganen(bestuurseenheidId){
      this.set('bestuurseenheidId', bestuurseenheidId);
      await this.setBestuursorganen(bestuurseenheidId);
    },
    viewBestuursorgaan(bestuursorgaanId){
      this.transitionToRoute('bestuursorgaan.subject', bestuursorgaanId);
    }
  }
});
