import styled from "styled-components";

import { Progress as ProgressPrimitive } from "./primitive/progress";

export const StyledProgress = styled(ProgressPrimitive.Root).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return defaultValidatorFn(prop);
  },
})<{
  zIndex?: number;
}>`
  position: ${({ zIndex }) => (zIndex ? "absolute" : "relative")};
  z-index: ${({ zIndex }) => zIndex || 0};
  overflow: hidden;
  background-color: ${({ theme, zIndex }) =>
    zIndex && zIndex !== 1
      ? "transparent"
      : theme.colors.progressbarTrackBackGround};
  border-radius: 99999px;
  width: 100%;
  height: 0.25em;
`;

export const StyledProgressIndicator = styled(ProgressPrimitive.Indicator)<{
  color?: string;
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width || "100%"};
  height: 100%;
  background-color: ${({ theme, color }) =>
    color || theme.colors.progressbarTrackFill};
  border-radius: 99999px;
  transition: ${({ theme }) =>
    `width ${theme.animation.timing600} ${theme.animation.easeInCurve}`};
`;

export const StyledProgressVertical = styled(StyledProgress)`
  width: 0.25em;
  height: 100%;
  transform: rotate(180deg);
`;

export const StyledProgressIndicatorVertical = styled(StyledProgressIndicator)`
  width: 100%;
  height: ${({ height }) => height || "100%"};
  transform: rotate(180deg);
`;

export const StyledProgressRoot = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.progressbarTrackBackGround};
`;
