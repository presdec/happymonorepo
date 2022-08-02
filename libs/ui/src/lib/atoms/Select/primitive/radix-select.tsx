import * as Select from "@radix-ui/react-select";
import {
  SelectItemProps as PrimitiveSelectItemProps,
  SelectProps as PrimitiveSelectProps,
} from "@radix-ui/react-select";
import { ReactNode } from "react";

export type {
  SelectContentProps,
  SelectGroupProps,
  SelectItemIndicatorProps,
  SelectIconProps,
  SelectLabelProps,
  SelectValueProps,
  SelectTriggerProps,
  SelectItemTextProps,
  SelectViewportProps,
  SelectScrollUpButtonProps,
  SelectScrollDownButtonProps,
} from "@radix-ui/react-select";

export type TSelectOptions = {
  id: string;
  label: string;
  icon?: () => ReactNode;
  disabled?: boolean;
};

export type TSelectOptionsProps = {
  /**
   * Optionally use options to automate looping over the list and rendering a SelectItem
   * 
   * @example 
   * 
   * <Select
        value={value}
        onValueChange={onChange}
        defaultValue={value}
        options={options}
      />
   */
  options?: TSelectOptions[];
};

export type SelectProps = PrimitiveSelectProps &
  TSelectOptionsProps & {
    ariaLabel?: string;
    /**
     * Useful in forms
     *
     */
    positive?:
      | boolean
      | string
      | React.ReactNode
      | ((props: Record<string, unknown>) => React.ReactNode);
    /**
     * Useful in forms
     */
    error?:
      | boolean
      | string
      | React.ReactNode
      | ((props: Record<string, unknown>) => React.ReactNode);
    triggerIcon?: "visible" | "hidden";
    disabled?: boolean;
  };
export type SelectItemProps = PrimitiveSelectItemProps & {
  icon?: TSelectOptions["icon"];
};

export { Select };
export default Select;
