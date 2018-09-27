import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('bestuursorgaan', params.bestuursorgaan_id, {
      include: 'is-tijdsspecialisatie-van,heeft-tijdsspecialisaties,bevat'
    });
  }
});
