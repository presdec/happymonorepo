import { ForwardedRef, forwardRef } from "react";

import { MaskedInputProps } from "./primitive/radix-input";
import {
  CustomInput as Input,
  CustomInputProps as InputProps,
} from "./radix-input";
import { StyledRadixMaskedInput } from "./styled-components";

export type CustomMaskedInputProps = InputProps & MaskedInputProps;

export const CustomMaskedInput = forwardRef(
  (
    {
      // do nothing with these - we just don't want to pass it to the InputMask, as
      // it does not have these properties
      startEnhancer,
      endEnhancer,
      error,
      positive,
      // below are props that are used by the masked-input
      onChange,
      onFocus,
      onBlur,
      value,
      disabled,
      readOnly,
      ...props
    }: CustomMaskedInputProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyledRadixMaskedInput
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        {...props}
      >
        {(props: CustomMaskedInputProps) => (
          <Input
            endEnhancer={startEnhancer}
            startEnhancer={endEnhancer}
            value={value}
            onChange={onChange}
            ref={forwardedRef}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            readOnly={readOnly}
            {...props}
          />
        )}
      </StyledRadixMaskedInput>
    );
  }
);
CustomMaskedInput.displayName = "MaskedInput";

export default CustomMaskedInput;
