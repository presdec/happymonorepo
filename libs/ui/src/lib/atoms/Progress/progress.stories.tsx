import { Meta, Story } from "@storybook/react";

import { View } from "../View";
import { Progress, ProgressProps } from "./progress";

export default {
  component: Progress,
  title: "Atoms/Progress",
} as Meta;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.argTypes = {
  value: {
    defaultValue: 3,
    control: {
      type: "number",
    },
  },
  color: {
    defaultValue: "yellow",
    control: {
      type: "text",
    },
  },
  // originalValue: {
  //   defaultValue: 30,
  //   control: {
  //     type: "number",
  //   },
  // },
};

export const Default: Story<ProgressProps> = () => {
  const max = 100;
  const value = 60;
  return <Progress value={value} max={max}></Progress>;
};

Default.args = {};

Default.argTypes = Primary.argTypes;

export const NotAnimated: Story<ProgressProps> = () => {
  const max = 100;
  const value = 60;
  return <Progress value={value} max={max} animate={false}></Progress>;
};

Default.args = {};

Default.argTypes = Primary.argTypes;

export const Colored: Story<ProgressProps> = ({ ...args }) => {
  const max = 150;
  const value = 60;

  return <Progress value={value} max={max} color={"yellow"} />;
};

Colored.args = {};

Colored.argTypes = Primary.argTypes;

export const Vertical: Story<ProgressProps> = ({ ...args }) => {
  const max = 150;
  const value = 60;

  return (
    <View height="200px" width="4px">
      <Progress value={value} max={max} orientation={"vertical"} />
    </View>
  );
};

Vertical.args = {};

Vertical.argTypes = Primary.argTypes;
