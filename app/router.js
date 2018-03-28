import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bestuur', {path: 'bestuur/:id'}, function() {
  });
  this.route('mandatarissen', function() {
    this.route('fractie', { path: '/fractie/:fractie_id' });
    this.route('bestuursfunctie', { path: '/bestuursfunctie/:bestuursfunctie_id' });
    this.route('orgaan',  { path: '/orgaan/:orgaan_id' });
    this.route('beleidsdomein', { path: '/beleidsdomein/:beleidsdomein_id' });
    this.route('persoon', { path: '/persoon/:persoon_id' });
  });
});

export default Router;
