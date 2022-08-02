import styled, { DefaultTheme } from "styled-components";
import { variant } from "styled-system";

import {
  CustomInput as Input,
  inputContainerMixin,
  inputMixin,
  inputRootMixin,
} from "../Input";
import { Flex, View } from "../View";
import ComboBoxPrimitive, {
  ComboBoxButtonProps,
  ComboBoxInputProps,
  ComboBoxLabelProps,
  ComboBoxOptionProps,
  ComboBoxOptionsProps,
  ComboBoxRootProps,
} from "./primitive/combo-box";
import SelectPrimitive from "./primitive/radix-select";

export type SelectAppearanceT = "mini" | "default" | "compact" | "large";
export type SelectTypeT = "select" | "search";
export type SelectPositionT = "bottom" | "none";

export type SelectStyledProps = {
  appearance?: SelectAppearanceT;
  kind?: SelectTypeT;
  multi?: boolean;
  isEmpty?: boolean;
  searchable?: boolean;
};

export const StyledSelectRoot = styled(SelectPrimitive.Root)``;

const getPadding = ({
  theme,
  multi,
  isEmpty,
  kind,
}: SelectStyledProps & { theme: DefaultTheme }) => {
  const isSearch = kind === "search";
  const paddingLeft = isSearch
    ? `calc(${theme.sizing.scale1000} - ${theme.sizing.scale0})`
    : theme.sizing.scale400;

  const paddingStartDir: string =
    theme.direction === "rtl" ? "paddingRight" : "paddingLeft";
  const paddingEndDir: string =
    theme.direction === "rtl" ? "paddingLeft" : "paddingRight";

  return variant({
    prop: "appearance",
    variants: {
      mini: {
        ...theme.typography.font100,
        // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
        paddingTop: multi && !isEmpty ? 0 : theme.sizing.scale100,
        paddingBottom: multi && !isEmpty ? 0 : theme.sizing.scale100,
        [paddingStartDir]:
          multi && !isEmpty
            ? `calc(${paddingLeft} - ${theme.sizing.scale0})`
            : paddingLeft,
        [paddingEndDir]: "0",
      },
      compact: {
        ...theme.typography.font200,
        // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
        paddingTop:
          multi && !isEmpty
            ? `calc(${theme.sizing.scale100} - ${theme.sizing.scale0})`
            : theme.sizing.scale200,
        paddingBottom:
          multi && !isEmpty
            ? `calc(${theme.sizing.scale100} - ${theme.sizing.scale0})`
            : theme.sizing.scale200,
        [paddingStartDir]:
          multi && !isEmpty
            ? `calc(${paddingLeft} - ${theme.sizing.scale0})`
            : paddingLeft,
        [paddingEndDir]: "0",
      },
      default: {
        ...theme.typography.font300,
        // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
        paddingTop:
          multi && !isEmpty
            ? `calc(${theme.sizing.scale400} - ${theme.sizing.scale0})`
            : theme.sizing.scale400,
        paddingBottom:
          multi && !isEmpty
            ? `calc(${theme.sizing.scale400} - ${theme.sizing.scale0})`
            : theme.sizing.scale400,
        [paddingStartDir]:
          multi && !isEmpty
            ? `calc(${paddingLeft} + ${theme.sizing.scale0})`
            : paddingLeft,
        [paddingEndDir]: 0,
      },
      large: {
        ...theme.typography.font400,
        // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
        paddingTop:
          multi && !isEmpty
            ? `calc(${theme.sizing.scale600} - ${theme.sizing.scale0})`
            : theme.sizing.scale550,
        paddingBottom:
          multi && !isEmpty
            ? `calc(${theme.sizing.scale600} - ${theme.sizing.scale0})`
            : theme.sizing.scale550,
        [paddingStartDir]:
          multi && !isEmpty
            ? `calc(${paddingLeft} - ${theme.sizing.scale0})`
            : paddingLeft,
        [paddingEndDir]: 0,
      },
    },
  });
};

