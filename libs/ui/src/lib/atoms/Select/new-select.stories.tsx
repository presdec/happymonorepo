import { Meta, Story } from "@storybook/react";

import { CustomSelect as Select } from "./new-select";

export default {
  component: Select,
  title: "Atoms/Select/Select",
} as Meta;

const Template: Story = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
