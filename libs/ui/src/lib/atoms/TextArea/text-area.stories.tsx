import { Meta, Story } from "@storybook/react";

import { TextArea, TextAreaProps } from "./text-area";

export default {
  component: TextArea,
  title: "Atoms/TextArea/TextArea",
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Default: Story<TextAreaProps> = (args) => {
  return (
    <TextArea
      cols={100}
      rows={5}
      defaultValue={"Some descriptive text"}
    ></TextArea>
  );
};

Default.args = {};

Default.argTypes = {};
