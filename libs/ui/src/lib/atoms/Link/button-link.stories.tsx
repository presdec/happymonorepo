import { Meta, Story } from "@storybook/react";

import { ButtonLink, LinkButtonProps } from "./button-link";

export default {
  component: ButtonLink,
  title: "Atoms/Link/ButtonLink",
} as Meta;

const Template: Story<LinkButtonProps> = (args) => (
  <ButtonLink {...args}>As an Anchor</ButtonLink>
);

export const Default = Template.bind({});
Default.args = {
  to: "https://styled-components.com/docs/basics",
  href: "https://styled-components.com/docs/basics",
  target: "_blank",
};

export const Internal = Template.bind({});
Internal.args = { external: false };

export const External = Template.bind({});
External.args = { external: true };
