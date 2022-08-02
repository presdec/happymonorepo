import { forwardRef, Ref } from "react";

// import { ComboBox, ComboBoxProps } from "./combo-box";
import { ComboBox, ComboBoxProps } from "./combo-box-headless";
import { CustomSelect as Select } from "./radix-select";
export type {
  SelectContentProps,
  SelectGroupProps,
  SelectItemIndicatorProps,
  SelectIconProps,
  SelectItemProps,
  SelectLabelProps,
  SelectValueProps,
  SelectTriggerProps,
  SelectItemTextProps,
  SelectViewportProps,
  SelectScrollUpButtonProps,
  SelectScrollDownButtonProps,
} from "./primitive/radix-select";

export {
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from "./radix-select";

// type Override<T1, T2> = Omit<T1, keyof T2> & T2;
// type MapOnValueChangeToString<T> = T extends SelectProps["onValueChange"]
//   ? string
//   : T;
// type MapValueToString<T, K, Z> = T extends false ? K : Z;

// type MapPropToString<PropType> =
//   PropType extends ObjectId ? string : SourceType;

// type Omitted = Omit<SelectProps, "value" | "onValueChange" | "multi">;
// export type CustomSelectProps = Omitted & {
//   value?: MapValueToString<SelectProps["multi"], SelectProps["value"], string[]>;
// };
// export type CustomSelectProps = Omitted &
//   (
//     | {
//         multi?: false;
//         onValueChange?: SelectProps["onValueChange"];
//         value?: SelectProps["value"];
//       }
//     | {
//         multi?: true;
//         onValueChange?: (value: string[]) => void;
//         value?: string[];
//       }
//   );
// | {
//     multi?: false;
//     searchable?: true;
//     onValueChange?: ComboBoxProps["onValueChange"];
//     value?: ComboBoxProps["value"];
//   }

export type CustomSelectProps = ComboBoxProps;

const isValueStringArray = (value?: string | string[]): value is string[] =>
  (value as string[]) && Array.isArray(value as string[]);

//TODO: value and onValueChange types are wrong, need to be fixed
export const CustomSelect = forwardRef(
  (
    {
      children,
      searchable,
      multi,
      value,
      onValueChange,
      ...props
    }: CustomSelectProps,
    forwardedRef?: Ref<HTMLButtonElement>
  ) => {
    if (searchable || (multi && isValueStringArray(value))) {
      return (
        <ComboBox
          {...props}
          ref={forwardedRef}
          searchable={searchable}
          multi={multi}
          value={value}
          onValueChange={onValueChange}
        >
          {children}
        </ComboBox>
      );
    }

    return (
      <Select
        {...props}
        ref={forwardedRef}
        value={value as string | undefined}
        onValueChange={onValueChange}
      >
        {children}
      </Select>
    );
  }
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
