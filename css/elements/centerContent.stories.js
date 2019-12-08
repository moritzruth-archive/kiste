import { storiesOf } from "@storybook/vue";
import KApp from "kiste/components/KApp";

const stories = storiesOf("Classes|center-content", module);

stories.add("default", () => ({
  components: { KApp },
  template: `
    <KApp>
      <div class="center-content fill-screen">
        <p>
          This element is centered horizontally and vertically
        </p>
      </div>
    </KApp>
  `
}));
