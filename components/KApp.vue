<template>
  <div class="k-app" :class="classes" :style="style">
    <slot/>
  </div>
</template>

<style lang="scss">
  @use "~@kiste/css/mixins/screenSize";
  @use "~@kiste/css/mixins/fillScreen";
  @use "~@kiste/css/formatting";
  @use "~@kiste/css/elements";

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

    &.x-has-navigation-bar {
      padding-top: var(--x-navbar-height);
    }
  }
</style>

<script>
  import { getFullTheme, getObjectAsCSSVariables } from "@kiste/js/utils/theming";
  import { toModifierClasses } from "@kiste/js/utils/toModifierClasses";

  export default {
    name: "KApp",
    props: {
      theme: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      fullTheme() {
        return getFullTheme(this.theme);
      },
      style() {
        return getObjectAsCSSVariables(this.fullTheme);
      },
      classes() {
        const { hasNavigationBar } = this.$kiste;

        return toModifierClasses({
          hasNavigationBar
        });
      },
      hasNavigationBar: vm => vm.$kiste.hasNavigationBar
    }
  }
</script>