//TODO: Include variants for a appearance prop
export const StyledTrigger = styled(SelectPrimitive.SelectTrigger).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return defaultValidatorFn(prop);
  },
})<SelectStyledProps>`
  box-sizing: border-box;

  overflow: hidden;
  justify-content: space-between;

  cursor: pointer;

  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  border-radius: ${({ theme }) => theme.borders.inputBorderRadius};
  border: 0.25em solid ${({ theme }) => theme.colors.inputBorder};

  ${({ theme }) => theme.typography.ParagraphSmall}

  background-color: ${({ theme }) => theme.colors.inputFill};
  color: ${({ theme }) => theme.colors.contentPrimary};
  /* box-shadow: 0 2px 10px ${({ theme }) => theme.colors.inputBorder}; */

  &:hover {
    background-color: ${({ theme }) => theme.colors.inputFillActive};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.borderSelected};
    background-color: ${({ theme }) => theme.colors.inputFillActive};
  }

  ${({ theme, multi, isEmpty, kind }) =>
    getPadding({ theme, multi, isEmpty, kind })}

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.inputTextDisabled};
    pointer-events: none;
    cursor: not-allowed;
    /* box-shadow: 0 2px 10px ${({ theme }) =>
      theme.colors.inputFillDisabled}; */
    border: 0.25em solid ${({ theme }) => theme.colors.inputFillDisabled};
    background-color: ${({ theme }) => theme.colors.inputFillDisabled};
  }

  /* if ($isFocused || $isPseudoFocused) {
    return {
      color: colors.contentPrimary,
      borderLeftColor: colors.borderSelected,
      borderRightColor: colors.borderSelected,
      borderTopColor: colors.borderSelected,
      borderBottomColor: colors.borderSelected,
      backgroundColor: colors.inputFillActive,
    };
  } */

  // &[data-searchable] {
  //   color: ${({ theme }) => theme.colors.menuFontDisabled};
  //   pointer-events: none;
  //   cursor: text;
  // }

  // &[data-kind-search] {
  //   color: ${({ theme }) => theme.colors.menuFontDisabled};
  //   pointer-events: none;
  //   cursor: text;
  // }

  &[data-error] {
    /* box-shadow: 0 2px 10px ${({ theme }) =>
      theme.colors.inputBorderError}; */
    border: 0.25em solid ${({ theme }) => theme.colors.inputBorderError};
    background-color: ${({ theme }) => theme.colors.inputFillError};
  }

  &[data-positive] {
    /* box-shadow: 0 2px 10px ${({ theme }) =>
      theme.colors.inputBorderPositive}; */
    border: 0.25em solid ${({ theme }) => theme.colors.inputBorderPositive};
    background-color: ${({ theme }) => theme.colors.inputFillPositive};
  }
`;

export const StyledContent = styled(SelectPrimitive.Content)<{
  width?: string;
  position?: SelectPositionT;
}>`
  /* width: ${({ width }) => width || "98.5%"}; */
  /* margin: 0 0 0 20px; */
  /* TODO: We could hack a solution to push the content below the Trigger */
  /* margin: 90px 0 0 58px; */
`;

//TODO: Workaround to get the styles to work in a portal
export const StyledSelectContentInner = styled(View)`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.menuFill};
  border-radius: ${({ theme }) => theme.borders.popoverBorderRadius};

  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const StyledViewport = styled(SelectPrimitive.Viewport)`
  padding: 0.313em;
`;

//AC: keep pixels or spaces change too drastically with ems
export const StyledItem = styled(SelectPrimitive.Item)`
  ${({ theme }) => theme.typography.ParagraphSmall}
  line-height: 1;
  border-radius: ${({ theme }) => theme.borders.inputBorderRadius};
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.menuFontDefault};

  /* &[data-state="checked"][data-highlighted=""] {
    color: ${({ theme }) => theme.colors.menuFontSelected};
    font-weight: bold;
  } */

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.menuFontDisabled};
    pointer-events: none;
    cursor: not-allowed;
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.menuFillHover};
    color: ${({ theme }) => theme.colors.menuFontHighlighted};
  }
`;

//AC: keep pixels or spaces change too drastically with ems
export const StyledLabel = styled(SelectPrimitive.Label)`
  padding: 0 25px;
  ${({ theme }) => theme.typography.LabelMedium}
  color: ${({ theme }) => theme.colors.menuFontDefault};
`;

export const StyledSeparator = styled(SelectPrimitive.Separator)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.accent500};
  margin: 0.313em;
`;

export const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  color: ${({ theme }) => theme.colors.accent500};
  cursor: default;
`;

export const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  color: ${({ theme }) => theme.colors.accent500};
  cursor: default;
`;

