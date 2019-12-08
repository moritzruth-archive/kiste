<template>
  <footer class="content k-footer">
    <template
      v-for="item in items"
    >
      <component
        v-if="item.to"
        :key="item.label"
        :is="isNuxt() ? 'nuxt-link' : 'router-link'"
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
    color: #606060;
    text-decoration: none;
    flex-shrink: 0;

    margin: 10px;

    transition: 100ms linear color;
    &:hover {
      color: var(--colors-link);
    }
  }
</style>

<script>
  import { isNuxt } from "kiste/js/utils/isNuxt";

  export default {
    name: "KFooter",
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    methods: {
      isNuxt
    }
  };
</script>
