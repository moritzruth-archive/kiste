import _mapValues from "lodash.mapvalues";

export function mapValuesDeep(object, iteratee) {
  return _mapValues(object, (value, key) => {
    if (typeof value === "object") {
      return mapValuesDeep(value, iteratee);
    } else {
      return iteratee(value, key, object);
    }
  })
}
