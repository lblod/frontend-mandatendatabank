import Controller from '@ember/controller';
import DefaultQueryParamsMixin from 'ember-data-table/mixins/default-query-params';
import { computed } from '@ember/object';
import { isBlank } from '@ember/utils';

export default Controller.extend(DefaultQueryParamsMixin, {
  size: 20,
  dropdownPageSize: 10,
  sort: 'is-bestuurlijke-alias-van.achternaam',

  // selected filter values
  mandaatId: '',
  lijstId: '',
  bestuursorgaanId: '',
  beleidsdomeinId: '',

  // filter options
  mandaten: computed('bestuur.id', 'dropdownPageSize', function() {
    return this.get('store').query('mandaat', {
      'filter[bevat-in][is-tijdsspecialisatie-van][bestuurseenheid][id]': this.get('bestuur.id'),
      include: 'bestuursfunctie',
      'page[size]': this.get('dropdownPageSize')
    });
  }),
  bestuursorganen: computed('bestuur.id', 'dropdownPageSize', function() {
    return this.get('store').query('bestuursorgaan', {
      'filter[is-tijdsspecialisatie-van][bestuurseenheid][id]': this.get('bestuur.id'),
      'page[size]': this.get('dropdownPageSize')
    });
  }),
  beleidsdomeinen: computed('bestuur.id', 'dropdownPageSize', function() {
    return this.get('store').query('beleidsdomein-code', {
      'filter[mandatarissen][bekleedt][bevat-in][is-tijdsspecialisatie-van][bestuurseenheid][id]': this.get('bestuur.id'),
      'page[size]': this.get('dropdownPageSize')
    });
  }),
  lijsten: computed('bestuur.id', 'bestuursorgaanId', 'dropdownPageSize', function() {
    const filter = {
      'filter[rechtstreekse-verkiezing][stelt-samen][is-tijdsspecialisatie-van][bestuurseenheid][id]': this.get('bestuur.id'),
      'page[size]': this.get('dropdownPageSize')
    };
    if (! isBlank(this.get('bestuursorgaanId')))
      filter['filter[rechtstreekse-verkiezing][stelt-samen][id]'] = this.get('bestuursorgaanId');
    return this.get('store').query('kandidatenlijst', filter);
  }),

  actions: {
    download(file) {
      window.location = file;
    },
    filter(property, value) {
      this.set(property, value);
      this.set(`${property}Id`, value ? value.get('id') : '');
      this.set('page', 0);
    }
  }
});
