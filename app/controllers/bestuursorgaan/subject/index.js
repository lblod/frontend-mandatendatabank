import Controller from '@ember/controller';

export default class BestuursorgaanSubjectIndexController extends Controller {
  sort = 'is-bestuurlijke-alias-van.achternaam';
  page = 0;
  size = 20;
}
