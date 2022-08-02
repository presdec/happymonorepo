import styled from "styled-components";

import { Flex } from "../View";
import { Checkbox as CheckboxPrimitive } from "./primitive/checkbox";

export const StyledCheckboxRoot = styled(Flex)`
  align-items: center;
  gap: 0.938em;
`;

export const StyledCheckbox = styled(CheckboxPrimitive.Root)`
  all: unset;
  // None of our mocks feature a background color for checkboxes. This way it works in both light & dark theme
  /* background-color: ${({ theme }) => theme.colors.backgroundPrimary}; */
  width: 1.25em;
  height: 1.25em;
  border-radius: ${({ theme }) => theme.borders.radius200};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent400};

  &[data-state="checked"] {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent400};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledCheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledCheckboxLabel = styled("label")`
  ${({ theme }) => theme.typography.LabelMedium};
  color: ${({ theme }) => theme.colors.contentSecondary};

  &[data-state="checked"] {
    color: ${({ theme }) => theme.colors.contentPrimary};
  }

  user-select: none;
`;
