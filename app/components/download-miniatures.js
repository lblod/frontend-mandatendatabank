import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DownloadMiniaturesComponent extends Component {
  @service store;
  
  @tracked ttlFile;
  @tracked csvFile;

  constructor() {
    super(...arguments);
    this.queryCsv()
    this.queryTtl()
  }

  queryCsv(){
    console.log("running")
    this.store.query('export', {
      sort: '-created',
      filter: { format: 'text/turtle' },
      page: { size: 1 }
    }).then((files) => 
      this.ttlFile = files.get('firstObject')
    )
  }

  queryTtl(){
    this.store.query('export', {
      sort: '-created',
      filter: { format: 'text/csv' },
      page: { size: 1 }
    }).then((files) =>
      this.csvFile = files.get('firstObject')
    )
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
