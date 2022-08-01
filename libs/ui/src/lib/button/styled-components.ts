import { FocusRingAria } from '@react-aria/focus';
import styled, { css, keyframes } from 'styled-components';
import { color, flexbox, FlexboxProps, space } from 'styled-system';

import {
  buttonActiveVariants,
  buttonHoverVariants,
  buttonKindVariants,
} from './button-variants';
import Button, { BUTTON_SIZE, ButtonProps } from './primitive';

export const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export type StyledButtonProps = ButtonProps &
  FlexboxProps &
  Partial<FocusRingAria> & {
    size?: BUTTON_SIZE;
    color?: string;
  };

export const StyledBaseButtonRoot = styled(Button.Root)<StyledButtonProps>`
  display: inline-flex;
  gap: 0.5em;
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};

  border-left-width: 0;
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-style: none;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  outline: none;

  box-shadow: none;

  text-decoration: none;
  -web-kit-appearance: none;
  transition-property: background;
  transition-duration: 60ms;
  transition-timing-function: linear;

  cursor: pointer;
  margin-left: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;

  &[data-focus-visible='true'] {
    box-shadow: inset 0 0 0 3px blue;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: grey;
    color: grey;
  }

  ${buttonKindVariants};
  ${space};
  ${color};
  ${flexbox};

  &:hover {
    ${(props) => buttonHoverVariants(false, false)};

    &[data-pressed='true'] {
      ${(props) => buttonHoverVariants(false, true)};
    }
  }

  &:active {
    ${buttonActiveVariants};
  }

  &[data-selected='true'] {
    color: black;
    background-color: violet;
  }

  ${(props) => {
    // AC: This is a workaround as the isSelected prop is not being passed to the Primitive
    // The above data selector is what should really work.
    return props.isSelected
      ? {
          color: 'black',
          backgroundColor: 'violet',
        }
      : '';
  }}
`;

export const StyledBaseButtonSpinnerContainer = styled(Button.SpinnerContainer)`
  &[data-loading='true'] {
    animation: ${(props) =>
      css`
        ${rotate} 1ms linear infinite;
      `};
  }
`;

export const StyledButtonContent = styled(Button.Content)``;
