import { Meta, Story } from "@storybook/react";

import { View } from "../View";
import { MultiProgress, MultiProgressProps } from "./multi-progress";

export default {
  component: MultiProgress,
  title: "Atoms/Progress/MultiProgress",
} as Meta;

const Template: Story<MultiProgressProps> = (args) => (
  <MultiProgress {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

Primary.argTypes = {
  value: {
    defaultValue: 3,
    control: {
      type: "number",
    },
  },
  // color: {
  //   defaultValue: "yellow",
  //   control: {
  //     type: "text",
  //   },
  // },
  // originalValue: {
  //   defaultValue: 30,
  //   control: {
  //     type: "number",
  //   },
  // },
};

export const Multi: Story<MultiProgressProps> = ({
  value,
  originalValue,
  colors,
  ...args
}) => {
  return (
    <MultiProgress
      originalValue={originalValue}
      value={value}
      colors={["pink", "red"]}
      {...args}
    />
  );
};
Multi.args = {};

Multi.argTypes = Primary.argTypes;

export const Vertical: Story<MultiProgressProps> = ({
  value,
  originalValue,
  colors,
  ...args
}) => {
  return (
    <View height="200px" width="4px">
      <MultiProgress
        originalValue={originalValue}
        value={value}
        colors={["pink", "red"]}
        orientation={"vertical"}
        {...args}
      />
    </View>
  );
};
Vertical.args = {};

Vertical.argTypes = Primary.argTypes;
