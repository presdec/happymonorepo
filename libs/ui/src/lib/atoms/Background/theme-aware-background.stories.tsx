import { Meta, Story } from "@storybook/react";

import { H1 } from "../Typography";
import { View } from "../View";
import { ThemeAwareBackground } from "./theme-aware-background";

export default {
  component: ThemeAwareBackground,
  title: "Atoms/DEPRECATED_Background",
} as Meta;

const Template: Story = (args) => <ThemeAwareBackground {...args} />;

export const DEPRECATED_Primary = Template.bind({});
DEPRECATED_Primary.args = {};

export const DEPRECATED_Default: Story<{
  title: string;
}> = (args) => {
  return (
    <View padding={"10em"} backgroundColor="grey">
      <ThemeAwareBackground>
        <H1.Text>{args.title}</H1.Text>
      </ThemeAwareBackground>
    </View>
  );
};

DEPRECATED_Default.args = {};

DEPRECATED_Default.argTypes = {
  title: {
    defaultValue:
      "A View component used as background color. Syncs with the theme backgroundPrimary color.",
    control: {
      type: "text",
    },
  },
};
