import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BestuursorgaanSearchWizardComponent extends Component {
  @tracked selectedBestuurseenheidId = null;
  @tracked selectedBestuursorgaanId = null;

  get werkingsgebied() {
    return this.args.model.werkingsgebied;
  }

  get bestuurseenheden() {
    return this.args.model.bestuurseenheden?.slice().sort(byClassificatie);
  }

  get bestuursorganen() {
    return this.args.model.bestuursorganen?.slice().sort(byClassificatie);
  }

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

function byClassificatie(a, b) {
  return a
    .belongsTo('classificatie')
    .value()
    .label.localeCompare(b.belongsTo('classificatie').value().label);
}
