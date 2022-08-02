import { CheckIcon, DividerHorizontalIcon } from "@radix-ui/react-icons";
import { FC } from "react";

import type {
  CheckboxIndicatorProps,
  CheckboxProps as BaseCheckboxProps,
  CheckedState,
} from "./primitive/checkbox";
import {
  StyledCheckbox,
  StyledCheckboxIndicator,
  StyledCheckboxLabel,
  StyledCheckboxRoot,
} from "./styled-components";

export type { BaseCheckboxProps, CheckboxIndicatorProps, CheckedState };

export type CheckboxProps = BaseCheckboxProps & CheckboxIndicatorProps;

export const CheckboxIndicator = StyledCheckboxIndicator;
export const CheckboxLabel = StyledCheckboxLabel;
export const CheckboxRoot = StyledCheckboxRoot;
export const PrimitiveCheckbox = StyledCheckbox;

const isIndeterminate = (checked?: CheckedState): checked is "indeterminate" =>
  checked === "indeterminate";

const getState = (checked: CheckedState) =>
  isIndeterminate(checked)
    ? "indeterminate"
    : checked
    ? "checked"
    : "unchecked";

export const Checkbox: FC<CheckboxProps> = ({
  children,
  id,
  forceMount,
  checked,
  onCheckedChange,
  ...props
}) => {
  return (
    <StyledCheckboxRoot>
      <PrimitiveCheckbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <CheckboxIndicator forceMount={forceMount}>
          {checked === "indeterminate" && <DividerHorizontalIcon />}
          {onCheckedChange && checked === true && <CheckIcon />}
          {onCheckedChange === undefined && checked === undefined && (
            <CheckIcon />
          )}
        </CheckboxIndicator>
      </PrimitiveCheckbox>

      <CheckboxLabel
        htmlFor={id}
        //AC: If in controlled mode the label color will track the checked state
        // data-state={checked ? "checked" : "unchecked"}
        data-state={
          onCheckedChange && checked !== undefined
            ? getState(checked)
            : "unchecked"
        }
      >
        {children}
      </CheckboxLabel>
    </StyledCheckboxRoot>
  );
};

export default Checkbox;
