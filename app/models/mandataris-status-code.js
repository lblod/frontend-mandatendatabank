import Model, { attr } from '@ember-data/model';

export default class MandatarisStatusCode extends Model {
   @attr('string') label;
}
