import Ember from 'ember';
import injectScript from 'ember-inject-script';
import { reads } from '@ember/object/computed';
import { inject } from '@ember/service';

// TODO: disabled browser-update script.  This should be conditional
// on fastboot and ported to
// https://github.com/BryanCrotaz/ember-cli-browser-update
// Check
// https://github.com/BryanCrotaz/ember-cli-browser-update/issues/7

export default Ember.Service.extend(Ember.Evented, {
  fastboot: inject(),
  isFastBoot: reads('fastboot.isFastBoot'),

  inject: function () {
    if( !this.get("isFastBoot") ){
      var config = this.get('_config');
      window.$buoop = config;
      this._injectAfterDelay(config.delay);
    }
  },

  show: function (infos) {
    this.trigger('show', infos);
  },

  click: function (infos) {
    this.trigger('click', infos);
  },

  close: function (infos) {
    this.trigger('close', infos);
  },

  _injectAfterDelay: function (delay) {
    delay = delay || 100;
    Ember.run.later(this, function () {
      // inject the browser update script
      var url = "https://browser-update.org/update.js";
      injectScript(url);
    }, delay);
  },

  _config: Ember.computed(function () {
    var config = this.get('config');
    // send config to browser-update script as global variable
    config.vs = config.vs || {i: 9, f: 2, o: 9.63, s: 2, c: 10};
    config.onshow = this.show.bind(this);
    config.onclick = this.click.bind(this);
    config.onclose = this.close.bind(this);
    return config;
  })
});
