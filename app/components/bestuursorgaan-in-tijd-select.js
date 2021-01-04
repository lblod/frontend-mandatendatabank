import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { sort } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class BestuursorgaanInTijdSelectComponent extends Component {
  @service router;

  @tracked bestuursorganenSortingDesc = Object.freeze(['bindingStart:desc']);
  @sort('bestuursorgaan.heeftTijdsspecialisaties', 'bestuursorganenSortingDesc') descSortedBestuursorganen;

  get bestuursorgaan(){
    return this.args.selectedBestuursorgaan.isTijdsspecialisatieVan
  } 

  @action
    select(selectedBestuursorgaan) {
    this.router.transitionTo('bestuursorgaan.subject.index', selectedBestuursorgaan.id);
    }
  }

