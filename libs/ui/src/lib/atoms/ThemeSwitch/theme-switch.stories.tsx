import { Story } from "@storybook/react";

import { ThemeType, useTheme } from "../../themes";
import { ThemeSwitches, ThemeSwitchProps } from "./theme-switch";

export default {
  component: ThemeSwitches,
  title: "Atoms/ThemeSwitch",
};

// const Template: Story = (args) => <ThemeSwitches.Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {};

export const Default: Story<ThemeSwitchProps> = (args) => {
  const [{ themeType }, toggleTheme] = useTheme();

  return (
    <ThemeSwitches.Button
      themeType={themeType}
      onCheckedChange={toggleTheme}
      // {...args}
    >
      Switch Theme
    </ThemeSwitches.Button>
  );
};

Default.args = {
  labelPlacement: undefined,
};

Default.argTypes = {
  labelPlacement: {
    defaultValue: "right",
    options: ["left", "right"],
    control: {
      type: "select",
    },
  },
};

export const Toggle: Story<ThemeSwitchProps> = (args) => {
  const [{ themeType }, toggleTheme] = useTheme();

  return (
    <ThemeSwitches.Toggle
      themeType={themeType}
      onCheckedChange={toggleTheme}
      // {...args}
    >
      Switch Theme
    </ThemeSwitches.Toggle>
  );
};

Toggle.args = Default.args;

Toggle.argTypes = Default.argTypes;
