import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | persoon/subject/index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:persoon/subject/index');
    assert.ok(controller);
  });
});
