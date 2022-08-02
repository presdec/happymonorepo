import { ForwardedRef, forwardRef, useEffect, useState } from "react";

import { Slider, SliderProps } from "./slider";

export type StatefulSliderProps = SliderProps;
/**
 * Slider with internal state.
 *
 * It can track external changes with a "value" and "onChange" (Controlled).
 *
 * It can track async changes with a "value" and "onChange" (Async Controlled).
 *
 * It can debounce changes to only submit latest value (Debounced).

 */
export const StatefulSlider = forwardRef(
  (
    {
      value,
      children,
      onFinalChange = () => ({}),
      onValueChange = () => ({}),
      defaultValue,
      ...props
    }: StatefulSliderProps,
    forwardedRef: ForwardedRef<HTMLSpanElement>
  ) => {
    const [localValues, setLocalValues] = useState(value || defaultValue);

    //AC: We also track if the value from outside has changed, like during a fetch event. If this happens then we update the internal state.
    useEffect(() => {
      if (value) {
        setLocalValues(value);
      }
    }, [value]);

    return (
      <Slider
        value={localValues}
        defaultValue={defaultValue}
        onValueChange={(value) => {
          setLocalValues(value);
        }}
        onFinalChange={(value) => {
          onFinalChange(value);
        }}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </Slider>
    );
  }
);

StatefulSlider.displayName = "StatefulSlider";

export default StatefulSlider;
