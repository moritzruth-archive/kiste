<style scoped lang="scss">
  .k-button {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 8px 15px;
    border-radius: 4px;

    height: 42px;

    background-color: transparent;
    border: none;
    text-decoration: none;
    font: inherit;
    color: inherit;
    cursor: default;

    transition: 140ms ease background-color;
    &:hover, &:focus {
      background: var(--x-hover-color);
    }

    &[data-disabled], &[data-loading] {
      &::before {
        opacity: 0.6;
      }
    }

    &[data-loading] {
      &::after {
        opacity: 1;
      }
    }
  }

  .k-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: var(--colors-background);
    opacity: 0;
    transition: 100ms linear opacity;
  }

  .k-button::after {
    $size: 20px;

    pointer-events: none;
    opacity: 0;
    transition: 100ms linear opacity;

    content: "";
    position: absolute;
    top: calc(50% - #{$size} / 2 + 2px);
    left: calc(50% - #{$size} / 2);
    width: $size;
    height: $size;

    border: 2px solid var(--colors-background-c);
    border-left-color: transparent;
    border-radius: 50%;

    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0)
    }

    to {
      transform: rotate(360deg);
    }
  }

  .k-button__text {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .k-button__prefix > * {
    position: relative;
    top: 2px;
    margin-right: 6px;
    width: 20px;
  }

  .k-button__suffix > * {
    position: relative;
    top: 2px;
    margin-left: 8px;
    width: 20px;
  }
</style>

<script>
  import chroma from "chroma-js";
  import { DEFAULT_KEY } from "kiste/js/theming";

  export default {
    name: "GButton",
    props: {
      to: {
        type: String,
        default: ""
      },
      href: {
        type: String,
        default: ""
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isExternalLink: vm => Boolean(vm.href),
      isInternalLink: vm => Boolean(vm.to)
    },
    methods: {
      onClick(e) {
        if (!this.disabled && !this.loading) {
          this.$emit("click", e);
        }
      }
    },
    render(h) {
      const children = [
        h("div", {
          class: "k-button__prefix"
        }, this.$slots.prefix),
        h("div", {
          class: "k-button__text"
        }, this.$slots.default),
        h("div", {
          class: "k-button__suffix"
        }, this.$slots.suffix)
      ];

      const baseOptions = {
        class: "k-button",
        style: {
          "--x-hover-color": `rgba(${chroma(this.$kiste.fullTheme.colors.blue[DEFAULT_KEY]).alpha(0.1).rgba().join()})`
        },
        on: {
          click: this.onClick
        },
        directives: [
          {
            name: "ripple",
            modifiers: {
              click: true,
              400: true
            },
            value: "rgba(0, 0, 0, 0.2)"
          }
        ],
        attrs: {
          "data-loading": this.loading,
          "data-disabled": this.disabled,
          tabindex: this.disabled || this.loading ? "-1" : "0"
        }
      };

      if (this.isInternalLink) {
        return h("nuxt-link", {
          ...baseOptions,
          props: {
            to: this.to
          }
        }, children);
      } else if (this.isExternalLink) {
        return h("a", {
          ...baseOptions,
          attrs: {
            ...baseOptions.attrs,
            href: this.href,
            rel: "noopener"
          }
        }, children);
      } else {
        return h("button", {
          ...baseOptions,
        }, children);
      }
    }
  };
</script>
