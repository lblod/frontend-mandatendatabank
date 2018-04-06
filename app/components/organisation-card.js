import Component from '@ember/component';

export default Component.extend({
  actions: {
    select(organisationId){
      this.get("onSelect")(organisationId);
    }
  }
});
