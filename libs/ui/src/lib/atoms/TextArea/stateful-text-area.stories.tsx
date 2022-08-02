import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { useInterval } from "react-use";

import { Body } from "../Typography";
import { StatefulTextArea, StatefulTextAreaProps } from "./stateful-text-area";

export default {
  component: StatefulTextArea,
  title: "Atoms/TextArea/StatefulTextArea",
} as Meta;

const Template: Story<StatefulTextAreaProps> = (args) => (
  <StatefulTextArea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const StatefulUncontrolled: Story<StatefulTextAreaProps> = (args) => {
  return (
    <div>
      <Body.Text.LabelMedium>
        Stateful value: uses internal state, unlike the normal Input that uses
        the DOM
      </Body.Text.LabelMedium>
      <StatefulTextArea placeholder="Controlled Input" />
    </div>
  );
};

StatefulUncontrolled.args = {};
StatefulUncontrolled.argTypes = {};

export const StatefulDebounced: Story<StatefulTextAreaProps> = (args) => {
  const [value, setValue] = useState<string | number>("Hello");

  return (
    <div>
      <Body.Text.LabelMedium>Debounced value: {value}</Body.Text.LabelMedium>
      <StatefulTextArea
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

export const StatefulAsync: Story<StatefulTextAreaProps> = (args) => {
  const [value, setValue] = useState<number>(0);

  const delay = 1000;

  useInterval(() => {
    setValue(value + 1);
  }, delay);

  return (
    <div>
      <Body.Text.LabelMedium>Async value: {value}</Body.Text.LabelMedium>
      <StatefulTextArea
        value={value}
        onChange={(value) => setValue(Number(value))}
        placeholder="Controlled Input"
      />
    </div>
  );
};

StatefulAsync.args = {};
StatefulAsync.argTypes = {};
