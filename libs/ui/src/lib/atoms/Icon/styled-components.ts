import styled from "styled-components";
import { variant } from "styled-system";

import { Icon } from "./primitive/icon";

export type StyledIconProps = {
  color?: string;
  variant?: "primary" | "secondary";
};

const defaultProps = (props: StyledIconProps) => ({
  variant: props.variant || "secondary",
});

export const StyledIcon = styled(Icon).attrs(defaultProps)<StyledIconProps>`
  display: inline-block;
  vertical-align: middle;

  ${({ theme, color }) =>
    variant({
      // prop: "kind",
      variants: {
        primary: {
          color: color || theme.colors.contentPrimary,
        },
        secondary: {
          color: color || theme.colors.contentSecondary,
        },
      },
    })}
`;
