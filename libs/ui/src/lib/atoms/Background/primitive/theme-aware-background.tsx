/* eslint-disable react/jsx-pascal-case */
import type * as Radix from "@radix-ui/react-primitive";
import { Primitive } from "@radix-ui/react-primitive";
import { forwardRef, ReactNode } from "react";

/* -------------------------------------------------------------------------------------------------
 * ThemeAwareBackground
 * -----------------------------------------------------------------------------------------------*/
type ThemeAwareBackgroundImplElement = React.ElementRef<typeof Primitive.div>;

type PrimitiveThemeAwareBackgroundProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.div
>;

export interface ThemeAwareBackgroundProps
  extends PrimitiveThemeAwareBackgroundProps {
  id?: string;
  children?: ReactNode;
}

const THEME_AWARE_BACKGROUND_NAME = "ThemeAwareBackground";

/**
 * `ThemeAwareBackground` handles animations for any a `loadingEnhancer` used in `ButtonContent`.
 */
export const ThemeAwareBackground = forwardRef<
  ThemeAwareBackgroundImplElement,
  ThemeAwareBackgroundProps
>((props, forwardedRef) => {
  const { children, ...themeAwareBackgroundProps } = props;

  return (
    <Primitive.div
      data-id="layout-theme-aware-background"
      {...themeAwareBackgroundProps}
      ref={forwardedRef}
    >
      {children}
    </Primitive.div>
  );
});

ThemeAwareBackground.displayName = THEME_AWARE_BACKGROUND_NAME;

export default {
  Root: ThemeAwareBackground,
};
