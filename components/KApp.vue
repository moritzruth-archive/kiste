<template>
  <div class="k-app" :style="style">
    <slot/>
  </div>
</template>

<style lang="scss">
  @use "~kiste/css/mixins/screenSize";
  @use "~kiste/css/mixins/fillScreen";
  @use "~kiste/css/formatting";
  @use "~kiste/css/elements";

  *, *::before, *::after {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  html, body, .k-app {
    @include fillScreen.fillScreen;

    z-index: 0;

    font-size: 16px;
  }

  .k-app {
    @include fillScreen.fillScreen;

    background: var(--colors-background);
    color: var(--colors-background-c);

    overflow: auto;
    position: relative;

    ::selection {
      background-color: var(--colors-background-a);
    }
  }
</style>

<script>
  import { getObjectAsCSSVariables } from "kiste/js/theming";
  import { toModifierClasses } from "kiste/js/toModifierClasses";

  export default {
    name: "KApp",
    computed: {
      style() {
        return getObjectAsCSSVariables(this.$kiste.fullTheme);
      }
    }
  }
</script>
