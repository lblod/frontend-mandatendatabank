import EmberRouter from '@ember/routing/router';
import config from 'frontend-mandatendatabank/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('bestuursorgaan', function () {
    this.route('subject', { path: '/:bestuursorgaan_id' }, function () {
      //      this.route('administratieve-gegevens');
    });
  });
  this.route('persoon', function () {
    this.route('subject', { path: '/:persoon_id' }, function () {});
  });
  this.route('contact');

  this.route('route-not-found', {
    path: '/*wildcard',
  });

  this.route('legaal', function () {
    this.route('disclaimer');
    this.route('cookieverklaring');
    this.route('toegankelijkheidsverklaring');
  });
});
