import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['isSelected:selected-organisation-card'],
  isSelected: false,
  actions: {
    select(organisationId){
      this.onSelect(organisationId);
    }
  }
});
