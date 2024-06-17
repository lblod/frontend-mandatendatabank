import { task, timeout } from 'ember-concurrency';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service router;
  @service store;
  @tracked werkingsgebiedId;
  @tracked bestuurseenheidId;
  @tracked bestuursorgaanId;

  @task(function* (term) {
    yield timeout(250);
    let queryParams = { 'filter[naam]': term };
    return this.store.query('werkingsgebied', queryParams);
  })
  searchWerkingsgebied;

  flushQueryParams(step) {
    this.bestuursorgaanId = '';
    if (step <= 1) {
      this.werkingsgebiedId = '';
      this.bestuurseenheidId = '';
    }
  }

  @action
  listBestuurseenheden(gebied) {
    this.flushQueryParams(1);
    this.model.bestuursorganen = null;
    this.werkingsgebiedId = gebied;
    this.werkingsgebiedId = gebied ? gebied.get('id') : null;
  }

  @action
  listBestuursorganen(bestuurseenheidId) {
    this.flushQueryParams(2);
    this.bestuurseenheidId = bestuurseenheidId;
  }

  @action
  viewBestuursorgaan(bestuursorgaanId) {
    this.bestuursorgaanId = bestuursorgaanId;
    this.router.transitionTo('bestuursorgaan.subject', bestuursorgaanId);
  }
}
