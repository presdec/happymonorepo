import { Meta, Story } from "@storybook/react";

import { useTheme } from "../../themes";
import { SqLogoText } from "./logo-sq-text";

export default {
  component: SqLogoText,
  title: "Atoms/Logo/SqLogoText",
} as Meta;

const Template: Story = (args) => <SqLogoText {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Default = () => {
  const [{ theme }] = useTheme();

  return (
    <div style={{ width: "200px", height: "200px" }}>
      <SqLogoText color={theme.colors.backgroundSecondary} />
    </div>
  );
};

Default.args = {};
