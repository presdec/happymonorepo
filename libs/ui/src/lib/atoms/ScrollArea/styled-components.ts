import styled from "styled-components";

import { ScrollArea as ScrollAreaPrimitive } from "./primitive/scroll-area";

const SCROLLBAR_SIZE = "0.5em";

export const StyledScrollArea = styled(ScrollAreaPrimitive.Root)<{
  height?: string;
}>`
  width: 100%;
  height: ${({ height }) => height || "8.9em"};
  border-radius: 4px;
  overflow: hidden;
`;

export const StyledViewport = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  padding-right: 1em;
`;

export const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;
  background: ${({ theme }) => theme.colors.cardFill};
  transition: background 160ms ease-out;
  &:hover {
    background: ${({ theme }) => theme.colors.cardFill};
  }
  &[data-orientation="vertical"] {
    width: ${SCROLLBAR_SIZE};
  }
  &[data-orientation="horizontal"] {
    flex-direction: column;
    height: ${SCROLLBAR_SIZE};
  }
`;

export const StyledThumb = styled(ScrollAreaPrimitive.Thumb)`
  flex: 1;
  background: ${({ theme }) => theme.colors.accent300};
  border-radius: ${SCROLLBAR_SIZE};
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 0.1em;
    min-height: 0.1em;
  }
`;

export const StyledCorner = styled(ScrollAreaPrimitive.Corner)`
  background: ${({ theme }) => theme.colors.cardFill};
`;
