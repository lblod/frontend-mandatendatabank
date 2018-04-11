import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const bestuursorgaan = await this.modelFor('bestuursorgaan.subject');
    const isTijdsSpecialisatieVan = await bestuursorgaan.get('isTijdsspecialisatieVan');
    const rootBestuursOrgaan = isTijdsSpecialisatieVan ? isTijdsSpecialisatieVan : bestuursorgaan;
    const eenheid = await rootBestuursOrgaan.get('bestuurseenheid');
    return this.getBestuurseenheid(eenheid.get('id'));
  },
  getBestuurseenheid(id) {
    return this.get('store').findRecord(
      'bestuurseenheid',
      id,
      {
        include: ['politiezone',
                  'primaire-site',
                  'politiezone.contactinfo',
                  'primaire-site.vestigingsadres',
                  'posities',
                  'posities.rol',
                  'posities.wordt-ingevuld-door'
                 ].join(',')
      }
    );
  }
});
