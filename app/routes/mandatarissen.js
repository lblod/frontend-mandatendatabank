import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    bestuurseenheidId: { refreshModel: true },
    bestuursorgaanId: { refreshModel: true }
  },
  actions: {
    updateBestuurseenheid(id) {
      this.controllerFor(this.get('routeName')).set('bestuurseenheidId', id);
    },
    updateBestuursorgaan(id) {
      this.controllerFor(this.get('routeName')).set('bestuursorgaanId', id);
    }
  }
});
