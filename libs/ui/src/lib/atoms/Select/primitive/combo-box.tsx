import { Combobox, Transition } from "@headlessui/react";
import { ComponentType } from "react";

type ExtractProps<T> = T extends ComponentType<infer P> ? P : T;

export type ComboBoxRootProps = ExtractProps<typeof Combobox> & {
  onValueChange?: (value: string | string[]) => void;
  value?: string | string[];
};
export type ComboBoxInputProps = ExtractProps<typeof Combobox.Input>;
export type ComboBoxButtonProps = ExtractProps<typeof Combobox.Button>;
export type ComboBoxLabelProps = ExtractProps<typeof Combobox.Label>;
export type ComboBoxOptionsProps = ExtractProps<typeof Combobox.Options>;
export type ComboBoxOptionProps = ExtractProps<typeof Combobox.Option>;

export { Combobox as ComboBox, Transition };

export default Combobox;
