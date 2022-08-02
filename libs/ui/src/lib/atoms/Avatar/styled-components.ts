import styled from "styled-components";

import { Avatar as AvatarPrimitive } from "./primitive/avatar";

export const StyledAvatar = styled(AvatarPrimitive.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 2.813em;
  height: 2.813em;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const StyledAvatarImage = styled(AvatarPrimitive.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const StyledAvatarFallback = styled(AvatarPrimitive.Fallback)`
  ${({ theme }) => theme.typography.LabelSmall};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: ${({ theme }) => theme.colors.contentTertiary};
`;
