import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, ReactNode } from "react";

import { Icon } from "../Icon/icon";
import { ButtonProps as ButtonBaseProps } from "./primitive/button";
import {
  StyledBaseButtonRoot,
  StyledButtonEnhancer,
  StyledButtonProps,
} from "./styled-components";

export type ButtonProps = StyledButtonProps &
  ButtonBaseProps & {
    /** A helper rendered at the start of the button. */
    startEnhancer?: ReactNode | ((props: ButtonProps) => ReactNode);
    /** A helper rendered at the end of the button. */
    endEnhancer?: ReactNode | ((props: ButtonProps) => ReactNode);
    /** A helper rendered when  button is loading. */
    loadingEnhancer?: ReactNode | ((props: ButtonProps) => ReactNode);
  };

export const BaseButtonRoot = StyledBaseButtonRoot;
export const ButtonEnhancer = StyledButtonEnhancer;
/**
 * Buttons allow users to perform an action or to navigate to another page.
 * They have multiple styles for various needs, and are ideal for calling attention to
 * where a user needs to do something in order to move forward in a flow.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      startEnhancer,
      endEnhancer,
      loadingEnhancer = () => (
        <Icon icon={faCircleNotch} label="loading" color="currentColor" />
      ),
      isLoading,
      kind = "primary",
      size = "default",
      className = "",
      isSelected,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <BaseButtonRoot
        className={className}
        kind={kind}
        size={size}
        isLoading={isLoading}
        isSelected={isSelected}
        forwardedRef={forwardedRef}
        {...props}
      >
        <ButtonEnhancer isLoading={isLoading} disabled={props.disabled}>
          {startEnhancer}
        </ButtonEnhancer>

        {children}

        <ButtonEnhancer isLoading={isLoading} disabled={props.disabled}>
          {endEnhancer}
        </ButtonEnhancer>

        <ButtonEnhancer isLoading={isLoading} type="loading">
          {loadingEnhancer}
        </ButtonEnhancer>
      </BaseButtonRoot>
    );
  }
);

Button.displayName = "Button";

export default Button;
