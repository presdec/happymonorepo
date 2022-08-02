import styled, { css, DefaultTheme } from "styled-components";
import { variant } from "styled-system";

import { rotate } from "../../themes/theme-builder/shared/keyframes";
import InputPrimitive, {
  InputRootProps as PrimitiveInputRootProps,
  SharedInputPropsT,
} from "./primitive/radix-input";

export type InputAppearanceT = "mini" | "default" | "compact" | "large";
export type InputAdjoinedT = "none" | "left" | "right" | "both";
export type InputEnhancerPositionT = "start" | "end";
export type InputDirectionT = "rtl" | "TODO";

export type StyledInputRootProps = PrimitiveInputRootProps & {
  /** Defines styles for inputs that are grouped with other controls. */
  adjoined?: InputAdjoinedT;
  /** Renders UI in provided appearance. */
  appearance?: InputAppearanceT;
  // /** Defines if has a clearable or MaskToggleButton at the end */
  hasIconTrailing?: boolean;
  direction?: InputDirectionT;
};

function getRootPadding(
  variables: DefaultTheme,
  adjoined: InputAdjoinedT,
  direction: InputDirectionT,
  hasIconTrailing: boolean
) {
  const ifLeftPad =
    adjoined === "both" ||
    (adjoined === "left" && direction !== "rtl") ||
    (adjoined === "right" && direction === "rtl") ||
    (hasIconTrailing && direction === "rtl");
  const ifRightPad =
    adjoined === "both" ||
    (adjoined === "right" && direction !== "rtl") ||
    (adjoined === "left" && direction === "rtl") ||
    (hasIconTrailing && direction !== "rtl");
  return {
    paddingLeft: ifLeftPad ? variables.sizing.scale550 : "0px",
    paddingRight: ifRightPad ? variables.sizing.scale550 : "0px",
  };
}

export const inputRootMixin = css<StyledInputRootProps>`
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  width: 100%;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
  border-bottom-style: solid;

  border-top-left-radius: ${({ theme }) => theme.borders.inputBorderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.borders.inputBorderRadius};
  border-top-right-radius: ${({ theme }) => theme.borders.inputBorderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.borders.inputBorderRadius};

  border-left-color: ${({ theme }) => theme.colors.inputBorder};
  border-right-color: ${({ theme }) => theme.colors.inputBorder};
  border-top-color: ${({ theme }) => theme.colors.inputBorder};
  border-bottom-color: ${({ theme }) => theme.colors.inputBorder};
  background-color: ${({ theme }) => theme.colors.inputFill};

  &[data-disabled] {
    border-left-color: ${({ theme }) => theme.colors.inputFillDisabled};
    border-right-color: ${({ theme }) => theme.colors.inputFillDisabled};
    border-top-color: ${({ theme }) => theme.colors.inputFillDisabled};
    border-bottom-color: ${({ theme }) => theme.colors.inputFillDisabled};
    background-color: ${({ theme }) => theme.colors.inputFillDisabled};
  }

  &[data-focused] {
    border-left-color: ${({ theme }) => theme.colors.borderSelected};
    border-right-color: ${({ theme }) => theme.colors.borderSelected};
    border-top-color: ${({ theme }) => theme.colors.borderSelected};
    border-bottom-color: ${({ theme }) => theme.colors.borderSelected};
    background-color: ${({ theme }) => theme.colors.inputFillActive};
  }

  &[data-error] {
    border-left-color: ${({ theme }) => theme.colors.inputBorderError};
    border-right-color: ${({ theme }) => theme.colors.inputBorderError};
    border-top-color: ${({ theme }) => theme.colors.inputBorderError};
    border-bottom-color: ${({ theme }) => theme.colors.inputBorderError};
    background-color: ${({ theme }) => theme.colors.inputFillError};
  }

  &[data-positive] {
    border-left-color: ${({ theme }) => theme.colors.inputBorderPositive};
    border-right-color: ${({ theme }) => theme.colors.inputBorderPositive};
    border-top-color: ${({ theme }) => theme.colors.inputBorderPositive};
    border-bottom-color: ${({ theme }) => theme.colors.inputBorderPositive};
    background-color: ${({ theme }) => theme.colors.inputFillPositive};
  }

  /* transition-property: border;
  transition-duration: ${({ theme }) => theme.animation.timing200};
  transition-timing-function: ${({ theme }) => theme.animation.easeOutCurve}; */

  ${({ theme }) =>
    variant({
      prop: "appearance",
      variants: {
        mini: {
          ...theme.typography.font100,
        },
        compact: { ...theme.typography.font200 },
        default: { ...theme.typography.font300 },
        large: { ...theme.typography.font400 },
      },
    })}

  ${({
    theme,
    adjoined = "none",
    direction = "rtl",
    hasIconTrailing = false,
  }) => getRootPadding(theme, adjoined, direction, hasIconTrailing)};
`;

