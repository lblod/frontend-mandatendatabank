import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['grid'],
  store: service(),
  init() {
    this._super(...arguments);
    this.fetchMetadata('text/turtle', 'ttlFile');
    this.fetchMetadata('text/csv', 'csvFile');
  },
  async fetchMetadata(mimeType, field) {
    try {
      const ttlFiles = await this.store.query('export', {
        sort: '-created',
        filter: { format: mimeType },
        page: { size: 1 }
      });
      this.set(field, ttlFiles.firstObject);
    }
    catch(e) {
      // not handling it at the moment
    }
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
