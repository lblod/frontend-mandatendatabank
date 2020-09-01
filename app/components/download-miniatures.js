import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  store: service(),
  init() {
    this._super(...arguments);
    this.store.query('export', {
      sort: '-created',
      filter: { format: 'text/turtle' },
      page: { size: 1 }
    }).then((files) => this.set('ttlFile', files.get('firstObject')));
    this.store.query('export', {
      sort: '-created',
      filter: { format: 'text/csv' },
      page: { size: 1 }
    }).then((files) => this.set('csvFile', files.get('firstObject')));
  },
  ttlMetadata: computed('ttlFile', function() {
    return `Turtle - ${this.get('ttlFile.filesizeMb')}MB - ${this.get('ttlFile.createdFormatted')}`;
  }),
  csvMetadata: computed('csvFile', function() {
    return `CSV - ${this.get('csvFile.filesizeMb')}MB - ${this.get('csvFile.createdFormatted')}`;
  }),
  actions: {
    download(file) {
      if (file)
        window.location = `/files/${file.get('filename')}`;
    }
  }
});
