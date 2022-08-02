import * as Slider from "@radix-ui/react-slider";
import { SliderProps as BaseSliderProps } from "@radix-ui/react-slider";
import { ForwardedRef } from "react";

export type {
  SliderHorizontalProps,
  SliderOrientationProps,
  SliderRangeProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderVerticalProps,
  Direction,
  SliderProps as BaseSliderProps,
} from "@radix-ui/react-slider";

export type SliderProps = BaseSliderProps & {
  onFinalChange?: (value: number[]) => void;
  ref?: ForwardedRef<HTMLSpanElement>;
};

export { Slider };

export default Slider;
