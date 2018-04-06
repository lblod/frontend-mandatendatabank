import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  werkingsgebied: alias('model.werkingsgebied'),
  bestuurseenheden: alias('model.bestuurseenheden'),
  bestuursorganen: alias('model.bestuursorganen'),

  actions: {
    listBestuurseenheden(gebied){
      this.set('bestuursorganen', null);
      return this.get('onListBestuurseenheden')(gebied);
    },
    listBestuursorganen(bestuurseenheidId){
      return this.get('onListBestuursorganen')(bestuurseenheidId);
    },
    viewBestuursorgaan(bestuursorgaanId){
      return this.get('onViewBestuursorgaan')(bestuursorgaanId);
    }
  }
});
