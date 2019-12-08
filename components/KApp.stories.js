import { storiesOf } from "@storybook/vue";

import KApp from "./KApp";
import KNavigationBar from "./KNavigationBar";
import KExternalLink from "./KExternalLink";
import KFooter from "./KFooter";

const stories = storiesOf("Components|KApp", module);

const template = `
  <KApp>
    <KNavigationBar title="Home" show-background/>
    <div class="content formatted">
      <h1>Home</h1>
      <div style="height: 80vh"></div>
      <p>Paragraph 1</p>
      <p>
        <KExternalLink href="#">External Link</KExternalLink>
      </p>
    </div>
    <KFooter/>
  </KApp>
`;

stories.add("default theme", () => ({
  components: { KApp, KNavigationBar, KExternalLink, KFooter },
  template
}));

stories.add("dark theme", () => ({
  components: { KApp, KNavigationBar, KExternalLink, KFooter },
  mounted() {
    this.$kiste.theme = { colors: { background: 'black/white/#a0a0a0' }};
  },
  beforeDestroy() {
    this.$kiste.resetTheme();
  },
  template,
}));
