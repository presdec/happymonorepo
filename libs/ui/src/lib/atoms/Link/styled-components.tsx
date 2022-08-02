import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export type StyledLinkProps = { textDecoration?: string };

export const StyledLink = styled("a")<StyledLinkProps>`
  ${({ theme }) => theme.typography.ParagraphSmall};
  text-decoration: ${({ textDecoration }) => textDecoration};
  color: ${({ theme }) => theme.colors.contentPrimary};

  /* unvisited link */
  &:link {
    color: ${({ theme }) => theme.colors.contentPrimary};
  }

  /* visited link */
  &:visited {
    color: ${({ theme }) => theme.colors.contentPrimary};
  }

  /* mouse over link */
  &:hover {
    color: ${({ theme }) => theme.colors.contentSecondary};
  }

  /* selected link */
  &:active {
    color: ${({ theme }) => theme.colors.contentPrimary};
  }
`;

export const StyledRouterLink = styled(RouterLink)<StyledLinkProps>`
  ${({ theme }) => theme.typography.ParagraphSmall};
  text-decoration: ${({ textDecoration }) => textDecoration};

  color: ${({ theme }) => theme.colors.contentPrimary};
  /* unvisited link */
  &:link {
    color: ${({ theme }) => theme.colors.contentPrimary};
  }

  /* visited link */
  &:visited {
    color: ${({ theme }) => theme.colors.contentPrimary};
  }

  /* mouse over link */
  &:hover {
    color: ${({ theme }) => theme.colors.contentSecondary};
  }

  /* selected link */
  &:active {
    color: ${({ theme }) => theme.colors.contentPrimary};
  }
`;
