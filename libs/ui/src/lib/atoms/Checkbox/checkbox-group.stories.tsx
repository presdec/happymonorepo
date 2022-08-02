import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import { Button } from "../Button";
import { Body, H1 } from "../Typography";
import { Flex } from "../View";
import {
  CheckboxGroup,
  CheckboxGroupItem,
  CheckboxGroupProps,
} from "./checkbox-group";

export default {
  component: CheckboxGroup,
  title: "Atoms/Checkbox/CheckboxGroup",
} as Meta;

const Template: Story<CheckboxGroupProps> = (args) => (
  <CheckboxGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const CheckBoxGroup = () => {
  const [checked, setChecked] = useState<boolean | "indeterminate">(
    "indeterminate"
  );

  return (
    <Flex flexDirection="column" gap="2em">
      <H1.Text>TODO: Finish states logic</H1.Text>
      <Body.Text.LabelMedium>
        An example of the tri-state Checkbox WAI-ARIA design pattern.
      </Body.Text.LabelMedium>

      <Body.Text.LabelMedium>State: {String(checked)}</Body.Text.LabelMedium>

      <CheckboxGroup checked={checked} onCheckedChange={setChecked}>
        <CheckboxGroupItem>Label 1</CheckboxGroupItem>
        <CheckboxGroupItem>Label 2</CheckboxGroupItem>
        <CheckboxGroupItem>Label 3</CheckboxGroupItem>
      </CheckboxGroup>

      <Button
        type="button"
        onClick={() =>
          setChecked((prevIsChecked) =>
            prevIsChecked === "indeterminate" ? false : "indeterminate"
          )
        }
      >
        Toggle indeterminate
      </Button>
    </Flex>
  );
};

CheckBoxGroup.args = Primary.args;

// CheckBoxGroup.argTypes = Primary.argTypes;
