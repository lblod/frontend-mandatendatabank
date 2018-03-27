import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mandatarissen/fractie', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mandatarissen/fractie');
    assert.ok(route);
  });
});
