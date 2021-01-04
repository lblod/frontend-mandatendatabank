import Model, { attr } from '@ember-data/model';

export default class ContactPunt extends Model {
  @attr('string') land;
  @attr('string') gemeente;
  @attr('string') adres;
  @attr('string') postcode;
  @attr('email') email;
  @attr('phone') telephone;
  @attr('phone') fax;
  @attr('string') website;
}
