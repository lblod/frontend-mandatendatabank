// EmberData 5.3.4 removed the "private" import paths that ember-mu-transform-helpers is using.
// We temporarily override the transforms until the issue is resolved upstream.
// TODO: Remove this after updating to a release that includes the fix: https://github.com/mu-semtech/ember-mu-transform-helpers/issues/8
import { DateTransform as BaseDateTransform } from '@ember-data/serializer/transform';

export default class DateTransform extends BaseDateTransform {
  serialize(date) {
    if (date instanceof Date) {
      return formatISODate(date);
    } else {
      return null;
    }
  }
}

function formatISODate(date) {
  let month = `${date.getMonth() + 1}`.padStart(2, '0');
  let day = `${date.getDate()}`.padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}
