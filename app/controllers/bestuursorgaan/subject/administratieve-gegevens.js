import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';
export default Controller.extend({
  positieSort: Object.freeze(['rol.label']),
  sortedPosities: sort('model.posities', 'positieSort')
});
