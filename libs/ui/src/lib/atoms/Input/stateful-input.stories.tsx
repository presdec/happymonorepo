import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { useInterval } from "react-use";

import { Body } from "../Typography";
import { StatefulInput, StatefulInputProps } from "./stateful-input";

export default {
  component: StatefulInput,
  title: "Atoms/Input/StatefulInput",
} as Meta;

const Template: Story<StatefulInputProps> = (args) => (
  <StatefulInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const StatefulUncontrolled: Story<StatefulInputProps> = (args) => {
  return (
    <div>
      <Body.Text.LabelMedium>
        Stateful value: uses internal state, unlike the normal Input that uses
        the DOM
      </Body.Text.LabelMedium>
      <StatefulInput placeholder="Controlled Input" />
    </div>
  );
};

StatefulUncontrolled.args = {};
StatefulUncontrolled.argTypes = {};

export const StatefulDebounced: Story<StatefulInputProps> = (args) => {
  const [value, setValue] = useState<string | number>("Hello");

  return (
    <div>
      <Body.Text.LabelMedium>Debounced value: {value}</Body.Text.LabelMedium>
      <StatefulInput
        value={value}
        onChange={(value) => setValue(value)}
        debounce
        debounceTimeout={2000}
        placeholder="Controlled Input"
      />
    </div>
  );
};

StatefulDebounced.args = {};
StatefulDebounced.argTypes = {};

export const StatefulAsync: Story<StatefulInputProps> = (args) => {
  const [value, setValue] = useState<number>(0);

  const delay = 1000;

  useInterval(() => {
    setValue(value + 1);
  }, delay);

  return (
    <div>
      <Body.Text.LabelMedium>Async value: {value}</Body.Text.LabelMedium>
      <StatefulInput
        value={value}
        // onChange={(value) => setValue(value)}
        placeholder="Controlled Input"
      />
    </div>
  );
};

StatefulAsync.args = {};
StatefulAsync.argTypes = {};
