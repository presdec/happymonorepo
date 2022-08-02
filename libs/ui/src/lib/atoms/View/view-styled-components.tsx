import * as CSS from "csstype";
import styled, { css } from "styled-components";
import {
  alignSelf,
  AlignSelfProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flex,
  FlexBasisProps,
  FlexGrowProps,
  FlexShrinkProps,
  grid,
  GridAreaProps,
  GridColumnProps,
  GridRowProps,
  justifySelf,
  JustifySelfProps,
  layout,
  LayoutProps,
  padding,
  ResponsiveValue,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  variant,
} from "styled-system";

import ViewPrimitive, {
  ViewProps as PrimitiveViewProps,
} from "./primitive/view";

export type SharedViewProps = PrimitiveViewProps &
  BorderProps &
  ColorProps &
  LayoutProps &
  ShadowProps &
  TextAlignProps &
  SpaceProps &
  Partial<{
    style: Record<string, string>;
    /**
     * Defaults to 1.5em clamp(1em, 5%, 3em);
     */
    responsivePadding: Partial<{ min: string; max: string; top: string }>;
  }>;

type GridItemProps = GridColumnProps &
  GridRowProps &
  GridAreaProps &
  JustifySelfProps &
  AlignSelfProps &
  Partial<{
    placeSelf: ResponsiveValue<CSS.Property.PlaceSelf>;
  }>;

/** To allow for responsive styles we add all style fns but restrict them with filtered types. */
export const gridItemPropsMixin = css<GridItemProps>`
  ${grid};
`;

type FlexItemProps = AlignSelfProps &
  FlexGrowProps &
  FlexShrinkProps &
  FlexBasisProps;

/**
 * Flex `order` prop is omitted by design choice, we don't wat to change the order of elements, prefer moving the component.
 *
 * To allow for responsive styles we add all style fns but restrict them with filtered types.
 */
export const flexItemPropsMixin = css<FlexItemProps>`
  ${flex}
`;

export const viewPropsMixin = css<SharedViewProps>`
  box-sizing: border-box;

  ${textAlign}

  ${border};
  ${color};
  ${layout};
  ${shadow};
  ${space};
  ${justifySelf};
  ${alignSelf};

  padding: ${({ responsivePadding, padding }) => {
    return responsivePadding
      ? `${responsivePadding.top || "1.5em"} clamp(${
          responsivePadding.min || "1em"
        }, 5%, ${responsivePadding.max || "3em"})`
      : `${padding ? String(padding) : ""}`;
  }};
`;

export type ViewVariants = "unbreakable";

export type ViewProps = SharedViewProps &
  GridItemProps &
  FlexItemProps &
  Partial<{
    variant: ViewVariants;
    /**
     * Only active when parent Flex element uses  albatross variant.
     *
     * `flexMin` is useful to define a minimum width for inner elements. Defaults to 35em
     */
    flexMin: string;
    /**
     * `fitContent` will be ignored when unbreakable variant is not used
     */
    fitContent: boolean;
    aspectRatio?: CSS.Property.AspectRatio;
  }>;

export const View = styled(ViewPrimitive.Root).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    // return !['disabled'].includes(prop) && defaultValidatorFn(prop);
    return defaultValidatorFn(prop);
  },
})<ViewProps>`
  ${viewPropsMixin};
  ${gridItemPropsMixin}
  ${flexItemPropsMixin}

  --flex-min: ${(props) => props.flexMin || "35em"};

  width: ${(props) => (props.fitContent ? "fit-content" : props.width)};

  aspect-ratio: ${(props) => props.aspectRatio};

  ${(props) =>
    variant({
      variants: {
        unbreakable: {
          minWidth: 0, // reset min-width in case we have used it for other reasons, then pass the value to min()
          width: `min(${props.minWidth || "100ch"}, ${
            props.maxWidth || "90%"
          })`,
          wordBreak: "break-word",
          /* Optional, not supported for all languages */
          hyphens: "auto",
        },
      },
    })};
`;

View.displayName = "View";

export default View;
