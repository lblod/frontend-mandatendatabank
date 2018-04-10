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
  setupController: function(controller, model){
    this._super(controller,model);
    controller.set('secretaris', null);
    controller.set('adjunctSecretaris', null);
    controller.set('financieelBeheerder', null);
    controller.set('informatieAmbtenaar', null);
    controller.set('zoneChef', null);
    model.get('posities').then( (posities) => {
      posities.forEach( async (positie) => {
        const wordtIngevuldDoor = await positie.get('wordtIngevuldDoor');
        const rol = await positie.get('rol');
        if (wordtIngevuldDoor.get('length') > 0 )
          controller.set(roles[rol.get('id')], wordtIngevuldDoor.get('firstObject'));
      });
    });
    this.setPolitieChef(controller, model);
  },
  async setPolitieChef(controller, model) {
    const zone = await model.get('politiezone');
    const posities = await zone.get('posities');
    posities.forEach( async (positie) => {
      const wordtIngevuldDoor = await positie.get('wordtIngevuldDoor');
      const rol = await positie.get('rol');
      if (wordtIngevuldDoor.get('length') > 0 && rol.get('id') === 'a2e91f2b-6353-4042-ba8c-71d0015ea1d1')
        controller.set('zoneChef', wordtIngevuldDoor.get('firstObject'));
    });
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
