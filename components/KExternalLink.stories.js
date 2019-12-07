import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import KApp from "./KApp";
import KExternalLink from "./KExternalLink";

const stories = storiesOf("Components|KExternalLink", module);
stories.addDecorator(withKnobs());

const template = `
  <KApp>
    <KExternalLink :href="href" :show-protocol="showProtocol" :show-query="showQuery">{{ label }}</KExternalLink>
  </KApp>
`;

function getProps(defaults = {}) {
  return {
    href: {
      default: text("href", defaults.href || "https://example.com/path?query=param")
    },
    label: {
      default: text("Label", defaults.label === undefined ? "External link" : defaults.label)
    },
    showProtocol: {
      default: boolean("Show Protocol", defaults.showProtocol === undefined ? false : defaults.showProtocol)
    },
    showQuery: {
      default: boolean("Show Query", defaults.showQuery === undefined ? false : defaults.showQuery)
    }
  }
}

stories.add("with label", () => ({
  components: { KApp, KExternalLink },
  props: getProps(),
  template
}));

stories.add("without label", () => ({
  components: { KApp, KExternalLink },
  props: getProps({
    label: ""
  }),
  template
}));
