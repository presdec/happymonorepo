import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import { Icon } from "../Icon";
import { Body } from "../Typography";
import { Flex } from "../View";
import {
  CustomSelect as Select,
  CustomSelectProps as SelectProps,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from "./new-select";

export default {
  component: Select,
  title: "Atoms/Select/Select",
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Default = () => {
  return (
    <Flex flexDirection="column" gap="3em" width="300px">
      <Select defaultValue="2">
        <SelectItem value="1">Item 1</SelectItem>
        <SelectItem value="2">Item 2</SelectItem>
        <SelectItem value="3">Item 3</SelectItem>
      </Select>
    </Flex>
  );
};

Default.args = {};

Default.argTypes = {};

export const WithoutTriggerIcon = () => {
  return (
    <Flex flexDirection="column" gap="3em">
      <Select defaultValue="2" triggerIcon={"hidden"}>
        <SelectItem value="1">Item 1</SelectItem>
        <SelectItem value="2">Item 2</SelectItem>
        <SelectItem value="3">Item 3</SelectItem>
      </Select>
    </Flex>
  );
};

WithoutTriggerIcon.args = {};

WithoutTriggerIcon.argTypes = {};

// export const DeprecatedDefault: Story<any> = (args) => {
//   const [value, setValue] = useState<ReadonlyArray<SelectOption>>([]);
//   return (
//     <BaseWebSelect
//       options={[
//         { label: "AliceBlue", id: "#F0F8FF" },
//         { label: "AntiqueWhite", id: "#FAEBD7" },
//         { label: "Aqua", id: "#00FFFF" },
//         { label: "Aquamarine", id: "#7FFFD4" },
//         { label: "Azure", id: "#F0FFFF" },
//         { label: "Beige", id: "#F5F5DC" },
//       ]}
//       value={value}
//       placeholder="Select color"
//       onChange={(params) => setValue(params.value)}
//     />
//   );
// };

// DeprecatedDefault.args = {};

// DeprecatedDefault.argTypes = {
//   // kind: {
//   //   defaultValue: KIND.primary,
//   //   options: [KIND.primary, KIND.secondary, KIND.tertiary],
//   //   control: {
//   //     type: 'select',
//   //   },
//   // },
// };

export const Controlled = () => {
  const [value, setValue] = useState("2");
  return (
    <Flex flexDirection="column" gap="3em">
      <Select
        defaultValue="2"
        value={value}
        //@ts-expect-error Refine types
        onValueChange={(value) => setValue(value)}
      >
        <SelectItem value="1">Item 1</SelectItem>
        <SelectItem value="2">Item 2</SelectItem>
        <SelectItem value="3">Item 3</SelectItem>
      </Select>

      <Body.Text.LabelMedium>Selected Value: {value}</Body.Text.LabelMedium>
    </Flex>
  );
};

Controlled.args = {};

Controlled.argTypes = {};

export const WithOptions = () => (
  <Select
    defaultValue="#F0F8FF"
    options={[
      { label: "AliceBlue", id: "#F0F8FF" },
      { label: "AntiqueWhite", id: "#FAEBD7" },
      { label: "Aqua", id: "#00FFFF" },
      { label: "Aquamarine", id: "#7FFFD4" },
      { label: "Azure", id: "#F0FFFF" },
      { label: "Beige", id: "#F5F5DC" },
    ]}
  ></Select>
);

WithOptions.args = {};

WithOptions.argTypes = {};

export const WithGroups = () => (
  <Select defaultValue="blueberry">
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectGroup>

    <SelectSeparator />

    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="aubergine">Aubergine</SelectItem>
      <SelectItem value="broccoli">Broccoli</SelectItem>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="courgette">Courgette</SelectItem>
      <SelectItem value="leek">Leek</SelectItem>
    </SelectGroup>
  </Select>
);

WithGroups.args = {};

WithGroups.argTypes = {};

export const Disabled = () => (
  <Select defaultValue="pineapple" ariaLabel={"Food"} disabled>
    <SelectItem value="pineapple">Pineapple</SelectItem>
    <SelectItem value="courgette">Courgette</SelectItem>
    <SelectItem value="leek">Leek</SelectItem>
  </Select>
);

Disabled.args = {};

Disabled.argTypes = {};

export const ItemDisabled = () => (
  <Select defaultValue="pineapple" ariaLabel={"Food"}>
    <SelectItem value="pineapple">Pineapple</SelectItem>
    <SelectItem value="courgette" disabled>
      Courgette
    </SelectItem>
    <SelectItem value="leek">Leek</SelectItem>
  </Select>
);

ItemDisabled.args = {};

ItemDisabled.argTypes = {};

export const WithCustomIndicatorIcons = () => {
  return (
    <Select defaultValue="2">
      <SelectItem
        value="1"
        icon={() => <Icon icon={faGlobeAsia} label="asia"></Icon>}
      >
        Item 1
      </SelectItem>
      <SelectItem
        value="2"
        icon={() => <Icon icon={faGlobeAsia} label="asia"></Icon>}
      >
        Item 2
      </SelectItem>
      <SelectItem
        value="3"
        icon={() => <Icon icon={faGlobeAsia} label="asia"></Icon>}
      >
        Item 3
      </SelectItem>
    </Select>
  );
};

WithCustomIndicatorIcons.args = {};

WithCustomIndicatorIcons.argTypes = {};

export const ItemWithIcons = () => {
  return (
    <Select defaultValue="2">
      <SelectItem value="1">
        <Flex alignItems="center">
          <Icon icon={faGlobeAsia} label="asia"></Icon>Item 1
        </Flex>
      </SelectItem>
      <SelectItem value="2">
        <Flex alignItems="center">
          <Icon icon={faGlobeAsia} label="asia"></Icon>Item 2
        </Flex>
      </SelectItem>
      <SelectItem value="3">
        <Flex alignItems="center">
          <Icon icon={faGlobeAsia} label="asia"></Icon>Item 3
        </Flex>
      </SelectItem>
    </Select>
  );
};

ItemWithIcons.args = {};

ItemWithIcons.argTypes = {};
