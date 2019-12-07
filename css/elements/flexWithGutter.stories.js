import { storiesOf } from "@storybook/vue";
import KApp from "@kiste/components/KApp";

const stories = storiesOf("Classes|flex-with-gutter", module);

stories.add("default", () => ({
  components: { KApp },
  template: `
    <KApp>
      <div
        class="flex-with-gutter"
      >
        <div style="background-color: greenyellow">
          First container
        </div>
        <div style="background-color: aquamarine">
          Second container
        </div>
        <div style="background-color: aqua">
          Third container
        </div>
      </div>
    </KApp>
  `
}));
