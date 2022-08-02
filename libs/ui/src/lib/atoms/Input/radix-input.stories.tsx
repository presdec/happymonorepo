import { Meta, Story } from "@storybook/react";
import { FormEvent, useState } from "react";

import {
  Input as BaseWebInput,
  InputProps as BaseWebInputProps,
} from "./input";
import {
  CustomInput as Input,
  CustomInputProps as InputProps,
} from "./radix-input";

export default {
  component: Input,
  title: "Atoms/Input/Input",
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Default: Story<InputProps> = (args) => {
  const [value, setValue] = useState("Hello");

  return (
    <Input
      endEnhancer={() => <span>.00</span>}
      startEnhancer={() => <span>@</span>}
      value={value}
      onChange={(e: FormEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)
      }
      placeholder="Controlled Input"
      appearance="default"
    />
  );
};

Default.args = {};
Default.argTypes = {};

export const Password: Story<InputProps> = (args) => {
  const [value, setValue] = useState("12345");

  return (
    <Input
      value={value}
      onChange={(e: FormEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)
      }
      type="password"
    />
  );
};

Password.args = {};
Password.argTypes = {};

export const Clearable: Story<InputProps> = (args) => {
  const [value, setValue] = useState("Hello");

  return (
    <Input
      endEnhancer={() => <span>.00</span>}
      startEnhancer={() => <span>@</span>}
      value={value}
      onChange={(e: FormEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)
      }
      placeholder="Controlled Input"
      // disabled
      clearOnEscape={true}
      clearable={true}
    />
  );
};

Clearable.args = {};
Clearable.argTypes = {};

export const Disabled: Story<InputProps> = (args) => {
  const [value, setValue] = useState("Hello");

  return (
    <Input
      value={value}
      onChange={(e: FormEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)
      }
      placeholder="Controlled Input"
      clearOnEscape={args.clearOnEscape}
      clearable={args.clearable}
      disabled
    />
  );
};

Disabled.args = {};
Disabled.argTypes = {};

export const WithEnhancers: Story<InputProps> = (args) => {
  const [value, setValue] = useState("Hello");

  return (
    <Input
      value={value}
      onChange={(e: FormEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)
      }
      placeholder="Enhancers Input"
      startEnhancer={() => <span>CHF</span>}
      endEnhancer={() => <span>.00</span>}
    />
  );
};

WithEnhancers.args = {};
WithEnhancers.argTypes = {};

export const Loading: Story<InputProps> = (args) => {
  const [value, setValue] = useState("Hello");

  return (
    <Input
      value={value}
      onChange={(e: FormEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)
      }
      placeholder="Loading Input"
      isLoading
    />
  );
};

Loading.args = {};
Loading.argTypes = {};

export const DeprecatedDefault: Story<BaseWebInputProps> = (args) => {
  const [value, setValue] = useState("Hello");

  return (
    <BaseWebInput
      endEnhancer={() => <span>.00</span>}
      startEnhancer={() => <span>@</span>}
      value={value}
      onChange={(e: FormEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)
      }
      placeholder="Controlled Input"
      clearOnEscape={args.clearOnEscape}
      clearable={args.clearable}
    />
  );
};

DeprecatedDefault.args = {};

DeprecatedDefault.argTypes = {
  clearOnEscape: {
    defaultValue: false,
    control: {
      type: "boolean",
    },
  },
  clearable: {
    defaultValue: false,
    control: {
      type: "boolean",
    },
  },
};