export const StyledSelectIcon = styled(SelectPrimitive.Icon).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return defaultValidatorFn(prop);
  },
})<SelectStyledProps>`
  display: flex;
  align-items: center;

  ${({ theme, multi, isEmpty, kind }) => {
    const isSearch = kind === "search";
    const paddingLeft = isSearch
      ? `calc(${theme.sizing.scale1000} - ${theme.sizing.scale0})`
      : theme.sizing.scale400;

    const paddingStartDir: string =
      theme.direction === "rtl" ? "paddingRight" : "paddingLeft";
    const paddingEndDir: string =
      theme.direction === "rtl" ? "paddingLeft" : "paddingRight";

    return variant({
      prop: "appearance",
      variants: {
        mini: {
          ...theme.typography.font100,
          // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
          paddingTop: multi && !isEmpty ? 0 : theme.sizing.scale100,
          paddingBottom: multi && !isEmpty ? 0 : theme.sizing.scale100,
          [paddingStartDir]: 0,
          [paddingEndDir]:
            multi && !isEmpty
              ? `calc(${paddingLeft} - ${theme.sizing.scale0})`
              : paddingLeft,
        },
        compact: {
          ...theme.typography.font200,
          // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
          paddingTop:
            multi && !isEmpty
              ? `calc(${theme.sizing.scale100} - ${theme.sizing.scale0})`
              : theme.sizing.scale200,
          paddingBottom:
            multi && !isEmpty
              ? `calc(${theme.sizing.scale100} - ${theme.sizing.scale0})`
              : theme.sizing.scale200,
          [paddingStartDir]: 0,
          [paddingEndDir]:
            multi && !isEmpty
              ? `calc(${paddingLeft} - ${theme.sizing.scale0})`
              : paddingLeft,
        },
        default: {
          ...theme.typography.font300,
          // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
          paddingTop:
            multi && !isEmpty
              ? `calc(${theme.sizing.scale400} - ${theme.sizing.scale0})`
              : theme.sizing.scale400,
          paddingBottom:
            multi && !isEmpty
              ? `calc(${theme.sizing.scale400} - ${theme.sizing.scale0})`
              : theme.sizing.scale400,
          [paddingStartDir]: 0,

          [paddingEndDir]:
            multi && !isEmpty
              ? `calc(${paddingLeft} + ${theme.sizing.scale0})`
              : paddingLeft,
        },
        large: {
          ...theme.typography.font400,
          // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
          paddingTop:
            multi && !isEmpty
              ? `calc(${theme.sizing.scale600} - ${theme.sizing.scale0})`
              : theme.sizing.scale550,
          paddingBottom:
            multi && !isEmpty
              ? `calc(${theme.sizing.scale600} - ${theme.sizing.scale0})`
              : theme.sizing.scale550,
          [paddingStartDir]: 0,
          [paddingEndDir]:
            multi && !isEmpty
              ? `calc(${paddingLeft} - ${theme.sizing.scale0})`
              : paddingLeft,
        },
      },
    });
  }}
`;

export const StyledSelectValue = styled(SelectPrimitive.Value).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return defaultValidatorFn(prop);
  },
})<SelectStyledProps>`
  box-sizing: border-box;
  position: relative;

  display: flex;
  align-items: center;

  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;

  flex-wrap: ${({ multi }) => (multi ? "wrap" : "nowrap")};
  overflow: hidden;
  overflow-wrap: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 100%;

  line-height: ${({ theme, searchable }) =>
    searchable ? "theme.font.lineHeight" : "inherit"};
  margin-right: ${({ theme }) =>
    theme.direction === "rtl" ? theme.sizing.scale0 : undefined};

  margin-left: ${({ theme }) =>
    theme.direction === "rtl" ? undefined : theme.sizing.scale0};

  max-width: 100%;

  ${({ theme, multi, isEmpty, kind }) =>
    getPadding({ theme, multi, isEmpty, kind })}
`;

///START EXPERIMENTAL COMBOBOX
export const StyledComboBoxContainer = styled(Flex)`
  gap: 0;
`;

export const StyledComboBoxContent = styled(SelectPrimitive.Content)<{
  width?: string;
  position?: SelectPositionT;
}>`
  /* TODO: We could hack a solution to push the content below the Trigger */
  margin: 90px 0 0 58px;
`;

export const StyledComboBoxInput1 = styled(Input)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-right: 0;
`;

export const StyledComboBoxTrigger = styled(StyledTrigger)`
  max-width: 35px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  &:hover {
    background-color: initial;
  }
`;

export const StyledSelectContentMessage = styled("span")`
  color: ${({ theme }) => theme.colors.contentSecondary};
`;

export const StyledSelectedItemsRoot = styled(Flex)`
  display: flex;
  align-items: center;
  gap: 0.5em;
  width: initial;
