import _defaultsDeep from "lodash.defaultsdeep";
import _mapValues from "lodash.mapvalues";
import _kebabCase from "lodash.kebabcase";
import { mapValuesDeep } from "kiste/js/utils/mapValuesDeep";

const DEFAULT_THEME = {
  colors: {
    background: "white/black/#0e0e0e",
    blue: "#39a8f3/black/#3695d8",
    green: "#2ECC71/black/#2ab662",
    link: "~blue"
  },
  contentWidth: "1000px",
  contentPadding: "20px",
  gutterSize: "40px"
};

export const DEFAULT_KEY = Symbol("Default value of a path");

export function getFullTheme(theme) {
  let fullTheme = _defaultsDeep({}, theme, DEFAULT_THEME);

  fullTheme = mapValuesDeep(fullTheme, (value, key, object) => {
    if (typeof value === "string" && value.startsWith("~")) {
      let currentValue = value;

      do {
        if (!(typeof currentValue === "string" && currentValue.startsWith("~"))) {
          return currentValue;
        }

        currentValue = object[currentValue.slice(1)];

        if (currentValue === undefined) {
          throw new Error(`Invalid theme reference: ${value}`);
        } else if (currentValue === value) {
          throw new Error(`Recursive theme reference: ${value}`);
        }
      } while(true);
    } else {
      return value;
    }
  });

  fullTheme.colors = _mapValues(fullTheme.colors, value => {
    if (typeof value === "string") {
      const parts = value.split("/");

      return {
        [DEFAULT_KEY]: parts[0],
        // contrast
        c: parts[1],
        // alternative
        a: parts[2]
      };
    } else {
      return value;
    }
  });

  return fullTheme;
}

export function getObjectAsCSSVariables(object) {
  const BASE = Symbol();
  const variables = {};
  const currentPath = [];

  const recursive = (key, value) => {
    if (key !== BASE) currentPath.push(_kebabCase(key));

    if (typeof value === "object") {
      for (key of [...Object.getOwnPropertyNames(value), ...Object.getOwnPropertySymbols(value)]) {
        recursive(key, value[key]);
      }
    } else {
      const variablePath = key === DEFAULT_KEY ? currentPath.slice(0, -1) : currentPath;

      variables["--" + variablePath.join("-")] = value;
    }

    if (key !== BASE) currentPath.pop();
  };

  recursive(BASE, object);

  return variables;
}
