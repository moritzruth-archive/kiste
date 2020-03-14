import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import KApp from "./KApp";
import KButton from "./KButton";
import ArrowRightIcon from "kiste/icons/arrow_right.svg";
import ExternalIcon from "kiste/icons/external.svg";

const stories = storiesOf("Components|KButton", module);
stories.addDecorator(withKnobs());

function getProps() {
  return {
    label: {
      default: text("Label", "Button")
    },
    href: {
      default: text("href", "")
    },
    loading: {
      default: boolean("loading", false)
    },
    disabled: {
      default: boolean("disabled", false)
    }
  };
}

stories.add("default", () => ({
  components: { KApp, KButton },
  props: getProps(),
  template: `
    <KApp>
      <div class="center-content fill-screen">
        <KButton :href="href" :disabled="disabled" :loading="loading">
          {{ label }}
        </KButton>
      </div>
    </KApp>
  `
}));

stories.add("with prefix", () => ({
  components: { KApp, KButton, ArrowRightIcon },
  props: getProps(),
  template: `
    <KApp>
      <div class="center-content fill-screen">
        <KButton :href="href" :disabled="disabled" :loading="loading">
          <template v-slot:prefix>
            <ArrowRightIcon/>
          </template>
          {{ label }}
        </KButton>
      </div>
    </KApp>
  `
}));

stories.add("with suffix", () => ({
  components: { KApp, KButton, ExternalIcon },
  props: getProps(),
  template: `
    <KApp>
      <div class="center-content fill-screen">
        <KButton :href="href" :disabled="disabled" :loading="loading">
          {{ label }}
          <template v-slot:suffix>
            <ExternalIcon/>
          </template>
        </KButton>
      </div>
    </KApp>
  `
}));

stories.add("with prefix & suffix", () => ({
  components: { KApp, KButton, ArrowRightIcon, ExternalIcon },
  props: getProps(),
  template: `
    <KApp>
      <div class="center-content fill-screen">
        <KButton :href="href" :disabled="disabled" :loading="loading">
          <template v-slot:prefix>
            <ArrowRightIcon/>
          </template>
          {{ label }}
          <template v-slot:suffix>
            <ExternalIcon/>
          </template>
        </KButton>
      </div>
    </KApp>
  `
}));
