import DS from 'ember-data';
import DataTableSerializerMixin from 'ember-data-table/mixins/serializer';
import { reads } from '@ember/object/computed';
import { inject } from '@ember/service';

export default DS.JSONAPISerializer.extend(DataTableSerializerMixin, {
  fastboot: inject(),
  isFastBoot: reads('fastboot.isFastBoot'),

  // From DataTableSerializerMixin
  createPageMeta(data) {
    let meta = {};

    Object.keys(data).forEach(type => {
      const link = data[type];
      meta[type] = {};

      let query;
      if( this.get("isFastBoot") ){ // isFastBoot is available in the JSONAPISerializer
        query = ""; // TODO: I have no clue what this should actually return, this is just a workaround.
      } else {
        let a = document.createElement('a');
        a.href = link;
        query = a.search.slice(1);
        a = null;
      }

      query.split('&').forEach(pairs => {
        const [param, value] = pairs.split('=');

        if (param === 'page[number]') {
          meta[type].number = parseInt(value);
        } else if (param === 'page[size]') {
          meta[type].size = parseInt(value);
        }

      });
    });

    return meta;
  }
});
