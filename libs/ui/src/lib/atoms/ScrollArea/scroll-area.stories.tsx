import { Meta, Story } from "@storybook/react";

import { Body } from "../Typography";
import { View } from "../View";
import { ScrollArea, ScrollAreaProps } from "./scroll-area";

export default {
  component: ScrollArea,
  title: "Atoms/ScrollArea",
} as Meta;

const Template: Story<ScrollAreaProps> = (args) => (
  <ScrollArea {...args}>
    <Body.Text.Medium>Coming soon...</Body.Text.Medium>
  </ScrollArea>
);

export const Primary = Template.bind({});
Primary.args = {};
