import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  werkingsgebiedId: '',
  bestuurseenheidId: '',
  bestuursorgaanId: '',

  searchWerkingsgebied: task(function* (term) {
    yield timeout(250);
    let queryParams = {'filter[naam]': term};
    return this.get('store').query('werkingsgebied', queryParams);
  }),

  flushQueryParams(step){
    this.set('bestuursorgaanId', '');
    if(step <= 1){
      this.set('werkingsgebiedId', '');
      this.set('bestuurseenheidId', '');
    }
  },

  actions: {
    download(file) {
      window.location = file;
    },
    listBestuurseenheden(gebied){
      this.flushQueryParams(1);
      this.set('model.bestuursorganen', null);
      this.set('werkingsgebied', gebied);
      this.set('werkingsgebiedId', gebied.get('id'));
    },
    listBestuursorganen(bestuurseenheidId){
      this.flushQueryParams(2);
      this.set('bestuurseenheidId', bestuurseenheidId);
    },
    async viewBestuursorgaan(bestuursorgaanId){
      await this.set('bestuursorgaanId', bestuursorgaanId);
      this.transitionToRoute('bestuursorgaan.subject', bestuursorgaanId);
    }
  }
});
