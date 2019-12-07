import { storiesOf } from "@storybook/vue";
import KApp from "@kiste/components/KApp";

const stories = storiesOf("Classes|fill-screen", module);

stories.add("default", () => ({
  components: { KApp },
  template: `
    <KApp>
      <div
        class="fill-screen"
        style="background-color: red; display: flex; justify-content: center; align-items:  center"
      >
        <p>
          This div fills the whole available screen
        </p>
      </div>
    </KApp>
  `
}));
