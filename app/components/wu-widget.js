import { reads } from '@ember/object/computed';
import { inject } from '@ember/service';
import Component from '@ember/component';
import postscribe from 'postscribe';
import { computed } from '@ember/object';

export default Component.extend({
  src: null,
  fastboot: inject(),
  isFastBoot: reads('fastboot.isFastBoot'),
  script: computed('src', function() {
    return `<script type="text/javascript" src="${this.src}"></script>`;
  }),
  didInsertElement() {
    this._super(...arguments);
    if( this.get("isFastBoot") ){
      postscribe('#' + this.elementId, this.script);
    }
  }
});
