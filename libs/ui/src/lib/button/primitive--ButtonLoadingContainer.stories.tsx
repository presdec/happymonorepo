import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonLoadingContainer } from './primitive';

export default {
  component: ButtonLoadingContainer,
  title: 'ButtonLoadingContainer',
} as ComponentMeta<typeof ButtonLoadingContainer>;

const Template: ComponentStory<typeof ButtonLoadingContainer> = (args) => (
  <ButtonLoadingContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
