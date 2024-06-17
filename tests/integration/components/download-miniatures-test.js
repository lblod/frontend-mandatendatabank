import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | download-miniatures', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{download-miniatures}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#download-miniatures}}
        template block text
      {{/download-miniatures}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
