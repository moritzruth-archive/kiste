import { storiesOf } from "@storybook/vue";

import KApp from "./KApp";
import KFooter from "./KFooter";
import KNavigationBar from "./KNavigationBar";

const stories = storiesOf("Components|KFooter", module);

stories.add("default", () => ({
  components: { KApp, KFooter, KNavigationBar },
  template: `
    <KApp>
      <KNavigationBar/>
      <div class="content formatted">
        <h1>Some content</h1>
      </div>
      <KFooter/>
    </KApp>
  `
}));
