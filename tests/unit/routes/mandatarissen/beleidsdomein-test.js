import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mandatarissen/beleidsdomein', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mandatarissen/beleidsdomein');
    assert.ok(route);
  });
});
