import { Meta, Story } from "@storybook/react";

import { Tag, TagProps } from "./tag";

export default {
  component: Tag,
  title: "Atoms/Tag",
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
