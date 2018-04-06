import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  werkingsgebiedId: '',
  bestuurseenheidId: '',
  werkingsgebied: alias('model.werkingsgebied'),
  bestuurseenheden: alias('model.bestuurseenheden'),
  bestuursorganen: alias('model.bestuursorganen'),

  searchWerkingsgebied: task(function* (term) {
    yield timeout(250);
    let queryParams = {'filter[naam]': term};
    return this.get('store').query('werkingsgebied', queryParams);
  }),

  flushQueryParams(){
    this.set('werkingsgebiedId', '');
    this.set('bestuurseenheidId', '');
  },

  actions: {
    download(file) {
      window.location = file;
    },
    listBestuurseenheden(gebied){
      this.flushQueryParams();
      this.set('werkingsgebied', gebied);
      this.set('werkingsgebiedId', gebied.get('id'));
    },
    listBestuursorganen(bestuurseenheidId){
      this.set('bestuurseenheidId', bestuurseenheidId);
    },
    viewBestuursorgaan(bestuursorgaanId){
      this.transitionToRoute('bestuursorgaan.subject', bestuursorgaanId);
    }
  }
});
