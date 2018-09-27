import Component from '@ember/component';
import { alias, sort } from '@ember/object/computed';

export default Component.extend({
  selectedBestuurseenheidId: null,
  selectedBestuursorgaanId: null,
  werkingsgebied: alias('model.werkingsgebied'),
  bestuurseenheden: sort('model.bestuurseenheden', 'generalSort'),
  bestuursorganen: sort('model.bestuursorganen', 'generalSort'),
  generalSort: Object.freeze(['classificatie.label']),

  actions: {
    listBestuurseenheden(gebied){
      return this.onListBestuurseenheden(gebied);
    },
    listBestuursorganen(bestuurseenheidId){
      return this.onListBestuursorganen(bestuurseenheidId);
    },
    viewBestuursorgaan(bestuursorgaanId){
      return this.onViewBestuursorgaan(bestuursorgaanId);
    }
  }
});
