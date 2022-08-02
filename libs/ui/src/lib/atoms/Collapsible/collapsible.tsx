import CollapsiblePrimitive from "./primitive/collapsible";
import {
  StyledCollapsible,
  StyledCollapsibleContent,
} from "./styled-components";

export type {
  CollapsibleContentProps,
  CollapsibleProps,
  CollapsibleTriggerProps,
} from "./primitive/collapsible";

export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = StyledCollapsibleContent;
