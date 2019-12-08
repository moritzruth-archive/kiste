import { storiesOf } from "@storybook/vue";

import KApp from "./KApp";
import KFooter from "./KFooter";

const stories = storiesOf("Components|KFooter", module);

stories.add("default", () => ({
  components: { KApp, KFooter },
  template: `
    <KApp>
      <div class="content formatted">
        <h1>Some content</h1>
      </div>
      <KFooter
        :items="[
          { href: 'https://example.com', label: 'Legal Notice' },
          { href: 'https://example.com', label: 'Privacy Policy' }
        ]"
      />
    </KApp>
  `
}));

stories.add("show background after scroll", () => ({
  components: { KApp, KNavigationBar },
  template: `
    <KApp>
      <KNavigationBar title="Home" background-after-scroll :items="[{ label: 'Home', href: '#' }, { label: 'Test', href: '#' }]"/>
      <div style="background-color: red; position: absolute; top: 0; left: 0; right: 0; height: 300px"></div>
      <div style="height: 100vh"></div>
    </KApp>
  `
}));
