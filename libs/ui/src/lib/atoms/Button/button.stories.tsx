import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Meta, Story } from "@storybook/react";
import styled from "styled-components";

import { Icon } from "../Icon";
import { Button, ButtonProps } from "./button";

export default {
  component: Button,
  title: "Atoms/Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>I am a Button</Button>
);

export const Primary = Template.bind({});
Primary.args = { kind: "primary" };

Primary.argTypes = {
  kind: {
    defaultValue: "primary",
    options: ["primary", "secondary", "tertiary"],
    control: {
      type: "select",
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, kind: "secondary" };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, kind: "tertiary" };

export const Disabled = Template.bind({});
Disabled.args = { ...Primary.args, disabled: true };

export const Colored = Template.bind({});
Colored.args = { ...Primary.args, color: "yellow" };

export const WithStartEnhancer = Template.bind({});
WithStartEnhancer.args = {
  ...Primary.args,
  startEnhancer: () => <span>HEY</span>,
};

export const WithEndEnhancer = Template.bind({});
WithEndEnhancer.args = { ...Primary.args, endEnhancer: () => <span>HEY</span> };

export const WithLoadingEnhancer = Template.bind({});
WithLoadingEnhancer.args = { ...Primary.args, isLoading: true };

export const WithDisabledStartEnhancer = Template.bind({});
WithDisabledStartEnhancer.args = {
  ...Primary.args,
  disabled: true,
  startEnhancer: () => (
    <Icon icon={faTrash} label="faTrash" variant="primary" />
  ),
};

export const WithDisabledEndEnhancer = Template.bind({});
WithDisabledEndEnhancer.args = {
  ...Primary.args,
  disabled: true,
  endEnhancer: () => <Icon icon={faTrash} label="faTrash" variant="primary" />,
};

const StyledButton = styled(Button)`
  border-radius: 10px;
  border: 1px solid #f6f6f6;
  background-color: red;
`;

export const WithStyled: Story<ButtonProps> = (args) => {
  return <StyledButton {...args}>I am re-styled</StyledButton>;
};

WithLoadingEnhancer.args = { ...Primary.args, isLoading: true };
