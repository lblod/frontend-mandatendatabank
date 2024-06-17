import Component from '@glimmer/component';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { alias, sort } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BestuursorgaanSearchWizardComponent extends Component {
  @tracked selectedBestuurseenheidId = null;
  @tracked selectedBestuursorgaanId = null;

  // TODO: replace these with getters
  @alias('args.model.werkingsgebied') werkingsgebied;
  @sort('args.model.bestuurseenheden', 'generalSort') bestuurseenheden;
  @sort('args.model.bestuursorganen', 'generalSort') bestuursorganen;
  @tracked generalSort = Object.freeze(['classificatie.label']);

  @action
  listBestuurseenheden(gebied) {
    this.args.onListBestuurseenheden(gebied);
  }

  @action
  listBestuursorganen(bestuurseenheidId) {
    this.args.onListBestuursorganen(bestuurseenheidId);
  }

  @action
  viewBestuursorgaan(bestuursorgaanId) {
    this.args.onViewBestuursorgaan(bestuursorgaanId);
  }
}
