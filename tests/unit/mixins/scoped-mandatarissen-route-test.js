import EmberObject from '@ember/object';
import ScopedMandatarissenRouteMixin from 'frontend-mandatendatabank/mixins/scoped-mandatarissen-route';
import { module, test } from 'qunit';

module('Unit | Mixin | scoped-mandatarissen-route', function () {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ScopedMandatarissenRouteObject = EmberObject.extend(
      ScopedMandatarissenRouteMixin
    );
    let subject = ScopedMandatarissenRouteObject.create();
    assert.ok(subject);
  });
});
