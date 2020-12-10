import { task, timeout } from 'ember-concurrency';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking'; 
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @tracked werkingsgebiedId;
  @tracked bestuurseenheidId;
  @tracked bestuursorgaanId;

  @(task(function* (term) {
    yield timeout(250);
    let queryParams = {'filter[naam]': term};
    return this.store.query('werkingsgebied', queryParams);
  })) searchWerkingsgebied;

  flushQueryParams(step){
    this.set('bestuursorgaanId', '');
    if(step <= 1){
      this.set('werkingsgebiedId', '');
      this.set('bestuurseenheidId', '');
    }
  }

  @action
    listBestuurseenheden(gebied){
      this.flushQueryParams(1);
      this.set('model.bestuursorganen', null);
      this.set('werkingsgebied', gebied);
      this.set('werkingsgebiedId', gebied ? gebied.get('id') : null);
    }

  @action
    listBestuursorganen(bestuurseenheidId){
      this.flushQueryParams(2);
      this.set('bestuurseenheidId', bestuurseenheidId);
    }

  @action
    async viewBestuursorgaan(bestuursorgaanId){
      await this.set('bestuursorgaanId', bestuursorgaanId);
      this.transitionToRoute('bestuursorgaan.subject', bestuursorgaanId);
    } 
}
