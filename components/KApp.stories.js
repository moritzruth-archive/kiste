import { storiesOf } from "@storybook/vue";

import KApp from "./KApp";
import KNavigationBar from "./KNavigationBar";
import KExternalLink from "./KExternalLink";
import KFooter from "./KFooter";

const stories = storiesOf("Components|KApp", module);

const template = `
  <KApp>
    <KNavigationBar title="Home" show-background :items="[{ label: 'Home', href: '#' }]"/>
    <div class="content formatted">
      <h1>Home</h1>
      <div style="height: 150vh"></div>
      <p>Paragraph 1</p>
      <p>
        <KExternalLink href="#">External Link</KExternalLink>
      </p>
    </div>
    <KFooter
      :items="[
        { href: 'https://example.com', label: 'Legal Notice' },
        { href: 'https://example.com', label: 'Privacy Policy' }
      ]"
    />
  </KApp>
`;

stories.add("default theme", () => ({
  components: { KApp, KNavigationBar, KExternalLink, KFooter },
  template
}));

stories.add("dark theme", () => ({
  components: { KApp, KNavigationBar, KExternalLink, KFooter },
  mounted() {
    this.$kiste.theme = { colors: { background: 'black/white' }};
  },
  beforeDestroy() {
    this.$kiste.resetTheme();
  },
  template,
}));
