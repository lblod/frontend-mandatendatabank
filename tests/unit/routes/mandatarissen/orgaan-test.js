import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mandatarissen/orgaan', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mandatarissen/orgaan');
    assert.ok(route);
  });
});
