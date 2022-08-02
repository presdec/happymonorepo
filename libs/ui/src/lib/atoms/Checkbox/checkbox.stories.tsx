import { CheckIcon } from "@radix-ui/react-icons";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import styled from "styled-components";

import { Button } from "../Button";
import { Body, H3 } from "../Typography";
import { Flex } from "../View";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxProps,
  CheckboxRoot,
  PrimitiveCheckbox,
} from "./checkbox";

export default {
  component: Checkbox,
  title: "Atoms/Checkbox/Checkbox",
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

const CustomCheckboxIndicator = styled(CheckboxIndicator)`
  background-color: black;
  display: block;
  width: 20px;
  height: 4px;

  &[data-state="checked"] &[data-state="unchecked"] {
    height: 20px;
  }
`;

export const Default: Story<CheckboxProps> = (args) => (
  <Flex flexDirection="column" gap="1em">
    <Body.Text.LabelMedium>
      This checkbox is nested inside a label. The state is uncontrolled.
    </Body.Text.LabelMedium>

    <H3.Text>Uncontrolled</H3.Text>

    <Checkbox id="randBox">Label</Checkbox>

    <H3.Text>Custom label and normal indicator with check icon</H3.Text>

    <CheckboxLabel>
      <CheckboxRoot>
        <Body.Text.Medium>Label</Body.Text.Medium>
        <PrimitiveCheckbox>
          <CheckboxIndicator>
            <CheckIcon />
          </CheckboxIndicator>
        </PrimitiveCheckbox>
      </CheckboxRoot>
    </CheckboxLabel>

    <H3.Text>Native label with custom indicator</H3.Text>
    <label>
      <CheckboxRoot>
        <Body.Text.Medium> Label</Body.Text.Medium>
        <PrimitiveCheckbox>
          <CustomCheckboxIndicator />
        </PrimitiveCheckbox>
      </CheckboxRoot>
    </label>

    <H3.Text>Native label + native checkbox </H3.Text>
    <label>
      <Body.Text.Medium> Label</Body.Text.Medium> <input type="checkbox" />
    </label>

    <H3.Text>Custom label + htmlFor with custom indicator</H3.Text>
    <CheckboxRoot>
      <CheckboxLabel htmlFor="one">Label</CheckboxLabel>
      <PrimitiveCheckbox id="one">
        <CustomCheckboxIndicator />
      </PrimitiveCheckbox>
    </CheckboxRoot>

    <H3.Text>Native label + htmlFor with custom indicator</H3.Text>
    <CheckboxRoot>
      <label htmlFor="two">
        <Body.Text.Medium> Label</Body.Text.Medium>
      </label>
      <PrimitiveCheckbox id="two">
        <CustomCheckboxIndicator />
      </PrimitiveCheckbox>
    </CheckboxRoot>

    <H3.Text>Native label + native checkbox with custom indicator</H3.Text>
    <CheckboxRoot>
      <label htmlFor="three">
        <Body.Text.Medium> Label</Body.Text.Medium>
      </label>
      <input type="checkbox" id="three" />
    </CheckboxRoot>
  </Flex>
);

Default.args = {};

Default.argTypes = {};

export const Controlled = () => {
  const [checked, setChecked] = useState<boolean | "indeterminate">(true);

  return (
    <Flex flexDirection="column" gap="2em">
      <Body.Text.LabelMedium>
        This checkbox is placed adjacent to its label. The state is controlled.
        The label takes state and will render with selected color.
      </Body.Text.LabelMedium>

      <Checkbox checked={checked} onCheckedChange={setChecked} id="randBox">
        State: {String(checked)}
      </Checkbox>
    </Flex>
  );
};

Controlled.args = Default.args;

Controlled.argTypes = Default.argTypes;

export const Indeterminate = () => {
  const [checked, setChecked] = useState<boolean | "indeterminate">(
    "indeterminate"
  );

  return (
    <>
      <Body.Text.LabelMedium>
        An Indicator renders when the checkbox is in a checked or indeterminate
        state. You can set the checkbox to indeterminate by taking control of
        its state. This ensures the checkbox adheres to the tri-state Checkbox
        WAI-ARIA design pattern.
      </Body.Text.LabelMedium>

      <p>
        <Checkbox checked={checked} onCheckedChange={setChecked}>
          State: {String(checked)}
        </Checkbox>
      </p>
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
    </>
  );
};

Indeterminate.args = Default.args;

Indeterminate.argTypes = Default.argTypes;

export const WithinForm = () => {
  const [data, setData] = useState({
    optional: false,
    required: false,
    stopprop: false,
  });
  const [checked, setChecked] = useState<boolean | "indeterminate">(
    "indeterminate"
  );

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      onChange={(event) => {
        const input = event.target as HTMLInputElement;
        setData((prevData) => ({ ...prevData, [input.name]: input.checked }));
      }}
    >
      <Body.Text.LabelMedium>
        An input will also render when used within a form to ensure events
        propagate correctly.
      </Body.Text.LabelMedium>
      <fieldset>
        <legend>optional checked: {String(data.optional)}</legend>
        <label>
          <Checkbox
            name="optional"
            checked={checked}
            onCheckedChange={setChecked}
          ></Checkbox>
          with label
        </label>
        <br />
        <br />

        <button
          type="button"
          onClick={() => {
            setChecked((prevChecked) => {
              return prevChecked === "indeterminate" ? false : "indeterminate";
            });
          }}
        >
          Toggle indeterminate
        </button>
      </fieldset>

      <br />
      <br />

      <fieldset>
        <legend>required checked: {String(data.required)}</legend>
        <Checkbox name="required" required></Checkbox>
      </fieldset>

      <br />
      <br />

      <fieldset>
        <legend>stop propagation checked: {String(data.stopprop)}</legend>
        <Checkbox name="stopprop" onClick={(event) => event.stopPropagation()}>
          {/* <CheckboxIndicator /> */}
        </Checkbox>
      </fieldset>

      <br />
      <br />

      <button type="button">Submit</button>
    </form>
  );
};

WithinForm.args = Default.args;

WithinForm.argTypes = Default.argTypes;
