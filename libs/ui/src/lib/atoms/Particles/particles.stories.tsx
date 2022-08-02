import { Meta, Story } from "@storybook/react";

import { ParticleProps, Particles } from "./particles";

export default {
  component: Particles,
  title: "Atoms/Particles",
} as Meta;

const Template: Story<ParticleProps> = (args) => <Particles {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