`;
///END EXPERIMENTAL COMBOBOX

//HEADLESS COMBOBOX
export const StyledComboBoxRoot = styled(
  ComboBoxPrimitive
)<ComboBoxRootProps>``;

const HInput = ({ ...props }: ComboBoxInputProps) => {
  return <ComboBoxPrimitive.Input as={Input} {...props} />;
};

export const StyledComboBoxInput = styled(HInput)<ComboBoxInputProps>`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-right: 0;
`;

export const StyledComboBoxButton = styled(
  ComboBoxPrimitive.Button
)<ComboBoxButtonProps>`
  box-sizing: border-box;

  overflow: hidden;
  justify-content: space-between;

  cursor: pointer;

  position: relative;
  display: flex;
  align-items: center;

  border-radius: ${({ theme }) => theme.borders.inputBorderRadius};
  border: 0.25em solid ${({ theme }) => theme.colors.inputBorder};

  ${({ theme }) => theme.typography.ParagraphSmall}

  background-color: ${({ theme }) => theme.colors.inputFill};
  color: ${({ theme }) => theme.colors.contentPrimary};
  /* box-shadow: 0 2px 10px ${({ theme }) => theme.colors.inputBorder}; */

  &:hover {
    background-color: ${({ theme }) => theme.colors.inputFillActive};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.borderSelected};
    background-color: ${({ theme }) => theme.colors.inputFillActive};
  }

  /* ${({ theme, multi, isEmpty, kind }) =>
    getPadding({ theme, multi, isEmpty, kind })} */

  :disabled {
    color: ${({ theme }) => theme.colors.inputTextDisabled};
    pointer-events: none;
    cursor: not-allowed;
    /* box-shadow: 0 2px 10px ${({ theme }) =>
      theme.colors.inputFillDisabled}; */
    border: 0.25em solid ${({ theme }) => theme.colors.inputFillDisabled};
    background-color: ${({ theme }) => theme.colors.inputFillDisabled};
  }

  /* if ($isFocused || $isPseudoFocused) {
  return {
    color: colors.contentPrimary,
    borderLeftColor: colors.borderSelected,
    borderRightColor: colors.borderSelected,
    borderTopColor: colors.borderSelected,
    borderBottomColor: colors.borderSelected,
    backgroundColor: colors.inputFillActive,
  };
} */

  // &[data-searchable] {
  //   color: ${({ theme }) => theme.colors.menuFontDisabled};
  //   pointer-events: none;
  //   cursor: text;
  // }

  // &[data-kind-search] {
  //   color: ${({ theme }) => theme.colors.menuFontDisabled};
  //   pointer-events: none;
  //   cursor: text;
  // }

  &[data-error] {
    /* box-shadow: 0 2px 10px ${({ theme }) =>
      theme.colors.inputBorderError}; */
    border: 0.25em solid ${({ theme }) => theme.colors.inputBorderError};
    background-color: ${({ theme }) => theme.colors.inputFillError};
  }

  &[data-positive] {
    /* box-shadow: 0 2px 10px ${({ theme }) =>
      theme.colors.inputBorderPositive}; */
    border: 0.25em solid ${({ theme }) => theme.colors.inputBorderPositive};
    background-color: ${({ theme }) => theme.colors.inputFillPositive};
  }

  max-width: 35px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  &:hover {
    background-color: initial;
  }
`;

export const StyledComboBoxLabel = styled(
  ComboBoxPrimitive.Label
)<ComboBoxLabelProps>``;

export const StyledComboBoxOptions = styled(
  ComboBoxPrimitive.Options
)<ComboBoxOptionsProps>`
  padding: 0;
  margin: 0;

  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.menuFill};
  border-radius: ${({ theme }) => theme.borders.popoverBorderRadius};

  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const StyledComboBoxOption = styled(
  ComboBoxPrimitive.Option
)<ComboBoxOptionProps>`
  ${({ theme }) => theme.typography.ParagraphSmall}
  line-height: 1;
  border-radius: ${({ theme }) => theme.borders.inputBorderRadius};
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 10px 0 10px;
  position: relative;
  user-select: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.menuFontDefault};

  /* &[data-state="checked"][data-highlighted=""] {
  color: ${({ theme }) => theme.colors.menuFontSelected};
  font-weight: bold;
} */

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.menuFontDisabled};
    pointer-events: none;
    cursor: not-allowed;
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.menuFillHover};
    color: ${({ theme }) => theme.colors.menuFontHighlighted};
  }
`;

export const StyledComboBoxItemText = styled("span")``;
export const StyledComboBoxItemIndicator = styled("span")``;
