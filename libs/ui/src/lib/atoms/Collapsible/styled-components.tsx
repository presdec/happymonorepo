import styled, { keyframes } from "styled-components";

import CollapsiblePrimitive from "./primitive/collapsible";

export const StyledCollapsible = styled(CollapsiblePrimitive.Root)`
  display: flex;
  flex-direction: column;

  &[data-orientation="vertical"] {
    display: flex;
    flex-direction: row;
  }
`;

const open = keyframes`
  0%  { height: 0 };
  100%  { height: var(--radix-collapsible-content-height) };
`;

const close = keyframes`
  0%  { height: var(--radix-collapsible-content-height) };
  100% { height: 0 };
`;

const openVertical = keyframes`
  0%  { width: 0 };
  100%  { width: var(--radix-collapsible-content-width ) };
  0%  { height: 0 };
  100%  { height: var(--radix-collapsible-content-height) };
`;

const closeVertical = keyframes`
  0%  { width: var(--radix-collapsible-content-width ) };
  100% { width: 0 };
  0%  { height: var(--radix-collapsible-content-height) };
  100% { height: 0 };
`;

export const StyledCollapsibleContent = styled(CollapsiblePrimitive.Content)`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &[data-orientation="vertical"] {
    display: flex;
    flex-direction: row;
    gap: 1em;

    &[data-state="open"] {
      animation: ${openVertical} 300ms ease-out forwards;
    }
    &[data-state="closed"] {
      animation: ${closeVertical} 300ms ease-out forwards;
    }
  }

  &[data-state="open"] {
    animation: ${open} 300ms ease-out forwards;
  }
  &[data-state="closed"] {
    animation: ${close} 300ms ease-out forwards;
  }
`;
