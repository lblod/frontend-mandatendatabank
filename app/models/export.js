import Model, { attr } from '@ember-data/model';

export default class ExportModel extends Model {
  @attr filename;
  @attr format;
  @attr filesize;
  @attr('datetime') created;

  get filesizeMb() {
    return this.filesize
      ? +(Math.round(this.filesize / 1000 / 1000 + 'e+1') + 'e-1')
      : 0;
  }
}
