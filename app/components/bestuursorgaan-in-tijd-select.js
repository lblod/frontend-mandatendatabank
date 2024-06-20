import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class BestuursorgaanInTijdSelectComponent extends Component {
  @service router;

  get bestuursorgaan() {
    return this.args.selectedBestuursorgaan
      .belongsTo('isTijdsspecialisatieVan')
      .value();
  }

  get tijdsspecialisaties() {
    if (!this.bestuursorgaan) {
      return [];
    }

    return this.bestuursorgaan
      .hasMany('heeftTijdsspecialisaties')
      .value()
      .slice()
      .sort(byBindingStartDesc);
  }

  @action
  select(selectedBestuursorgaan) {
    this.router.transitionTo(
      'bestuursorgaan.subject.index',
      selectedBestuursorgaan.id,
    );
  }
}

function byBindingStartDesc(a, b) {
  return b.bindingStart - a.bindingStart;
}
