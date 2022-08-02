import { Meta, Story } from "@storybook/react";

import { Link, LinkProps } from "./link";

export default {
  component: Link,
  title: "Atoms/Link/Link",
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args}>I am a Link</Link>;

export const Internal = Template.bind({});
Internal.args = { external: false };

export const External = Template.bind({});
External.args = { external: true };
