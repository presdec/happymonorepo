import { FC } from "react";

import { ScrollAreaProps as PrimitiveScrollAreaProps } from "./primitive/scroll-area";
import {
  StyledCorner,
  StyledScrollArea,
  StyledScrollbar,
  StyledThumb,
  StyledViewport,
} from "./styled-components";

export const ScrollAreaPrimitive = StyledScrollArea;
export const ScrollAreaViewport = StyledViewport;
export const ScrollAreaScrollbar = StyledScrollbar;
export const ScrollAreaThumb = StyledThumb;
export const ScrollAreaCorner = StyledCorner;

export type ScrollAreaProps = PrimitiveScrollAreaProps;

export const ScrollArea = ({
  children,
  type,
  height,
  overflowX = true,
  overflowY = true,
}: ScrollAreaProps & {
  height?: string;
  overflowX?: boolean;
  overflowY?: boolean;
}) => (
  <ScrollAreaPrimitive type={type} height={height}>
    <ScrollAreaViewport>{children}</ScrollAreaViewport>
    {overflowY ? (
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    ) : null}

    {overflowX ? (
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    ) : null}
    <ScrollAreaCorner />
  </ScrollAreaPrimitive>
);

export default ScrollArea;
