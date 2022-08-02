import { Meta, Story } from "@storybook/react";

import { StatefulCheckbox, StatefulCheckboxProps } from "./stateful-checkbox";

export default {
  component: StatefulCheckbox,
  title: "Atoms/Checkbox/StatefulCheckbox",
} as Meta;

const Template: Story<StatefulCheckboxProps> = (args) => (
  <StatefulCheckbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
