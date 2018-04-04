import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | persoon/subject', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:persoon/subject');
    assert.ok(route);
  });
});
