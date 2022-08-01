import { variant } from 'styled-system';

export const buttonKindVariants = variant({
  prop: 'kind',
  variants: {
    primary: {
      color: 'black',
      backgroundColor: 'violet',
    },
    secondary: {
      color: 'black',
      backgroundColor: 'violet',
    },
    tertiary: {
      color: 'black',
      backgroundColor: 'violet',
    },
  },
});

export const buttonHoverVariants = (
  isLoading?: boolean,
  isPressed?: boolean
) => {
  return variant({
    prop: 'kind',
    variants: {
      primary: {
        backgroundColor: isLoading
          ? 'yellow'
          : isPressed // we make sure the hover color doesn't interfere when button is pressed
          ? 'pink'
          : 'grey',
      },
      // secondary: {
      //   backgroundColor: isLoading
      //     ? variables.colors.buttonSecondaryActive
      //     : isPressed // we make sure the hover color doesn't interfere when button is pressed
      //     ? variables.colors.buttonSecondarySelectedFill
      //     : variables.colors.buttonSecondaryHover
      // },
      // tertiary: {
      //   backgroundColor: isLoading
      //     ? variables.colors.buttonTertiaryActive
      //     : isPressed // we make sure the hover color doesn't interfere when button is pressed
      //     ? variables.colors.buttonTertiarySelectedFill
      //     : variables.colors.buttonTertiaryHover
      // }
    },
  });
};

export const buttonActiveVariants = variant({
  prop: 'kind',
  variants: {
    primary: {
      backgroundColor: 'purple',
    },
    secondary: {
      backgroundColor: 'purple',
    },
    tertiary: {
      backgroundColor: 'purple',
    },
  },
});
