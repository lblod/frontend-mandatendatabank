import { irregular } from '@ember-data/request-utils/string';

export function registerInflectorRules() {
  irregular('bestuurseenheid', 'bestuurseenheden');
  irregular('bestuursorgaan', 'bestuursorganen');
  irregular('contact-punt', 'contact-punten');
  irregular('entiteit', 'entiteiten');
  irregular('fractie', 'fracties');
  irregular('identificator', 'identificatoren');
  irregular('kandidatenlijst', 'kandidatenlijsten');
  irregular('lidmaatschap', 'lidmaatschappen');
  irregular('mandaat', 'mandaten');
  irregular('mandataris', 'mandatarissen');
  irregular('persoon', 'personen');
  irregular('rechtsgrond-aanstelling', 'rechtsgronden-aanstelling');
  irregular('rechtsgrond-beeindiging', 'rechtsgronden-beeindiging');
  irregular('rechtsgrond-besluit', 'rechtsgronden-besluit');
  irregular('rechtstreekse-verkiezing', 'rechtstreekse-verkiezingen');
  irregular('rol', 'rollen');
  irregular('tijdsinterval', 'tijdsintervallen');
  irregular('verkiezingsresultaat', 'verkiezingsresultaten');
  irregular('werkingsgebied', 'werkingsgebieden');
}
