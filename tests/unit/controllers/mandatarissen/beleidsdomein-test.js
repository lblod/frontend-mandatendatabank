import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | mandatarissen/beleidsdomein', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:mandatarissen/beleidsdomein');
    assert.ok(controller);
  });
});
