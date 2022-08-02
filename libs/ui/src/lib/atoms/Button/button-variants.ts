import { DefaultTheme } from "styled-components";
import { variant } from "styled-system";

export const buttonKindVariants = (variables: DefaultTheme) =>
  variant({
    prop: "kind",
    variants: {
      primary: {
        color: variables.colors.buttonPrimaryText,
        backgroundColor: variables.colors.buttonPrimaryFill,
      },
      secondary: {
        color: variables.colors.buttonSecondaryText,
        backgroundColor: variables.colors.buttonSecondaryFill,
      },
      tertiary: {
        color: variables.colors.buttonTertiaryText,
        backgroundColor: variables.colors.buttonTertiaryFill,
      },
    },
  });

export const buttonHoverVariants =
  (variables: DefaultTheme) => (isLoading?: boolean, isPressed?: boolean) => {
    return variant({
      prop: "kind",
      variants: {
        primary: {
          backgroundColor: isLoading
            ? variables.colors.buttonPrimaryActive
            : isPressed // we make sure the hover color doesn't interfere when button is pressed
            ? variables.colors.buttonPrimarySelectedFill
            : variables.colors.buttonPrimaryHover,
        },
        secondary: {
          backgroundColor: isLoading
            ? variables.colors.buttonSecondaryActive
            : isPressed // we make sure the hover color doesn't interfere when button is pressed
            ? variables.colors.buttonSecondarySelectedFill
            : variables.colors.buttonSecondaryHover,
        },
        tertiary: {
          backgroundColor: isLoading
            ? variables.colors.buttonTertiaryActive
            : isPressed // we make sure the hover color doesn't interfere when button is pressed
            ? variables.colors.buttonTertiarySelectedFill
            : variables.colors.buttonTertiaryHover,
        },
      },
    });
  };

export const buttonActiveVariants = (variables: DefaultTheme) =>
  variant({
    prop: "kind",
    variants: {
      primary: {
        backgroundColor: variables.colors.buttonPrimaryActive,
      },
      secondary: {
        backgroundColor: variables.colors.buttonSecondaryActive,
      },
      tertiary: {
        backgroundColor: variables.colors.buttonTertiaryActive,
      },
    },
  });

export const buttonSizeVariants = (variables: DefaultTheme) =>
  variant({
    prop: "size",
    variants: {
      default: {
        paddingTop: variables.sizing.scale400,
        paddingBottom: variables.sizing.scale400,
        paddingLeft: variables.sizing.scale500,
        paddingRight: variables.sizing.scale500,
      },
      mini: {
        paddingTop: variables.sizing.scale200,
        paddingBottom: variables.sizing.scale200,
        paddingLeft: variables.sizing.scale300,
        paddingRight: variables.sizing.scale300,
      },
      large: {
        paddingTop: variables.sizing.scale600,
        paddingBottom: variables.sizing.scale600,
        paddingLeft: variables.sizing.scale700,
        paddingRight: variables.sizing.scale700,
      },
    },
  });

export const buttonFontVariants = (variables: DefaultTheme) =>
  variant({
    prop: "size",
    variants: {
      default: {
        ...variables.typography.font350,
      },
      mini: { ...variables.typography.font150 },
      large: { ...variables.typography.font450 },
    },
  });
