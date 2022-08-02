/* eslint-disable react/jsx-pascal-case */
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { AccessibleIconProps } from "@radix-ui/react-accessible-icon";
import type * as Radix from "@radix-ui/react-primitive";
import { forwardRef } from "react";

import { Primitive } from "../../../radix-utils";

/* -------------------------------------------------------------------------------------------------
 * Icon
 * -----------------------------------------------------------------------------------------------*/

type IconImplElement = React.ElementRef<typeof Primitive.svg>;

type PrimitiveIconProps = Radix.ComponentPropsWithoutRef<typeof Primitive.svg>;

export type IconProps = PrimitiveIconProps &
  Omit<FontAwesomeIconProps, "icon"> &
  AccessibleIconProps & {
    icon: string | IconDefinition;
  };

export const Icon = forwardRef<IconImplElement, IconProps>(
  (
    {
      icon,
      className = "",
      onClick,
      size = "lg",
      color,
      viewBox,
      label,
      ...props
    },
    forwardedRef
  ) => {
    if (typeof icon === "string") {
      const sizes: Record<string, number> = {
        xs: 0.5,
        lg: 2,
        sm: 1,
        "1x": 1,
        "2x": 2,
        "3x": 3,
        "4x": 4,
        "5x": 5,
        "6x": 6,
        "7x": 7,
        "8x": 8,
        "9x": 9,
        "10x": 10,
      };

      return (
        <AccessibleIcon.Root label={label}>
          <svg
            ref={forwardedRef}
            onClick={onClick}
            aria-hidden="true"
            className={className}
            viewBox={viewBox ? viewBox : "0 0 16 16"}
            width={"1em"}
            height={"1em"}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="none"
            fillRule="evenodd"
            clipRule="evenodd"
            fontSize={size ? `${sizes[size]}em` : "1em"}
          >
            <path fill={"currentColor"} d={icon} />
          </svg>
        </AccessibleIcon.Root>
      );
    }

    return (
      <AccessibleIcon.Root label={label}>
        <FontAwesomeIcon
          icon={icon}
          aria-hidden="true"
          className={className}
          size={size}
          onClick={onClick}
          viewBox={viewBox ? viewBox : "0 0 512 512"}
          forwardedRef={forwardedRef}
          {...props}
        />
      </AccessibleIcon.Root>
    );
  }
);

Icon.displayName = "Icon";

export type { IconDefinition };

export default Icon;
