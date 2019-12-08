<template>
  <footer class="content k-footer">
    <template v-for="item in items">
      <component
        v-if="item.to"
        :key="item.label"
        :is="isNuxt ? 'nuxt-link' : 'router-link'"
        class="k-footer__link"
        :to="item.to"
      >
        {{ item.label }}
      </component>
      <a
        v-else-if="item.href"
        :key="item.label"
        class="k-footer__link"
        :href="item.href"
      >
        {{ item.label }}
      </a>
    </template>
  </footer>
</template>

<style scoped lang="scss">
  @use "~kiste/css/mixins/screenSize";

  .k-footer {
    margin-bottom: 40px;

    position: sticky;
    top: 100vh;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @include screenSize.mobile {
      flex-direction: column;
    }
  }

  .k-footer__link {
    text-decoration: none;
    flex-shrink: 0;
    margin: 10px;

    opacity: 0.6;
    color: var(--colors-background-c);

    transition: 120ms linear;
    transition-property: opacity, color;
    &:hover {
      color: var(--colors-link);
      opacity: 1;
    }
  }
</style>

<script>
  import { isNuxt } from "kiste/js/isNuxt";

  export default {
    name: "KFooter",
    computed: {
      items: vm => vm.$kiste.footerItems,
      isNuxt
    }
  };
</script>
