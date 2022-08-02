import styled from "styled-components";

import { Icon } from "../Icon";
import TagPrimitive, { TagRootProps } from "./primitive/tag";

export const StyledTagRoot = styled(TagPrimitive.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 2px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  border-radius: 24px;
  padding: 0 0.5em;
  cursor: pointer;
`;

export const StyledTagIcon = styled(Icon)``;

export const StyledTagLabel = styled(TagPrimitive.Label)`
  color: ${({ theme }) => theme.colors.contentSecondary};
`;
