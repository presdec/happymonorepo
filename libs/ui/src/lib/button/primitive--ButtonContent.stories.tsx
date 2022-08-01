import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonContent } from './primitive';

export default {
  component: ButtonContent,
  title: 'ButtonContent',
} as ComponentMeta<typeof ButtonContent>;

const Template: ComponentStory<typeof ButtonContent> = (args) => (
  <ButtonContent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
