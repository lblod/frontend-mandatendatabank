import Controller from '@ember/controller';
import DefaultQueryParamsMixin from 'ember-data-table/mixins/default-query-params';
import { computed } from '@ember/object';
import { isBlank } from '@ember/utils';

export default Controller.extend(DefaultQueryParamsMixin, {
  size: 20,
  filterPageSize: 100,
  sort: 'is-bestuurlijke-alias-van.achternaam',
  mandaat_id: '',
  lijst_id: '',
  bestuursorgaan: '',
  beleidsdomein_id: '',
  mandaten: computed('bestuur.id', 'filterPageSize', function() {
    return this.get('store').query('mandaat', {
      'filter[bevat-in][is-tijdsspecialisatie-van][bestuurseenheid][id]': this.get('bestuur.id'),
      'page[size]': this.get('filterPageSize')
    });
  }),
  periodes: computed('bestuur.id', 'filterPageSize', function() {
    return this.get('store').query('bestuursorgaan', {
      'filter[is-tijdsspecialisatie-van][bestuurseenheid][id]': this.get('bestuur.id'),
      'page[size]': this.get('filterPageSize')
    });
  }),
  lijsten: computed('bestuur.id', 'bestuursorgaan', 'filterPageSize', function() {
    let filter = {
      'filter[rechtstreekse-verkiezing][stelt-samen][is-tijdsspecialisatie-van][bestuurseenheid][id]': this.get('bestuur.id'),
      'page[size]': this.get('filterPageSize')
    };
    if (! isBlank(this.get('bestuursorgaan')))
      filter['filter[rechtstreekse-verkiezing][stelt-samen][id]'] = this.get('bestuursorgaan');
    return this.get('store').query('kandidatenlijst', filter);
  }),
  beleidsdomeinen: computed('bestuur.id', 'filterPageSize', function() {
    return this.get('store').query('beleidsdomein-code', {
      'filter[mandatarissen][bekleedt][bevat-in][is-tijdsspecialisatie-van][bestuurseenheid][id]': this.get('bestuur.id'),
      'page[size]': this.get('filterPageSize')
    });
  }),
  actions: {
    download(file) {
      window.location = file;
    },
    filterPeriode(periode) {
      this.set('periode', periode);
      this.set('bestuursorgaan', periode ? periode.get('id') : '');
      this.set('page', 0);
    },
    filterMandaat(mandaat) {
      this.set('mandaat', mandaat);
      this.set('mandaat_id', mandaat ? mandaat.get('id') : '');
      this.set('page', 0);
    },
    filterLijst(lijst) {
      this.set('lijst', lijst);
      this.set('lijst_id', lijst ? lijst.get('id') : '');
      this.set('page', 0);
    },
    filterBeleidsdomein(beleidsdomein) {
      this.set('beleidsdomein', beleidsdomein);
      this.set('beleidsdomein_id', beleidsdomein ? beleidsdomein.get('id') : '');
      this.set('page', 0);
    }
  }
});
