/* eslint-disable react/jsx-pascal-case */
import type * as Radix from "@radix-ui/react-primitive";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { AriaButtonProps } from "@react-types/button";
import * as React from "react";
import { ForwardedRef } from "react";

import { Primitive } from "../../../radix-utils";

/* -------------------------------------------------------------------------------------------------
 * ButtonRoot
 * -----------------------------------------------------------------------------------------------*/

type ButtonImplElement = React.ElementRef<typeof Primitive.button>;

type PrimitiveButtonProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.button
>;

export interface ButtonBaseProps extends PrimitiveButtonProps {
  href?: string;
  target?: string;
  download?: string;
  disabled?: boolean;
  //TODO: We could build a context and pass isLoading down to all other components, but we need to check performance
  /** Show loading button style and spinner. */
  isLoading?: boolean;

  /** @deprecated Please use onPress instead*/
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  forwardedRef?: ForwardedRef<ButtonImplElement>;
  /** Used in combination with ButtonGroup */
  isSelected?: boolean;
}

export type ButtonProps = ButtonBaseProps & AriaButtonProps;

const BUTTON_ROOT_NAME = "ButtonRoot";
/**
 * `ButtonRoot` is the base element that renders a `button`.
 */
export const ButtonRoot = React.forwardRef<ButtonImplElement, ButtonProps>(
  (props, forwardedRef) => {
    const {
      children,
      onClick: deprecatedOnClick,
      isLoading,
      onPress,
      disabled,
      isSelected,
      // startEnhancer,
      // endEnhancer,
      ...buttonRootProps
    } = props;

    //** useButton will flag a warning to encourage using onPress instead of onClick */
    const { buttonProps, isPressed } = useButton(
      {
        ...props,
        onPress,
        isDisabled: isLoading || disabled,
        //** But if we do use onClick we make sure it's not clickable when loading */
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - undocumented
        onClick: deprecatedOnClick
          ? (event: React.MouseEvent<HTMLButtonElement>) => {
              // We stop click events when the button is loading
              if (isLoading) {
                event.preventDefault();
                return;
              }

              deprecatedOnClick(event);
            }
          : undefined,
        elementType: "button",
      },
      forwardedRef
    );

    const { isFocusVisible, isFocused, focusProps } = useFocusRing();

    const mergedProps = mergeProps(buttonRootProps, buttonProps, focusProps);
    const { forwardedRef: reForwardedRef, ...defaultProps } = mergedProps;

    return (
      <Primitive.button
        data-focus-visible={isFocusVisible ? "true" : "false"}
        // data-focused={isFocused ? "true" : "false"}
        // data-pressed={isPressed ? "true" : "false"}
        // data-selected={isSelected ? "true" : "false"}
        data-id="button-root"
        {...defaultProps}
        ref={reForwardedRef || forwardedRef}
      >
        {children}
      </Primitive.button>
    );
  }
);

ButtonRoot.displayName = BUTTON_ROOT_NAME;

/* -------------------------------------------------------------------------------------------------
 * ButtonEnhancer
 * -----------------------------------------------------------------------------------------------*/
type ButtonEnhancerImplElement = React.ElementRef<typeof Primitive.span>;

type PrimitiveButtonEnhancerProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.span
>;

export interface ButtonEnhancerBaseProps extends PrimitiveButtonEnhancerProps {
  id?: string;
  type?: "none" | "loading";
}

export type ButtonEnhancerProps = ButtonEnhancerBaseProps &
  Pick<ButtonProps, "isLoading" | "disabled">;

const BUTTON_ENHANCER_NAME = "ButtonEnhancer";

/**
 * `ButtonEnhancer` handles visibility and animations for any a `enhancer` used in `Button`.
 */
export const ButtonEnhancer = React.forwardRef<
  ButtonEnhancerImplElement,
  ButtonEnhancerProps
>((props, forwardedRef) => {
  const {
    isLoading,
    type = "none",
    children,
    disabled,
    ...buttonEnhancerProps
  } = props;

  return children ? (
    <Primitive.span
      {...buttonEnhancerProps}
      ref={forwardedRef}
      data-loading={isLoading ? "true" : "false"}
      data-loader={type === "loading" ? "true" : "false"}
      data-disabled={disabled ? "" : undefined}
    >
      {typeof children === "function" ? children(props) : null}
    </Primitive.span>
  ) : null;
});

ButtonEnhancer.displayName = BUTTON_ENHANCER_NAME;

export default {
  Root: ButtonRoot,
  Enhancer: ButtonEnhancer,
};
