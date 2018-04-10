import Component from '@ember/component';

export default Component.extend({
  classNames: ['info-tile','info-tile--m', 'info-tile--center', 'info-tile--v-center','grid--equal-height__item'],
  classNameBindings: ['isSelected:selected-organisation-card'],
  isSelected: false,
  actions: {
    select(organisationId){
      this.get("onSelect")(organisationId);
    }
  }
});
