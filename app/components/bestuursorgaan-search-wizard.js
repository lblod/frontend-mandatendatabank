import Component from '@glimmer/component';
import { alias, sort } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BestuursorgaanSearchWizardComponent extends Component {
  @tracked selectedBestuurseenheidId = null;
  @tracked selectedBestuursorgaanId = null;
  @alias('model.werkingsgebied') werkingsgebied;
  @sort('model.bestuurseenheden', 'generalSort') bestuurseenheden; 
  @sort('model.bestuursorganen', 'generalSort') bestuursorganen;
  @tracked generalSort = Object.freeze(['classificatie.label']);

  @action
  listBestuurseenheden(gebied){
    return this.onListBestuurseenheden(gebied);
  }
    
  @action
  listBestuursorganen(bestuurseenheidId){
    return this.onListBestuursorganen(bestuurseenheidId);
  }

  @action
  viewBestuursorgaan(bestuursorgaanId){
    return this.onViewBestuursorgaan(bestuursorgaanId);
  }
}

