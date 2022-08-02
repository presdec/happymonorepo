import { Meta, Story } from "@storybook/react";

import { useTheme } from "../../themes";
import { LogoSvg } from "./logo-svg";

export default {
  component: LogoSvg,
  title: "Atoms/Logo/LogoSvg",
} as Meta;

const Template: Story = (args) => <LogoSvg {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Default = () => {
  const [{ theme }] = useTheme();

  return (
    <LogoSvg
      color={theme.colors.backgroundSecondary}
      width={"50px"}
      height={"50px"}
    />
  );
};

Default.args = {};
