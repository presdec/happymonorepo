import { Meta, Story } from "@storybook/react";

import { StatefulSlider, StatefulSliderProps } from "./stateful-slider";

export default {
  component: StatefulSlider,
  title: "Atoms/Slider/StatefulSlider",
} as Meta;

const Template: Story<StatefulSliderProps> = (args) => (
  <StatefulSlider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Stateful: Story<StatefulSliderProps> = () => {
  return <StatefulSlider />;
};
