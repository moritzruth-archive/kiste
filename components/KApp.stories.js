import { storiesOf } from "@storybook/vue";

import KApp from "./KApp";
import KNavigationBar from "./KNavigationBar";
import KExternalLink from "./KExternalLink";

const stories = storiesOf("Components|KApp", module);

const template = `
  <KApp :theme="$options.theme">
    <KNavigationBar title="Home" show-background :items="[{ label: 'Home', href: '#' }]"/>
    <div class="content formatted">
      <h1>Home</h1>
      <div style="height: 150vh"></div>
      <p>Paragraph 1</p>
      <p>
        <KExternalLink href="#">External Link</KExternalLink>
      </p>
    </div>
  </KApp>
`;

stories.add("light theme", () => ({
  components: { KApp, KNavigationBar, KExternalLink },
  theme: { colors: { background: 'white/black' }},
  template
}));

stories.add("dark theme", () => ({
  components: { KApp, KNavigationBar, KExternalLink },
  theme: { colors: { background: 'black/white' }},
  template
}));
