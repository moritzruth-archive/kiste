import { storiesOf } from "@storybook/vue";

import KApp from "./KApp";
import KNavigationBar from "./KNavigationBar";

const stories = storiesOf("Components|KNavigationBar", module);

stories.add("default", () => ({
  components: { KApp, KNavigationBar },
  template: `
    <KApp>
      <KNavigationBar title="Home"/>
      <div style="height: 100vh"></div>
    </KApp>
  `
}));

stories.add("show background after scroll", () => ({
  components: { KApp, KNavigationBar },
  template: `
    <KApp>
      <KNavigationBar title="Home" background-after-scroll/>
      <div style="background-color: red; position: absolute; top: 0; left: 0; right: 0; height: 300px"></div>
      <div style="height: 100vh"></div>
    </KApp>
  `
}));
