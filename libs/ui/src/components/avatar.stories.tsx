import React from 'react';
import { Meta, Story } from '@storybook/react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<typeof AvatarPrimitive.Root> = (args) => (
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

export const Default = Template.bind({});
Default.args = {};
