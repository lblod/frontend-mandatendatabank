import Route from '@ember/routing/route';

const roles = {
  '66b95587-b24b-46a5-9231-b4dec06bddac': 'secretaris',
  '8235802f-37fd-4971-826c-063205a1a31c': 'adjunctSecretaris',
  'b83a1d0e-0390-4759-871a-e99c9ec00490': 'financieelBeheerder',
  'f5a7bf88-f31b-4ea8-926b-233b4952fe13': 'informatieAmbtenaar'
};

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
