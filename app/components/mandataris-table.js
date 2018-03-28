import Component from '@ember/component';
import { equal } from '@ember/object/computed';

export default Component.extend({
  scope: null,
  isScopeBeleidsdomein: equal('scope', 'beleidsdomein'),
  isScopeBestuursfunctie: equal('scope', 'bestuursfunctie'),
  isScopeOrgaan: equal('scope', 'orgaan'),
  isScopePersoon: equal('scope', 'persoon')
});
