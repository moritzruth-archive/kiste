import { storiesOf } from "@storybook/vue";
import KApp from "@kiste/components/KApp";

const stories = storiesOf("Classes|formatted/heading", module);

stories.add("default", () => ({
  components: { KApp },
  template: `
    <KApp>
      <div class="content">
        <h1 class="heading--1">
          Heading 1 (<code>heading--1</code>)
        </h1>
        <h2 class="heading--2">
          Heading 2 (<code>heading--2</code>)
        </h2>
        <h3 class="heading--3">
          Heading 3 (<code>heading--3</code>)
        </h3>
        <h4 class="heading--4">
          Heading 4 (<code>heading--4</code>)
        </h4>
        <h5 class="heading--5">
          Heading 5 (<code>heading--5</code>)
        </h5>
        <h6 class="heading--6">
          Heading 6 (<code>heading--6</code>)
        </h6>
      </div>
    </KApp>
  `
}));
