import { storiesOf } from "@storybook/vue";
import KApp from "@kiste/components/KApp";

const stories = storiesOf("Classes|content", module);

stories.add("default", () => ({
  components: { KApp },
  template: `
    <KApp>
      <div class="content">
        <p>
          This text is centered. This text is centered. This text is centered. This text is centered.
          This text is centered. This text is centered. This text is centered. This text is centered.
          This text is centered. This text is centered. This text is centered. This text is centered.
        </p>
      </div>
    </KApp>
  `
}));
