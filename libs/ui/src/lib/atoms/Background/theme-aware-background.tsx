import { FC } from "react";

import {
  StyledBackgroundProps,
  StyledThemeAwareBackground,
} from "./styled-components";

/**
 *
 * @deprecated
 */
export const ThemeAwareBackground: FC<StyledBackgroundProps> = ({
  children,
  className = "",
  height,
}) => {
  return (
    <StyledThemeAwareBackground className={className} height={height}>
      {children}
    </StyledThemeAwareBackground>
  );
};

export default ThemeAwareBackground;
