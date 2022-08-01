import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonRoot } from './primitive';

export default {
  component: ButtonRoot,
  title: 'ButtonRoot',
} as ComponentMeta<typeof ButtonRoot>;

const Template: ComponentStory<typeof ButtonRoot> = (args) => (
  <ButtonRoot {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
