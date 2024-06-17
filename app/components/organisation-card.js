import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class OrganisationCardComponent extends Component {
  @action
  select(organisationId) {
    this.args.onSelect(organisationId);
  }
}
