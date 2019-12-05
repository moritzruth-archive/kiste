<template>
  <nav class="k-navigation-bar" :class="{ 'show-background': showBackground, open, scrolled }">
    <div class="k-navigation-bar__toggle" @click="open = !open">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="k-navigation-bar__container-1 content">
      <span class="k-navigation-bar__title">{{ title }}</span>
      <div class="k-navigation-bar__container-2">
        <div class="k-navigation-bar__links">
          <template v-for="item in items">
            <component :is="$nuxt ? 'nuxt-link' : 'router-link'"
              v-if="item.to"
              :key="item.to"
              :to="item.to"
              @click.native.passive="open = false"
            >
              {{ item.label }}
            </component>
            <a
              v-else
              :key="item.to"
              rel="noopener"
              :href="item.href"
              @click.native.passive="open = false"
            >
              {{ item.label }}
            </a>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  @use "../css/utilities/screenSize";

  .k-navigation-bar {
    height: var(--navbar-height);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1.1rem;
    text-transform: uppercase;

    background-color: transparent;

    &.show-background {
      background-color: white;
    }

    &.scrolled {
      .k-navigation-bar__title {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .k-navigation-bar__toggle {
    display: none;
  }

  .k-navigation-bar__title {
    font-size: 1.5rem;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;

    flex-shrink: 0;
    max-width: calc(100% - 10px);

    transition: 200ms ease;
    transition-property: opacity, transform;

    opacity: 0;
    transform: translateY(10px);

    @include screenSize.notMobile {
      font-size: 2rem;
    }
  }

  .k-navigation-bar__container-1 {
    max-width: 100%;
    height: 100%;

    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .k-navigation-bar__container-2 {
    width: 100%;
  }

  .k-navigation-bar__links {
    float: right;

    a {
      display: inline-block;
      margin-left: 40px;
      position: relative;

      text-decoration: none;
      color: black;

      &::after {
        content: "";
        position: absolute;
        top: 30px;
        left: 0;
        background-color: black;
        height: 2px;
        width: 100%;

        opacity: 0;
        transition: 200ms linear opacity;
      }

      &:hover {
        &::after {
          opacity: 1;
        }
      }
    }
  }

  @include screenSize.mobile {
    .k-navigation-bar__toggle {
      display: block;

      position: relative;
      left: 30px;
      z-index: 2;

      & > span {
        display: block;

        background-color: black;

        width: 30px;
        height: 2px;

        transition: 200ms linear;
        transition-property: opacity, transform;

        &:nth-child(2) {
          margin-top: 8px;
        }

        &:nth-child(3) {
          margin-top: 8px;
        }
      }
    }

    .k-navigation-bar__container-1 {
      margin-left: 30px;
    }

    .k-navigation-bar__container-2 {
      pointer-events: none;
      background-color: white;

      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100vh;

      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: var(--navbar-height);

      opacity: 0;
      transition: 200ms ease-out opacity;
    }

    .k-navigation-bar__links {
      float: none;

      & > a {
        display: block;
        width: fit-content;
        margin: 0 auto 20px;
        font-size: 1.5rem;

        transform: translateX(-100%);
        opacity: 0;
        transition: 400ms ease-out;
        transition-property: opacity, transform;

        &:after {
          top: 35px;
        }
      }
    }

    .k-navigation-bar.open {
      .k-navigation-bar__toggle > span {
        &:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: translateY(-10px) rotate(-45deg);
        }
      }

      .k-navigation-bar__container-2 {
        pointer-events: auto;
        opacity: 1;
      }

      .k-navigation-bar__links > a {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
</style>

<script>
  export default {
    name: "NavigationBar",
    props: {
      showBackground: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      items: {
        type: Array,
        required: true
      }
    },
    data: () => ({
      open: false,
      scrollPosition: 0
    }),
    computed: {
      scrolled: vm => vm.scrollPosition > 50
    },
    mounted() {
      const scrollListener = () => {
        this.scrollPosition = window.scrollY;
      };

      window.addEventListener("scroll", scrollListener, { passive: true });

      this.$on("hook:beforeDestroy", () => {
        window.removeEventListener("scroll", scrollListener);
      });

      scrollListener();
    }
  };
</script>