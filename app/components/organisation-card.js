import Component from '@ember/component';

export default Component.extend({
  classNames: ['info-tile','info-tile--m', 'info-tile--center'],
  classNameBindings: ['isSelected:selected-organisation-card'],
  isSelected: false,
  actions: {
    select(organisationId){
      this.onSelect(organisationId);
    }
  }
});
