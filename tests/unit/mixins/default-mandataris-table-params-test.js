import EmberObject from '@ember/object';
import DefaultMandatarisTableParamsMixin from 'frontend-mandatendatabank/mixins/default-mandataris-table-params';
import { module, test } from 'qunit';

module('Unit | Mixin | default-mandataris-table-params', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let DefaultMandatarisTableParamsObject = EmberObject.extend(DefaultMandatarisTableParamsMixin);
    let subject = DefaultMandatarisTableParamsObject.create();
    assert.ok(subject);
  });
});
