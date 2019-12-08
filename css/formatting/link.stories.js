import { storiesOf } from "@storybook/vue";
import KApp from "kiste/components/KApp";

const stories = storiesOf("Classes|formatted/link", module);

stories.add("default", () => ({
  components: { KApp },
  template: `
    <KApp>
      <div class="content">
        <a class="link" href="https://example.com">Link</a>
      </div>
    </KApp>
  `
}));