export const StyledRadixInputRoot = styled(InputPrimitive.Root).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return defaultValidatorFn(prop);
  },
})<StyledInputRootProps>`
  ${inputRootMixin}
`;

export const inputContainerMixin = css<{
  appearance?: InputAppearanceT;
}>`
  display: flex;
  width: 100%;

  color: ${({ theme }) => theme.colors.contentPrimary};
  background-color: ${({ theme }) => theme.colors.inputFill};

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.inputTextDisabled};
    background-color: ${({ theme }) => theme.colors.inputFillDisabled};
  }

  &[data-focused] {
    color: ${({ theme }) => theme.colors.contentPrimary};
    background-color: ${({ theme }) => theme.colors.inputFillActive};
  }

  &[data-error] {
    color: ${({ theme }) => theme.colors.contentPrimary};
    background-color: ${({ theme }) => theme.colors.inputFillError};
  }

  &[data-positive] {
    color: ${({ theme }) => theme.colors.contentPrimary};
    background-color: ${({ theme }) => theme.colors.inputFillPositive};
  }

  ${({ theme }) =>
    variant({
      prop: "appearance",
      variants: {
        mini: {
          ...theme.typography.font100,
        },
        compact: { ...theme.typography.font200 },
        default: { ...theme.typography.font300 },
        large: { ...theme.typography.font400 },
      },
    })}/* transition-property: background-color;
  transition-duration: ${({ theme }) => theme.animation.timing200};
  transition-timing-function: ${({ theme }) => theme.animation.easeOutCurve}; */
`;

export const StyledRadixInputContainer = styled(InputPrimitive.Container)<{
  appearance?: InputAppearanceT;
}>`
  ${inputContainerMixin}
`;

export const inputMixin = css<{
  adjoined?: InputAdjoinedT;
  appearance?: InputAppearanceT;
}>`
  box-sizing: border-box;
  background-color: transparent;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-style: none;
  border-right-style: none;
  border-top-style: none;
  border-bottom-style: none;
  outline: none;
  width: 100%;
  // See https://stackoverflow.com/a/33811151
  min-width: 0;
  max-width: 100%;
  cursor: text;

  color: ${({ theme }) => theme.colors.contentPrimary};
  caret-color: ${({ theme }) => theme.colors.contentPrimary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.inputTextDisabled};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.inputTextDisabled};
    caret-color: ${({ theme }) => theme.colors.contentPrimary};
    ::placeholder {
      color: ${({ theme }) => theme.colors.inputPlaceholderDisabled};
    }
  }

  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;

  ${({ theme }) =>
    variant({
      prop: "appearance",
      variants: {
        mini: {
          ...theme.typography.font100,
          paddingTop: theme.sizing.scale100,
          paddingBottom: theme.sizing.scale100,
          paddingLeft: theme.sizing.scale550,
          paddingRight: theme.sizing.scale550,
        },
        compact: {
          ...theme.typography.font200,
          paddingTop: theme.sizing.scale200,
          paddingBottom: theme.sizing.scale200,
          paddingLeft: theme.sizing.scale550,
          paddingRight: theme.sizing.scale550,
        },
        default: {
          ...theme.typography.font300,
          paddingTop: theme.sizing.scale400,
          paddingBottom: theme.sizing.scale400,
          paddingLeft: theme.sizing.scale550,
          paddingRight: theme.sizing.scale550,
        },
        large: {
          ...theme.typography.font400,
          paddingTop: theme.sizing.scale550,
          paddingBottom: theme.sizing.scale550,
          paddingLeft: theme.sizing.scale550,
          paddingRight: theme.sizing.scale550,
        },
      },
    })}
`;

export const StyledRadixInput = styled(InputPrimitive.Input)<{
  adjoined?: InputAdjoinedT;
  appearance?: InputAppearanceT;
}>`
  ${inputMixin}
`;

export const StyledRadixBaseInput = styled(InputPrimitive.BaseInput)``;

export const StyledInputEnhancer = styled(InputPrimitive.Enhancer)<
  SharedInputPropsT & {
    position?: InputEnhancerPositionT;
    appearance?: InputAppearanceT;
  }
