import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | persoon/subject/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:persoon/subject/index');
    assert.ok(route);
  });
});
