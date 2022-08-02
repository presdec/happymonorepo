import { FC, useEffect, useState } from "react";
import { useTimeoutFn } from "react-use";

import {
  ProgressIndicatorProps,
  ProgressProps as BaseProgressProps,
} from "./primitive/progress";
import {
  StyledProgress,
  StyledProgressIndicator,
  StyledProgressIndicatorVertical,
  StyledProgressVertical,
} from "./styled-components";

export type ProgressProps = BaseProgressProps &
  ProgressIndicatorProps & {
    orientation?: "vertical" | "horizontal";
    zIndex?: number;
    animate?: boolean;
  };

export const DEFAULT_PROGRESS_TIMEOUT = 500;

export const useProgressValueState = (
  initialState: ProgressProps["value"] | (() => ProgressProps["value"]),
  max = 100
) => {
  const [value, setValue] = useState<ProgressProps["value"]>(initialState);
  const percentage = value != null ? Math.round((value / max) * 100) : null;

  return [value, percentage, setValue] as const;
};

export const Progress: FC<ProgressProps> = ({
  value,
  orientation,
  max,
  color,
  animate = true,
  ...props
}) => {
  const [progress, percentage, setProgress] = useProgressValueState(0, max);

  useTimeoutFn(() => {
    if (animate) {
      setProgress(value);
    }
  }, DEFAULT_PROGRESS_TIMEOUT);

  useEffect(() => {
    setProgress(value);
  }, [value, setProgress]);

  if (orientation === "vertical") {
    return (
      <StyledProgressVertical value={progress} {...props}>
        <StyledProgressIndicatorVertical
          height={`${percentage}%`}
          color={color}
        />
      </StyledProgressVertical>
    );
  }

  return (
    <StyledProgress value={progress} {...props}>
      <StyledProgressIndicator width={`${percentage}%`} color={color} />
    </StyledProgress>
  );
};

export const ProgressIndicator = StyledProgressIndicator;

export default Progress;
