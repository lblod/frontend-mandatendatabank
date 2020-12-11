import Component from '@glimmer/component';
import { action, computed } from '@ember/object';

export default class DownloadMiniaturesComponent extends Component {

  constructor() {
    super(...arguments);
    this.queryCsv()
    this.queryTtl()
  }

  queryCsv(){
    this.store.query('export', {
      sort: '-created',
      filter: { format: 'text/turtle' },
      page: { size: 1 }
    }).then((files) => this.set('ttlFile', files.get('firstObject')));
  }

  queryTtl(){
    this.store.query('export', {
      sort: '-created',
      filter: { format: 'text/csv' },
      page: { size: 1 }
    }).then((files) => this.set('csvFile', files.get('firstObject')));
  }

  @computed('ttlFile.{filesizeMb,createdFormatted}', 'csvFile.{filesizeMb,createdFormatted}')
  get ttlMetadata(){
    return `Turtle - ${this.ttlFile.filesizeMb}MB - ${this.ttlFile.createdFormatted}`;
  }

  get csvMetadata(){
    return `CSV - ${this.csvFile.filesizeMb}MB - ${this.csvFile.createdFormatted}`;
  }

  @action
  download(file) {
    if (file)
      window.location = `/files/${file.get('filename')}`;
    }
  }
