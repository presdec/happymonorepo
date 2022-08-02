import {
  faArrowCircleDown,
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { Meta, Story } from "@storybook/react";

import { Button } from "../Button";
import { Body } from "../Typography";
import { Flex } from "../View";
import { Icon, IconProps } from "./icon";

export default {
  component: Icon,
  title: "Atoms/Icon",
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

const paths = {
  chevron:
    "M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z",
};

export const Default: Story<IconProps> = (args) => {
  return (
    <Flex gap="2em" flexDirection="column">
      <Body.Text.LabelMedium>With Variants</Body.Text.LabelMedium>

      <Body.Text.LabelMedium>Primary</Body.Text.LabelMedium>

      <Icon
        icon={faArrowCircleDown}
        size={"lg"}
        label="label"
        variant="primary"
      />

      <Body.Text.LabelMedium>Secondary</Body.Text.LabelMedium>
      <Icon
        icon={faArrowCircleDown}
        size={"lg"}
        label="label"
        variant="secondary"
      />
    </Flex>
  );
};

Default.args = {};
Default.argTypes = {};

export const withSvgPath: Story<IconProps> = (args) => {
  return (
    <Flex gap="2em" flexDirection="column">
      <Body.Text.LabelMedium>
        Icons as FontAwesome Elements
      </Body.Text.LabelMedium>
      <Flex gap="2em">
        <Icon icon={faArrowCircleDown} size={"lg"} label="label" />
        <Icon icon={faArrowCircleUp} size={"sm"} label="label" />
        <Icon icon={faArrowCircleLeft} size={"xs"} label="label" />
        <Icon icon={faArrowCircleRight} size={"lg"} label="label" />
      </Flex>
    </Flex>
  );
};

export const withFontAwesome: Story<IconProps> = (args) => {
  return (
    <Flex gap="2em" flexDirection="column">
      <Body.Text.LabelMedium>
        Icons as svg path definition
      </Body.Text.LabelMedium>
      <Body.Text.LabelMedium>
        <Flex gap="2em">
          <Icon icon={paths.chevron} label="label" />
          <Icon
            icon={paths.chevron}
            size={"lg"}
            viewBox={"0 0 16 16"}
            label="label"
          />
          <div style={{ fontSize: "32px" }}>
            <Icon icon={paths.chevron} size={"lg"} label="label" />
          </div>
          <Icon icon={paths.chevron} size={"10x"} label="label" />
        </Flex>
      </Body.Text.LabelMedium>
    </Flex>
  );
};

export const withButtons: Story<IconProps> = (args) => {
  return (
    <Flex gap="2em" flexDirection="column">
      <Body.Text.LabelMedium>Icons as button enhancers</Body.Text.LabelMedium>
      <Flex gap="2em">
        <Button
          startEnhancer={() => (
            <Icon icon={faArrowCircleLeft} size={"lg"} label="label" />
          )}
        >
          Button with icon
        </Button>

        <Button
          kind={"secondary"}
          endEnhancer={() => (
            <Icon icon={faArrowCircleRight} size={"lg"} label="label" />
          )}
        >
          Button with icon
        </Button>
      </Flex>
    </Flex>
  );
};
