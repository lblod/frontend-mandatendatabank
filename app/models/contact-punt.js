import Model, { attr } from '@ember-data/model';

export default class ContactPunt extends Model {
  @attr land;
  @attr gemeente;
  @attr adres;
  @attr postcode;
  @attr('email') email;
  @attr('phone') telephone;
  @attr('phone') fax;
  @attr website;
}
