import DataTableSerializerMixin from 'ember-data-table/mixins/serializer';
import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer.extend(DataTableSerializerMixin) {
}
