import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import { Body } from "../Typography";
import { Flex } from "../View";
// import { ComboBox, ComboBoxProps } from "./combo-box";
import {
  CustomSelect as Select,
  CustomSelectProps as SelectProps,
} from "./new-select";

export default {
  component: Select,
  title: "Atoms/Select/ComboBox",
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
export const ComboBoxSearch = () => (
  <Flex flexDirection="column" gap="3em" width="300px">
    <Select
      defaultValue="#F0F8FF"
      searchable
      options={[
        { label: "AliceBlue", id: "#F0F8FF" },
        { label: "AntiqueWhite", id: "#FAEBD7" },
        { label: "Aqua", id: "#00FFFF" },
        { label: "Aquamarine", id: "#7FFFD4" },
        { label: "Azure", id: "#F0FFFF" },
        { label: "Beige", id: "#F5F5DC" },
      ]}
    ></Select>
  </Flex>
);

ComboBoxSearch.args = {};

ComboBoxSearch.argTypes = {};

export const ComboBoxSearchControlled = () => {
  const [value, setValue] = useState<string>("#F0FFFF");

  return (
    <Flex flexDirection="column" gap="3em" width="300px">
      <Select
        defaultValue="#F0F8FF"
        searchable
        value={value}
        //@ts-expect-error Refine types
        onValueChange={(value) => setValue(value)}
        options={[
          { label: "AliceBlue", id: "#F0F8FF" },
          { label: "AntiqueWhite", id: "#FAEBD7" },
          { label: "Aqua", id: "#00FFFF" },
          { label: "Aquamarine", id: "#7FFFD4" },
          { label: "Azure", id: "#F0FFFF" },
          { label: "Beige", id: "#F5F5DC" },
        ]}
      ></Select>

      <Body.Text.LabelMedium>Selected Value: {value}</Body.Text.LabelMedium>
    </Flex>
  );
};

ComboBoxSearchControlled.args = {};

ComboBoxSearchControlled.argTypes = {};

export const ComboBoxMultiControlled = () => {
  const [values, setValues] = useState<string[]>(["#F0FFFF", "#7FFFD4"]);

  return (
    <Flex flexDirection="column" gap="3em" width="300px">
      <Select
        defaultValue="#F0F8FF"
        multi
        value={values}
        //@ts-expect-error Refine types
        onValueChange={(value) => setValues(value)}
        options={[
          { label: "AliceBlue", id: "#F0F8FF" },
          { label: "AntiqueWhite", id: "#FAEBD7" },
          { label: "Aqua", id: "#00FFFF" },
          { label: "Aquamarine", id: "#7FFFD4" },
          { label: "Azure", id: "#F0FFFF" },
          { label: "Beige", id: "#F5F5DC" },
        ]}
      ></Select>

      <Body.Text.LabelMedium>
        Selected Values: {values.join(", ")}
      </Body.Text.LabelMedium>
    </Flex>
  );
};

ComboBoxMultiControlled.args = {};

ComboBoxMultiControlled.argTypes = {};

export const ComboBoxSearchDisabled = () => (
  <Flex flexDirection="column" gap="3em" width="300px">
    <Select
      defaultValue="#F0F8FF"
      searchable
      disabled
      options={[
        { label: "AliceBlue", id: "#F0F8FF" },
        { label: "AntiqueWhite", id: "#FAEBD7" },
        { label: "Aqua", id: "#00FFFF" },
        { label: "Aquamarine", id: "#7FFFD4" },
        { label: "Azure", id: "#F0FFFF" },
        { label: "Beige", id: "#F5F5DC" },
      ]}
    ></Select>
  </Flex>
);

ComboBoxSearchDisabled.args = {};

ComboBoxSearchDisabled.argTypes = {};

export const ComboBoxMulti = () => (
  <Flex flexDirection="column" gap="3em" width="300px">
    <Select
      defaultValue="#F0F8FF"
      searchable
      multi
      options={[
        {
          label: "AliceBlue",
          id: "#F0F8FF",
        },
        { label: "AntiqueWhite", id: "#FAEBD7" },
        { label: "Aqua", id: "#00FFFF" },
        { label: "Aquamarine", id: "#7FFFD4" },
        { label: "Azure", id: "#F0FFFF" },
        { label: "Beige", id: "#F5F5DC" },
      ]}
    ></Select>
  </Flex>
);

ComboBoxMulti.args = {};

ComboBoxMulti.argTypes = {};

// export const ComboBoxAsync = () => {
//   const [index, setIndex] = useState<number>(0);

//   const options = [
//     { label: "AliceBlue", id: "#F0F8FF" },
//     { label: "AntiqueWhite", id: "#FAEBD7" },
//     { label: "Aqua", id: "#00FFFF" },
//     { label: "Aquamarine", id: "#7FFFD4" },
//     { label: "Azure", id: "#F0FFFF" },
//     { label: "Beige", id: "#F5F5DC" },
//   ];
//   const delay = 1000;

//   useInterval(() => {
//     if (index <= 4) {
//       setIndex(index + 1);
//     }
//   }, delay);

//   return (
//     <Flex flexDirection="column" gap="3em" width="300px">
//       <Select
//         defaultValue="#F0F8FF"
//         searchable
//         value={options[index]?.id}
//         // onValueChange={(value) => setValue(Number(value))}
//         options={options}
//         // isLoading
//       ></Select>

//       <Body.Text.LabelMedium>
//         Selected Values: {options[index]?.label}
//       </Body.Text.LabelMedium>
//     </Flex>
//   );
// };

// ComboBoxAsync.args = {};

// ComboBoxAsync.argTypes = {};
