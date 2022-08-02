import { Meta, Story } from "@storybook/react";

import { Image, ImageProps } from "./image";

export default {
  component: Image,
  title: "Atoms/Image",
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
