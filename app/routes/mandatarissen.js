import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    bestuurseenheidId: { refreshModel: true },
    bestuursorgaanId: { refreshModel: true }
  },
  actions: {
    updateBestuurseenheidParam(id) {
      this.controllerFor(this.get('routeName')).set('bestuurseenheidId', id);
    },
    updateBestuursorgaanParam(id) {
      this.controllerFor(this.get('routeName')).set('bestuursorgaanId', id);
    }
  }
});
