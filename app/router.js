import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bestuursorgaan', function() {
    this.route('subject', { path: '/:bestuursorgaan_id' }, function() {
      this.route('administratieve-gegevens');
    });
  });
  this.route('persoon', function() {
    this.route('subject', { path: '/:persoon_id' }, function() {});
  });
});

export default Router;
