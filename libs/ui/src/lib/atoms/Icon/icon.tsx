import { ForwardedRef, forwardRef } from "react";

import type {
  IconDefinition,
  IconProps as BaseIconProps,
} from "./primitive/icon";
import { StyledIcon, StyledIconProps } from "./styled-components";

export type IconProps = StyledIconProps & BaseIconProps;
export type { IconDefinition };

export const Icon = forwardRef(
  (
    { children, ...props }: IconProps,
    forwardedRef: ForwardedRef<SVGSVGElement>
  ) => {
    return (
      <StyledIcon {...props} ref={forwardedRef}>
        {children}
      </StyledIcon>
    );
  }
);

Icon.displayName = "Icon";
// export const Icon: FC<IconProps> = ({ children, ...props }) => {
//   return <StyledIcon {...props}>{children}</StyledIcon>;
// };

export default Icon;
