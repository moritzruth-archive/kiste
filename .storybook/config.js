import { configure } from '@storybook/vue';
import Vue from "vue";
import Kiste from "../plugin";

// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.stories\.js$/), module);
configure(require.context('../css', true, /\.stories\.js$/), module);

Vue.use(Kiste, {
  navigationItems: [
    {
      label: "Home",
      href: "#"
    },
    {
      label: "Page 2",
      href: "#"
    },
    {
      label: "Page 3",
      href: "#"
    }
  ],
  footerItems: [
    {
      label: "Legal Notice",
      href: "#"
    },
    {
      label: "Privacy Policy",
      href: "#"
    }
  ]
});
