import {
  FormEvent,
  ForwardedRef,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { useDebounce } from "react-use";

import { CustomInput, CustomInputProps as InputProps } from "./radix-input";

export type StatefulInputProps = Omit<InputProps, "onChange"> & {
  onChange?: (value: string | number) => void;
  /**
   * @default false
   */
  debounce?: boolean;
  /**
   * @default 200 milliseconds
   */
  debounceTimeout?: number;
};

const DEBOUNCE_DEFAULT_TIMEOUT = 200;

/**
 * Input with internal state.
 *
 * It can track external changes with a "value" and "onChange" (Controlled).
 *
 * It can track async changes with a "value" and "onChange" (Async Controlled).
 *
 * It can debounce changes to only submit latest value (Debounced).

 */
export const StatefulInput = forwardRef(
  (
    {
      children,
      value = "",
      defaultValue = "",
      onChange,
      debounce = false,
      debounceTimeout = DEBOUNCE_DEFAULT_TIMEOUT,
      ...props
    }: StatefulInputProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    const [localValue, setLocalValue] = useState<string | number>(
      (value as string | number) || (defaultValue as string | number)
    );

    const [, cancel] = useDebounce(
      () => {
        if (debounce && onChange) {
          onChange(localValue);
        }
      },
      debounceTimeout,
      [localValue]
    );

    //AC: We also track if the value from outside has changed, like during a fetch event. If this happens then we update the internal state.
    useEffect(() => {
      if (value) {
        setLocalValue(value);
      }
    }, [value]);

    return (
      <CustomInput
        value={localValue}
        defaultValue={defaultValue}
        onChange={({ currentTarget }: FormEvent<HTMLInputElement>) => {
          setLocalValue(currentTarget.value);

          if (!debounce && onChange) {
            onChange(currentTarget.value);
          }
        }}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </CustomInput>
    );
  }
);

StatefulInput.displayName = "StatefulInput";

export default StatefulInput;
