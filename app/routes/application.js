import Route from '@ember/routing/route';
import { service } from '@ember/service';
import config from 'frontend-mandatendatabank/config/environment';

export default class ApplicationRoute extends Route {
  @service fastboot;
  @service plausible;

  beforeModel() {
    this.startAnalytics();
  }

  startAnalytics() {
    let { domain, apiHost } = config.plausible;

    if (
      domain !== '{{ANALYTICS_APP_DOMAIN}}' &&
      apiHost !== '{{ANALYTICS_API_HOST}}' &&
      !this.fastboot.isFastBoot
    ) {
      this.plausible.enable({
        domain,
        apiHost,
      });
    }
  }
}
