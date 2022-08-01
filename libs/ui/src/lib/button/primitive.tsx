import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { Primitive } from '@radix-ui/react-primitive';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { AriaButtonProps } from '@react-types/button';
import { omit } from 'ramda';
import React, { ForwardedRef } from 'react';

/* -------------------------------------------------------------------------------------------------
 * ButtonRoot
 * -----------------------------------------------------------------------------------------------*/

export enum BUTTON_KIND {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export enum BUTTON_SIZE {
  default = 'default',
  large = 'large',
  mini = 'mini',
}

export type ButtonProps = {
  href?: string;
  target?: string;
  download?: string;
  disabled?: boolean;
  /** A helper rendered at the end of the button. */
  endEnhancer?: () => React.ReactNode;
  /** Show loading button style and spinner. */
  isLoading?: boolean;
  /** Defines the kind (purpose) of a button */
  kind?: BUTTON_KIND;
  /** @deprecated Please use onPress instead*/
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** A helper rendered at the start of the button. */
  startEnhancer?: () => React.ReactNode;
  /** A helper rendered as a loading state. */
  loadingEnhancer?: () => React.ReactNode;
  className?: string;
  forwardedRef?: ForwardedRef<ButtonProps>;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /** Used in combination with ButtonGroup */
  isSelected?: boolean;
} & AriaButtonProps;

const BUTTON_ROOT_NAME = 'ButtonRoot';
const BUTTON_ROOT_DEFAULT_TAG = 'button';

export type ButtonRootPrimitive = Polymorphic.ForwardRefComponent<
  typeof BUTTON_ROOT_DEFAULT_TAG,
  ButtonProps
>;

/**
 * `ButtonRoot` is the base element that renders a `button`.
 */
export const ButtonRoot = React.forwardRef((props, forwardedRef) => {
  const {
    as = BUTTON_ROOT_DEFAULT_TAG,
    onClick: deprecatedOnClick,
    isLoading,
    onPress,
    disabled,
    isSelected,
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
      elementType: as,
    },
    forwardedRef
  );

  const { isFocusVisible, isFocused, focusProps } = useFocusRing();

  const defaultProps = omit(
    ['forwardedRef'],
    mergeProps(buttonRootProps, buttonProps, focusProps)
  );

  return (
    <Primitive
      data-focus-visible={isFocusVisible ? 'true' : 'false'}
      data-focused={isFocused ? 'true' : 'false'}
      data-pressed={isPressed ? 'true' : 'false'}
      data-selected={isSelected ? 'true' : 'false'}
      data-sq="button-root"
      {...(defaultProps as any)}
      as={as}
      ref={props.forwardedRef || forwardedRef}
    />
  );
}) as ButtonRootPrimitive;

ButtonRoot.displayName = BUTTON_ROOT_NAME;

/* -------------------------------------------------------------------------------------------------
 * ButtonContent
 * -----------------------------------------------------------------------------------------------*/

export type ButtonContentProps = Pick<
  ButtonProps,
  'startEnhancer' | 'endEnhancer' | 'isLoading' | 'loadingEnhancer'
>;

const BUTTON_CONTENT_NAME = 'ButtonContent';
const BUTTON_CONTENT_DEFAULT_TAG = 'span';

export type ButtonContentPrimitive = Polymorphic.ForwardRefComponent<
  typeof BUTTON_CONTENT_DEFAULT_TAG,
  ButtonContentProps
>;

/**
 * `ButtonContent` contains the content of a `Button`.
 */
export const ButtonContent = React.forwardRef((props, forwardedRef) => {
  const { startEnhancer, endEnhancer, loadingEnhancer, isLoading, children } =
    props;

  return (
    <React.Fragment>
      {isLoading ? null : startEnhancer && startEnhancer()}

      {children}

      {isLoading ? null : endEnhancer && endEnhancer()}
    </React.Fragment>
  );
}) as ButtonContentPrimitive;

ButtonContent.displayName = BUTTON_CONTENT_NAME;

/* -------------------------------------------------------------------------------------------------
 * ButtonLoadingContainer
 * -----------------------------------------------------------------------------------------------*/
export type ButtonLoadingContainerProps = Pick<ButtonProps, 'isLoading'>;

const BUTTON_LOADING_CONTAINER_NAME = 'ButtonLoadingContainer';
const BUTTON_LOADING_CONTAINER_DEFAULT_TAG = 'span';

export type ButtonLoadingContainerPrimitive = Polymorphic.ForwardRefComponent<
  typeof BUTTON_LOADING_CONTAINER_DEFAULT_TAG,
  ButtonLoadingContainerProps
>;

/**
 * `ButtonLoadingContainer` handles animations for any a `loadingEnhancer` used in `ButtonContent`.
 */
export const ButtonLoadingContainer = React.forwardRef(
  (props, forwardedRef) => {
    const {
      as = BUTTON_LOADING_CONTAINER_DEFAULT_TAG,
      isLoading,
      children,
      ...buttonLoadingContainerProps
    } = props;

    return isLoading ? (
      <Primitive
        {...buttonLoadingContainerProps}
        as={as}
        ref={forwardedRef}
        data-loading={isLoading ? 'true' : 'false'}
      >
        {children}
      </Primitive>
    ) : null;
  }
) as ButtonLoadingContainerPrimitive;

ButtonLoadingContainer.displayName = BUTTON_LOADING_CONTAINER_NAME;

export default {
  Root: ButtonRoot,
  Content: ButtonContent,
  SpinnerContainer: ButtonLoadingContainer,
};
