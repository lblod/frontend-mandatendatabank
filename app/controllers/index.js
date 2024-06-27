import { task, timeout } from 'ember-concurrency';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class IndexController extends Controller {
  @service router;
  @service store;
  @tracked werkingsgebiedId;
  @tracked bestuurseenheidId;
  @tracked bestuursorgaanId;
  @tracked isLoading = false;

  get hasSelectedWerkingsgebied() {
    return Boolean(this.werkingsgebiedId);
  }

  get hasSelectedBestuurseenheid() {
    return Boolean(this.bestuurseenheidId);
  }

  get isLoadingBestuurseenheden() {
    return (
      this.isLoading &&
      this.hasSelectedWerkingsgebied &&
      !this.hasSelectedBestuurseenheid
    );
  }

  get isLoadingBestuursorganen() {
    return (
      this.isLoading &&
      this.hasSelectedWerkingsgebied &&
      this.hasSelectedBestuurseenheid
    );
  }

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
    this.werkingsgebiedId = gebied ? gebied.id : null;
    this.isLoading = true;
  }

  @action
  listBestuursorganen(bestuurseenheidId) {
    this.flushQueryParams(2);
    this.isLoading = true;
    this.bestuurseenheidId = bestuurseenheidId;
  }
}
