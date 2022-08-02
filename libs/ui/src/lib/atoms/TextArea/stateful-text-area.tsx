import {
  FormEvent,
  ForwardedRef,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { useDebounce } from "react-use";

import { TextArea, TextAreaProps } from "./text-area";

export type StatefulTextAreaProps = Omit<TextAreaProps, "onChange"> & {
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
export const StatefulTextArea = forwardRef(
  (
    {
      children,
      value = "",
      defaultValue = "",
      onChange,
      debounce = false,
      debounceTimeout = DEBOUNCE_DEFAULT_TIMEOUT,
      ...props
    }: StatefulTextAreaProps,
    forwardedRef: ForwardedRef<HTMLTextAreaElement>
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
      <TextArea
        value={localValue}
        defaultValue={defaultValue}
        onChange={({ currentTarget }: FormEvent<HTMLTextAreaElement>) => {
          setLocalValue(currentTarget.value);
        }}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </TextArea>
    );
  }
);

StatefulTextArea.displayName = "StatefulTextArea";

export default StatefulTextArea;
