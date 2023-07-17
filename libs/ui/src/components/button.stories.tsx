import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  // <Button {...args}>Click me</Button>
  <Button variant="outline">Hello World!</Button>
);

export const Default = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const Icon = Template.bind({});
Icon.args = {
  size: 'icon',
};

export const AsChild = Template.bind({});
AsChild.args = {
  asChild: true,
};
