import _kebabCase from "lodash.kebabcase";

export function toModifierClasses(classes) {
  return Object.entries(classes)
    .filter(([key, value]) => Boolean(value))
    .map(([key]) => "x-" + _kebabCase(key));
}
