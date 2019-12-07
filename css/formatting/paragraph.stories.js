import { storiesOf } from "@storybook/vue";
import KApp from "@kiste/components/KApp";

const stories = storiesOf("Classes|formatted/paragraph", module);

stories.add("default", () => ({
  components: { KApp },
  template: `
    <KApp>
      <div class="content">
        <h1 class="heading--1">Title</h1>
        <p class="paragraph">Paragraph 1</p>
        <p class="paragraph">Paragraph 2</p>
        <p class="paragraph">Paragraph 3</p>
        <ul class="paragraph">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <p class="paragraph">Paragraph 4</p>
      </div>
    </KApp>
  `
}));
