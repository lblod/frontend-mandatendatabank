import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service fastboot;

  constructor() {
    super(...arguments);

    if (this.fastboot.isFastBoot && window.BACKEND_URL) {
      this.host = window.BACKEND_URL;
    }
  }

  ajax(url, method) {
    if (method === 'POST') return super.ajax(...arguments);

    return retryOnError(super.ajax.bind(this), arguments);
  }
}

async function retryOnError(ajax, ajaxArgs, retryCount = 0) {
  const MAX_RETRIES = 5;

  try {
    return await ajax(...ajaxArgs);
  } catch (error) {
    if (retryCount < MAX_RETRIES) {
      await sleep(250 * (retryCount + 1));
      return retryOnError(ajax, ajaxArgs, retryCount + 1);
    } else {
      throw error;
    }
  }
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(() => resolve(true), time));
}
