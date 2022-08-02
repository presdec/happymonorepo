import { Override } from "@swissquant/utils-ui";
import styled from "styled-components";
import {
  alignItems,
  AlignItemsProps,
  grid,
  GridProps as PrimitiveGridProps,
  justifyItems,
  JustifyItemsProps,
  variant,
} from "styled-system";

import ViewPrimitive from "./primitive/view";
import { ViewProps, viewPropsMixin } from "./view-styled-components";

export type GridVariants =
  | "albatross"
  | "twoColumn"
  | "threeColumn"
  | "nColumn"
  | "masonry";

type OmittedStyledViewProps = Override<
  ViewProps,
  Partial<{ variant: GridVariants }>
>;

export type GridProps = PrimitiveGridProps &
  JustifyItemsProps &
  AlignItemsProps &
  OmittedStyledViewProps &
  Partial<{
    gap: string;
    /**
     * `gridMin` is useful to define a minimum width for columns. Defaults to 20ch
     */
    gridMin: string;
    /**
     * `columnsCount` will be ignored when nColumn variant is not used
     */
    columnsCount: number;
    /**
     * `gridMin` is only used in masonry and is useful to define a minimum height for rows. Defaults to 150px
     */
    gridRowMin: string;
  }>;

export const Grid = styled(ViewPrimitive.Root).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    // return !['disabled'].includes(prop) && defaultValidatorFn(prop);
    return defaultValidatorFn(prop);
  },
})<GridProps>`
  ${viewPropsMixin};

  display: grid;
  gap: ${({ gap }) => gap};

  ${grid};
  ${justifyItems};
  ${alignItems}

  --grid-min: ${(props) => props.gridMin || "20ch"};
  --grid-row-min: ${(props) => props.gridRowMin || "150px"};

  ${(props) =>
    variant({
      variants: {
        albatross: {
          gap: props.gap || "1em",
          // The repeat function will apply the defined column behavior to all columns that exist.
          /* min() with 100% prevents overflow in extra narrow spaces */
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, var(--grid-min)), 1fr))",
        },
        masonry: {
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, var(--grid-min)), 1fr))",
          gridAutoRows: "minmax(var(--grid-row-min), auto)",
        },
        twoColumn: {
          gridTemplateColumns:
            "repeat(2, minmax(min(100%, var(--grid-min)), 1fr))",
        },
        threeColumn: {
          gridTemplateColumns:
            "repeat(3, minmax(min(100%, var(--grid-min)), 1fr))",
        },
        nColumn: {
          gridTemplateColumns: `repeat(${props.columnsCount}, minmax(min(100%, var(--grid-min)), 1fr))`,
        },
      },
    })}
`;

Grid.displayName = "Grid";

export default Grid;
