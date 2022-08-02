import { Meta, Story } from "@storybook/react";

import { ComboBox } from "./combo-box-headless";

export default {
  component: ComboBox,
  title: "Atoms/Select/ComboBox",
} as Meta;

const Template: Story = (args) => <ComboBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
