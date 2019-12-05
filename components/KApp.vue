<template>
  <div class="k-app" :style="style">
    <slot/>
  </div>
</template>

<style scoped lang="scss">

</style>

<script>
  import _defaultsDeep from "lodash.defaultsdeep";
  import _mapValues from "lodash.mapvalues";
  import _kebabCase from "lodash.kebabcase";

  const THEME_DEFAULTS = {
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

  export default {
    name: "KApp",
    props: {
      theme: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      normalizedTheme() {
        const normalizedTheme = _defaultsDeep({}, this.theme, THEME_DEFAULTS);

        normalizedTheme.colors = _mapValues(normalizedTheme.colors, value => {
          if (typeof value === "string" && !value.startsWith("~")) {
            const parts = value.split("/");

            return {
              // background
              b: parts[0],
              // darker
              f: parts[1],
              // alternative
              a: parts[2]
            };
          } else {
            return value;
          }
        });

        return normalizedTheme;
      },
      style() {
        return this.toCSSVariables(this.normalizedTheme);
      }
    },
    methods: {
      toCSSVariables(object) {
        const BASE = Symbol();
        const variables = {};
        const currentPath = [];

        const recursive = (key, value) => {
          if (key !== BASE) currentPath.push(_kebabCase(key));

          if (typeof value === "object") {
            Object.entries(value).forEach(entry => recursive(...entry));
          } else {
            let newValue;

            if (typeof value === "string" && value.startsWith("~")) {
              console.log("--" + currentPath.slice(0, -1).join("-") + "-" + value.slice(1));
              const newValue = variables["--" + currentPath.slice(0, -1).join("-") + "-" + value.slice(1)];

              if (newValue === undefined) {
                throw new Error("Invalid theme reference: " + value);
              }
            } else {
              newValue = value;
            }

            variables["--" + currentPath.join("-")] = newValue;
          }

          if (key !== BASE) currentPath.pop();
        };

        recursive(BASE, object);

        return variables;
      }
    }
  }
</script>
