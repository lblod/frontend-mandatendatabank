import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  sort: 'is-bestuurlijke-alias-van.achternaam',
  page: 0,
  size: 20,
  actions: {
    updateBestuurseenheidId(id) {
      this.set('page', 0);
      this.send('updateBestuurseenheidParam', id);
    },
    updateBestuursorgaanId(id) {
      this.set('page', 0);
      this.send('updateBestuursorgaanParam', id);
    }
  }
});
