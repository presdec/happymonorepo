import { FocusRingAria } from "@react-aria/focus";
import styled, { css } from "styled-components";
import { color, flexbox, FlexboxProps, space, variant } from "styled-system";

import { rotate } from "../../themes/theme-builder/shared/keyframes";
import {
  buttonActiveVariants,
  buttonFontVariants,
  buttonHoverVariants,
  buttonKindVariants,
  buttonSizeVariants,
} from "./button-variants";
import PrimitiveButton from "./primitive/button";

// export enum BUTTON_KIND {
//   primary = "primary",
//   secondary = "secondary",
//   tertiary = "tertiary",
// }
export type BUTTON_KIND = "primary" | "secondary" | "tertiary";

// export enum BUTTON_SIZE {
//   default = "default",
//   large = "large",
//   mini = "mini",
// }

export type BUTTON_SIZE = "default" | "large" | "mini";

export type StyledButtonProps = FlexboxProps &
  Partial<FocusRingAria> & {
    // size?: BUTTON_SIZE;
    size?: BUTTON_SIZE;
    color?: string;
    /** Defines the kind (purpose) of a button */
    kind?: BUTTON_KIND;
    isSelected?: boolean;
  };

export const ButtonMixin = css<StyledButtonProps>`
  display: inline-flex;
  gap: 0.5em;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};

  box-shadow: none;

  border-width: 0;
  border-style: none;

  border-radius: ${({ theme }) => theme.borders.buttonBorderRadius};

  ${({ theme }) =>
    variant({
      prop: "kind",
      variants: {
        primary: {
          //TODO: ADD A TOKEN FOR THIS
          boxShadow: theme.lighting.shadow600,
        },
        secondary: {
          border: `1px solid ${theme.colors.buttonBorderColor}`,
        },
      },
    })}

  outline: none;

  text-decoration: none;
  -web-kit-appearance: none;
  transition-property: background;
  transition-duration: ${({ theme }) => theme.animation.timing200};
  transition-timing-function: ${({ theme }) => theme.animation.linearCurve};

  cursor: pointer;
  margin-left: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;

  &[data-focus-visible="true"] {
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.colors.accent};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.buttonDisabledFill};
    color: ${({ theme }) => theme.colors.buttonDisabledText};
  }

  ${({ theme }) => buttonKindVariants(theme)};
  ${({ theme }) => buttonFontVariants(theme)};
  ${({ theme }) => buttonSizeVariants(theme)};
  ${space};
  ${color};
  ${flexbox};

  &:hover {
    ${({ theme }) => buttonHoverVariants(theme)(false, false)};

    &[data-pressed="true"] {
      ${({ theme }) => buttonHoverVariants(theme)(false, true)};
    }
  }

  &:active {
    ${({ theme }) => buttonActiveVariants(theme)};
  }

  &[data-selected="true"] {
    color: ${({ theme }) => theme.colors.buttonPrimaryText};
    background-color: ${({ theme }) => theme.colors.buttonPrimaryFill};
  }

  ${({ isSelected, theme }) => {
    // AC: This is a workaround as the isSelected prop is not being passed to the Primitive
    // The above data selector is what should really work.
    return isSelected
      ? {
          color: theme.colors.buttonPrimaryText,
          backgroundColor: theme.colors.buttonPrimaryFill,
        }
      : "";
  }}
`;
export const StyledBaseButtonRoot = styled(
  PrimitiveButton.Root
)<StyledButtonProps>`
  ${ButtonMixin}
`;

export const StyledButtonEnhancer = styled(PrimitiveButton.Enhancer)`
  display: none;

  &[data-disabled] {
    opacity: 0.4;
  }
  &[data-loading="false"][data-loader="false"] {
    display: block;
  }

  &[data-loading="true"][data-loader="true"] {
    display: block;

    color: ${({ theme }) => theme.colors.buttonPrimaryText};
    animation: ${({ theme }) =>
      css`
        ${rotate} ${theme.animation.timing1000} linear infinite;
      `};
  }
`;
