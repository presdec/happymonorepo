import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BUTTON_KIND, BUTTON_SIZE } from './primitive';
import type { StyledButtonProps } from './styled-components';
import {
  StyledBaseButtonRoot,
  StyledBaseButtonSpinnerContainer,
  StyledButtonContent,
} from './styled-components';
/**
 * Buttons allow users to perform an action or to navigate to another page.
 * They have multiple styles for various needs, and are ideal for calling attention to
 * where a user needs to do something in order to move forward in a flow.
 */
export const Button: FC<StyledButtonProps> = ({
  children,
  startEnhancer,
  endEnhancer,
  loadingEnhancer = () => <FontAwesomeIcon icon={faCircleNotch} />,
  isLoading,
  kind = BUTTON_KIND.primary,
  size = BUTTON_SIZE.default,
  className = '',
  isSelected,
  ...props
}) => {
  return (
    <StyledBaseButtonRoot
      className={className}
      kind={kind}
      size={size}
      isLoading={isLoading}
      isSelected={isSelected}
      {...props}
    >
      <StyledButtonContent
        startEnhancer={startEnhancer}
        endEnhancer={endEnhancer}
        loadingEnhancer={loadingEnhancer}
        isLoading={isLoading}
      >
        {children}
      </StyledButtonContent>

      <StyledBaseButtonSpinnerContainer isLoading={isLoading}>
        {loadingEnhancer}
      </StyledBaseButtonSpinnerContainer>
    </StyledBaseButtonRoot>
  );
};

export type ButtonProps = StyledButtonProps;
export { BUTTON_KIND, BUTTON_SIZE };

export default Button;
