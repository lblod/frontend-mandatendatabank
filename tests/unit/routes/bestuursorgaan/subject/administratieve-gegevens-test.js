import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bestuursorgaan/subject/administratieve-gegevens', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bestuursorgaan/subject/administratieve-gegevens');
    assert.ok(route);
  });
});
