import { usePrevious } from "@radix-ui/react-use-previous";
import { FC, forwardRef } from "react";

import {
  SliderHorizontalProps,
  SliderOrientationProps,
  SliderProps as BaseSliderProps,
  SliderRangeProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderVerticalProps,
} from "./primitive/slider";
import {
  StyledSliderContent,
  StyledSliderInnerContent,
  StyledSliderRange,
  StyledSliderRangeProps,
  StyledSliderRoot,
  StyledSliderRootProps,
  StyledSliderThumb,
  StyledSliderTrack,
  StyledSliderValue,
  StyledSliderValues,
} from "./styled-components";

export type {
  SliderHorizontalProps,
  SliderOrientationProps,
  SliderRangeProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderVerticalProps,
};

export const SliderRoot = StyledSliderRoot;
export const SliderTrack = StyledSliderTrack;
export const SliderRange = StyledSliderRange;
export const SliderThumb = StyledSliderThumb;
export const SliderValue = StyledSliderValue;
export const SliderContent = StyledSliderContent;
export const SliderInnerContent = StyledSliderInnerContent;
export const SliderValues = StyledSliderValues;

export type ControlledSliderProps = BaseSliderProps &
  StyledSliderRangeProps &
  StyledSliderRootProps;
/**
 *
 * A styled Slider that adds the feature to send a final change after releasing the thumb element. Useful in async calls.
 */
const ControlledSlider: FC<ControlledSliderProps> = forwardRef(
  (
    {
      children,
      value,
      defaultValue,
      onFinalChange = () => ({}),
      onValueChange = () => ({}),
      orientation,
      rangeColor,
      order,
      ...props
    },
    forwardedRef
  ) => {
    /**
     *
     * use a map to render the thumbs
     */
    // const { isMultiThumb } = useSlider({
    //   value,
    //   defaultValue,
    // });

    const innerValues = value || defaultValue;

    if (innerValues && innerValues?.length > 2) {
      console.warn(
        "Slider only accepts 2 values and will render only 2 thumbs"
      );
    }

    const prevFirstValue = usePrevious(innerValues ? innerValues[0] : 0);
    const prevSecondValue = usePrevious(innerValues ? innerValues[1] : 100);

    return (
      <SliderRoot
        value={innerValues}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        orientation={orientation}
        ref={forwardedRef}
        order={order}
        {...props}
      >
        <SliderTrack>
          <SliderRange rangeColor={rangeColor} />
        </SliderTrack>

        {innerValues &&
          innerValues?.map((_, i) => (
            <SliderThumb
              key={i}
              onPointerUp={() => {
                if (value && i === 0) {
                  if (String(prevFirstValue) !== String(innerValues[i])) {
                    onFinalChange(value);
                  }
                }

                if (value && i === 1) {
                  if (String(prevSecondValue) !== String(innerValues[i])) {
                    onFinalChange(value);
                  }
                }
              }}
            />
          ))}

        {/* <StyledSliderThumb
          onPointerUp={() => {
            if (value && String(prevValue) !== String(innerValue)) {
              onFinalChange(value);
            }
          }}
        /> */}

        {/* {isMultiThumb ? (
          <StyledSliderThumb
            onPointerUp={() => {
              if (value && String(prevValue) !== String(innerValue)) {
                onFinalChange(value);
              }
            }}
          />
        ) : null} */}

        {children}
      </SliderRoot>
    );
  }
);

ControlledSlider.displayName = "ControlledSlider";

export type SliderProps = ControlledSliderProps & {
  valueFormatter?: (value: number) => number | string;
  thumbValue?: "visible" | "hidden"; //TODO
  valueTickBar?: "visible" | "hidden";
  minMaxValues?: "visible" | "hidden";
  /**
   * Useful in forms
   *
   */
  positive?: boolean;
  /**
   * Useful in forms
   */
  error?: boolean;
};

export const Slider: FC<SliderProps> = forwardRef(
  (
    {
      children,
      min,
      max,
      value = [0],
      valueFormatter = (value: number) => value,
      orientation = "horizontal",
      minMaxValues = "visible",
      valueTickBar = "visible",
      positive,
      error,
      rangeColor,
      ...props
    },
    forwardedRef
  ) => {
    const [first, second] = value;

    return (
      <SliderContent>
        <SliderInnerContent data-orientation={orientation}>
          {minMaxValues === "visible" ? (
            <StyledSliderValue order={orientation === "vertical" ? 3 : 1}>
              {valueFormatter(min || min === 0 ? min : 0)}
            </StyledSliderValue>
          ) : null}

          <ControlledSlider
            min={min}
            max={max}
            value={value}
            orientation={orientation}
            order={2}
            ref={forwardedRef}
            rangeColor={rangeColor}
            // data-error={error ? "" : undefined} // Could be useful but unused for now
            // data-positive={positive ? "" : undefined} // Could be useful but unused for now
            {...props}
          ></ControlledSlider>

          {minMaxValues === "visible" ? (
            <StyledSliderValue order={orientation === "vertical" ? 1 : 3}>
              {valueFormatter(max || max === 0 ? max : 100)}
            </StyledSliderValue>
          ) : null}
        </SliderInnerContent>
        {/* // TODO: Replace with a thumb popover */}
        {valueTickBar === "visible" && orientation === "horizontal" ? (
          <SliderValues>
            <SliderValue>{valueFormatter(first)}</SliderValue>
            <SliderValue>{valueFormatter(second)}</SliderValue>
          </SliderValues>
        ) : null}
        {children}
      </SliderContent>
    );
  }
);

Slider.displayName = "Slider";

export default Slider;