>`
  display: none;

  &[data-loading="false"][data-loader="false"] {
    display: flex;
  }

  &[data-loading="true"][data-loader="true"] {
    display: flex;
    padding: 0 1.5em;

    color: ${({ theme }) => theme.colors.contentPrimary};
    animation: ${({ theme }) =>
      css`
        ${rotate} ${theme.animation.timing1000} linear infinite;
      `};
  }

  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.contentPrimary};
  background-color: transparent;

  ${({ theme }) =>
    variant({
      prop: "appearance",
      variants: {
        mini: {
          ...theme.typography.font100,
          paddingRight: theme.sizing.scale400,
          paddingLeft: theme.sizing.scale400,
        },
        compact: {
          ...theme.typography.font200,
          paddingRight: theme.sizing.scale400,
          paddingLeft: theme.sizing.scale400,
        },
        default: {
          ...theme.typography.font300,
          paddingRight: theme.sizing.scale300,
          paddingLeft: theme.sizing.scale300,
        },
        large: {
          ...theme.typography.font400,
          paddingRight: theme.sizing.scale200,
          paddingLeft: theme.sizing.scale200,
        },
      },
    })};

  /* TODO: check that this is not just ::disabled */
  &[data-disabled] {
    color: ${({ theme }) => theme.colors.inputEnhancerTextDisabled};
    background-color: ${({ theme }) => theme.colors.inputFillDisabled};
  }

  &[data-focused] {
    color: ${({ theme }) => theme.colors.contentPrimary};
    background-color: ${({ theme }) => theme.colors.inputFillActive};
  }

  &[data-error] {
    color: ${({ theme }) => theme.colors.contentPrimary};
    background-color: ${({ theme }) => theme.colors.inputFillError};
  }

  &[data-positive] {
    color: ${({ theme }) => theme.colors.contentPrimary};
    background-color: ${({ theme }) => theme.colors.inputFillPositive};
  }
`;
// transition-property: color, background-color;
// transition-duration: ${({ theme }) => theme.animation.timing200};
// transition-timing-function: ${({ theme }) => theme.animation.easeOutCurve};

export const StyledMaskToggleButton = styled(
  InputPrimitive.MaskToggle
).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return defaultValidatorFn(prop);
  },
})<{
  appearance?: InputAppearanceT;
  isFocusVisible?: boolean;
}>`
  display: flex;
  align-items: center;
  border-top-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-right-style: none;
  background: none;
  color: ${({ theme }) => theme.colors.contentPrimary};
  outline: ${({ theme, isFocusVisible }) =>
    isFocusVisible ? `solid 3px ${theme.colors.accent}` : "none"};

  ${({ theme }) =>
    variant({
      prop: "appearance",
      variants: {
        mini: {
          paddingRight: theme.sizing.scale400,
          paddingLeft: theme.sizing.scale400,
        },
        compact: {
          paddingRight: theme.sizing.scale400,
          paddingLeft: theme.sizing.scale400,
        },
        default: {
          paddingRight: theme.sizing.scale300,
          paddingLeft: theme.sizing.scale300,
        },
        large: {
          paddingRight: theme.sizing.scale200,
          paddingLeft: theme.sizing.scale200,
        },
      },
    })}
`;

export const StyledClearTriggerContainer = styled(
  InputPrimitive.ClearTriggerContainer
).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return defaultValidatorFn(prop);
  },
})<{
  appearance: InputAppearanceT;
  alignTop: boolean;
}>`
  display: flex;
  align-items: ${({ alignTop }) => (alignTop ? "flex-start" : "center")};
  padding-top: ${({ theme, alignTop }) =>
    alignTop ? theme.sizing.scale500 : "0px"};
  color: ${({ theme }) => theme.colors.contentPrimary};

  ${({ theme }) =>
    variant({
      prop: "appearance",
      variants: {
        mini: {
          paddingRight: theme.sizing.scale200,
          paddingLeft: theme.sizing.scale200,
        },
        compact: {
          paddingRight: theme.sizing.scale200,
          paddingLeft: theme.sizing.scale200,
        },
        default: {
          paddingRight: theme.sizing.scale100,
          paddingLeft: theme.sizing.scale100,
        },
        large: {
          paddingRight: theme.sizing.scale0,
          paddingLeft: theme.sizing.scale0,
        },
      },
    })}
`;

export const StyledClearTrigger = styled(InputPrimitive.ClearTrigger)<{
  appearance: InputAppearanceT;
}>`
  cursor: pointer;
  outline: none;

  ${({ theme }) =>
    variant({
      prop: "appearance",
      variants: {
        mini: {
          fontSize: "14px",
        },
        compact: { fontSize: "14px" },
        default: { fontSize: "16px" },
        large: { fontSize: "22px" },
      },
    })}

  &[data-focus-visible] {
    outline: solid 1px ${({ theme }) => theme.colors.accent};
  }
`;

export const StyledRadixMaskedInput = styled(InputPrimitive.MaskedInput)``;
