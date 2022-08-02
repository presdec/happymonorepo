import { Meta, Story } from "@storybook/react";

import { LanguageSwitcher, LanguageSwitcherProps } from "./language-switcher";

export default {
  component: LanguageSwitcher,
  title: "Atoms/Intl/LanguageSwitcher",
} as Meta;

const Template: Story<LanguageSwitcherProps> = (args) => (
  <LanguageSwitcher {...args} />
);

export const Default = Template.bind({});
Default.args = {};

Default.argTypes = {};
