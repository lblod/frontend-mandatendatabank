import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import moment from 'moment';

export default class DownloadMiniaturesComponent extends Component {
  @service store;
  @service fastboot;

  @tracked ttlFile;
  @tracked csvFile;

  constructor() {
    super(...arguments);
    this.queryCsv();
    this.queryTtl();
  }

  queryCsv() {
    const promise = this.store
      .query('export', {
        sort: '-created',
        filter: { format: 'text/turtle' },
        page: { size: 1 },
      })
      .then((files) => (this.ttlFile = files.at(0)));

    if (this.fastboot.isFastBoot) {
      this.fastboot.deferRendering(promise);
    }
  }

  queryTtl() {
    const promise = this.store
      .query('export', {
        sort: '-created',
        filter: { format: 'text/csv' },
        page: { size: 1 },
      })
      .then((files) => (this.csvFile = files.at(0)));

    if (this.fastboot.isFastBoot) {
      this.fastboot.deferRendering(promise);
    }
  }

  get ttlMetadata() {
    return `Turtle - ${this.ttlFile.filesizeMb}MB - ${momentFormat(
      this.ttlFile.created
    )}`;
  }

  get csvMetadata() {
    return `CSV - ${this.csvFile.filesizeMb}MB - ${momentFormat(
      this.csvFile.created
    )}`;
  }

  @action
  download(file) {
    if (file) window.location = `/files/${file.filename}`;
  }
}

function momentFormat(date) {
  return moment(date).format('DD/MM/YYYY HH:mm');
}
