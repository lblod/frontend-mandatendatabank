import Model, { attr, belongsTo } from '@ember-data/model';

export default class Tijdsinterval extends Model {
  @attr('string') aantalNaamstemmen;
  @attr('string') plaatsRangorde;
  @belongsTo('persoon', { inverse: null }) isResultaatVan;
  @belongsTo('kandidatenlijst', { inverse: null }) isResultaatVoor;
  @belongsTo('verkiezingsresultaat-gevolg-code', { inverse: null }) gevolg;
}
