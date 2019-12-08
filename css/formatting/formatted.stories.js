import { storiesOf } from "@storybook/vue";
import KApp from "kiste/components/KApp";

const stories = storiesOf("Classes|formatted", module);

stories.add("default", () => ({
  components: { KApp },
  template: `
    <KApp>
      <div class="content formatted">
        <h3 style="color: red">
          All styles are automatically applied
        </h3>
        <h1>
          Heading 1
        </h1>
        <h2>
          Heading 2
        </h2>
        <h3>
          Heading 3
        </h3>
        <h4>
          Heading 4
        </h4>
        <h5>
          Heading 5
        </h5>
        <h6>
          Heading 6
        </h6>
        <p>Paragraph</p>
        <a href="https://example.com">Link</a>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </KApp>
  `
}));
