<style scoped lang="scss">
  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 8px 15px;
    border-radius: 4px;

    height: 42px;

    text-decoration: none;
    color: inherit;
    cursor: default;

    transition: 140ms ease background-color;
    &:hover {
      background: var(--x-hover-color);
    }
  }

  .button__text {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .button__prefix > * {
    position: relative;
    top: 2px;
    margin-right: 6px;
    width: 20px;
  }

  .button__suffix > * {
    position: relative;
    top: 2px;
    margin-left: 8px;
    width: 20px;
  }
</style>

<script>
  import chroma from "chroma-js";
  import { DEFAULT_KEY } from "kiste/js/utils/theming";

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
      }
    },
    computed: {
      isExternalLink: vm => Boolean(vm.href),
      isInternalLink: vm => Boolean(vm.to)
    },
    methods: {
      onClick(e) {
        this.$emit("click", e);
      }
    },
    render(h) {
      const children = [
        h("div", {
          class: "button__prefix"
        }, this.$slots.prefix),
        h("div", {
          class: "button__text"
        }, this.$slots.default),
        h("div", {
          class: "button__suffix"
        }, this.$slots.suffix)
      ];

      const baseOptions = {
        class: "button",
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
        ]
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
            href: this.href,
            rel: "noopener"
          }
        }, children);
      } else {
        return h("div", {
          ...baseOptions,
          attrs: {
            role: "button"
          }
        }, children);
      }
    }
  };
</script>
