import Model, { attr } from '@ember-data/model';

export default class Lijsttype extends Model {
  @attr('string') label;
}
