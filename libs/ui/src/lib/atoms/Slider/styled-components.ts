import styled from "styled-components";

import { Body } from "../../atoms/Typography";
import { Flex } from "../../atoms/View";
import { Slider as SliderPrimitive, SliderProps } from "./primitive/slider";

export const StyledSliderInnerContent = styled(Flex)<
  Pick<SliderProps, "orientation">
>`
  align-items: center;
  justify-content: center;
  gap: 1em;
  height: 100%;

  &[data-orientation="horizontal"] {
    flex-direction: row;
    width: 100%;
  }

  &[data-orientation="vertical"] {
    flex-direction: column;
  }
`;

export type StyledSliderRootProps = { order?: number };

export const StyledSliderRoot = styled(
  SliderPrimitive.Root
)<StyledSliderRootProps>`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;

  order: ${({ order }) => order || undefined};

  &[data-disabled] {
    cursor: not-allowed;
  }

  &[data-orientation="horizontal"] {
    height: 20px;
  }

  &[data-orientation="vertical"] {
    flex-direction: column;
    width: 20px;
    height: 100%;
  }
`;

export const StyledSliderTrack = styled(SliderPrimitive.Track)`
  background-color: ${({ theme }) => theme.colors.sliderTrackFill};
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;

  &[data-orientation="horizontal"] {
    height: 3px;
  }
  &[data-orientation="vertical"] {
    width: 3px;
  }
`;

export type StyledSliderRangeProps = { rangeColor?: string };

export const StyledSliderRange = styled(SliderPrimitive.Range).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return defaultValidatorFn(prop);
  },
})<StyledSliderRangeProps>`
  position: absolute;
  background-color: ${({ theme, rangeColor }) =>
    rangeColor || theme.colors.sliderTrackFillRange};
  border-radius: 9999px;

  &[data-orientation="horizontal"] {
    height: 100%;
  }
  &[data-orientation="vertical"] {
    width: 100%;
  }
`;

export const StyledSliderThumb = styled(SliderPrimitive.Thumb)`
  all: unset;
  display: block;
  width: 20px;
  height: 20px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.lighting.shadow400};
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent200};
  }
  &:focus {
    box-shadow: ${({ theme }) => theme.lighting.shadow600};
  }
`;

export const StyledSliderContent = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  width: 100%;
  height: 100%;
`;

export const StyledSliderValue = styled(Body.Number.LabelMedium)<{
  order?: number;
}>`
  order: ${({ order }) => order || undefined};
`;

export const StyledSliderValues = styled(Flex)`
  align-items: center;
  justify-content: center;
  gap: 1em;
  width: 100%;
  height: 100%;
`;
