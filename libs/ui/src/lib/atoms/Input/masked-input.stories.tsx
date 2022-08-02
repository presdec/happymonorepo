import { Meta, Story } from "@storybook/react";

import {
  CustomMaskedInput as MaskedInput,
  CustomMaskedInputProps as MaskedInputProps,
} from "./masked-input";

export default {
  component: MaskedInput,
  title: "Atoms/Input/MaskedInput",
} as Meta;

const Template: Story<MaskedInputProps> = (args) => <MaskedInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const MaskedPhoneNumber: Story<MaskedInputProps> = (args) => {
  return (
    <MaskedInput
      placeholder="Phone number"
      //Takes also Regex
      mask="(999) 999-9999"
      // maskChar="+++"
    ></MaskedInput>
  );
};

MaskedPhoneNumber.args = {};
MaskedPhoneNumber.argTypes = {};

//doesn't work
export const MaskedIban: Story<MaskedInputProps> = (args) => {
  const firstLetter = /(?!.*[DFIOQU])[A-VXY]/i;
  const letter = /(?!.*[DFIOQU])[A-Z]/i;
  const digit = /[0-9]/;
  const mask = [firstLetter, digit, letter, " ", digit, letter, digit];

  return (
    <MaskedInput
      placeholder="IBAN"
      //Takes also Regex
      mask={mask}
      // maskChar="+++"
    ></MaskedInput>
  );
};

MaskedIban.args = {};
MaskedIban.argTypes = {};
