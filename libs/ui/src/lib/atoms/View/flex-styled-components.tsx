import { Override } from "@swissquant/utils-ui";
import styled from "styled-components";
import { flexbox, FlexboxProps, variant } from "styled-system";

import ViewPrimitive from "./primitive/view";
import { ViewProps, viewPropsMixin } from "./view-styled-components";

export type FlexVariants = "albatross" | "pancake" | "equalHeight";

type OmittedStyledViewProps = Override<
  ViewProps,
  Partial<{ variant: FlexVariants }>
>;

/**
 * Flex `order` prop is omitted by design choice, we don't wat to change the order of elements, prefer moving the component.
 */
export type FlexProps = Omit<FlexboxProps, "order"> &
  OmittedStyledViewProps & {
    gap?: string;
    /**
     * Only used with albatross variant.
     *
     * `flexMin` is useful to define a minimum width for inner elements. Defaults to 35em
     */
    flexMin?: string;
    /**
     * Only used with pancake variant.
     *
     * `pancakeMin` is useful to define a minimum width for inner elements. Defaults to 35em
     */
    pancakeMin?: string;
  };

export const Flex = styled(ViewPrimitive.Root).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    // return !['disabled'].includes(prop) && defaultValidatorFn(prop);
    return defaultValidatorFn(prop);
  },
})<FlexProps>`
  ${viewPropsMixin};

  display: flex;
  gap: ${({ gap }) => gap || "0.5em"};
  width: ${({ width }) => width || "100%"};

  ${flexbox};

  --flex-min: ${(props) => props.flexMin || "35em"};
  --pancake-min: ${(props) => props.pancakeMin || "20ch"};

  ${(props) =>
    variant({
      variants: {
        albatross: {
          flexWrap: "wrap",
          gap: props.gap || "0.5em",
          "> *": {
            flexGrow: 1,
            flexBasis: "calc((var(--flex-min) - 100%) * 999)",

            "&.flex--auto": {
              flex: "0 1 auto",
            },
          },
        },
        pancake: {
          flexWrap: "wrap",
          margin: "1em -0.5em",
          "> *": {
            flex: "1 1 var(--pancake-min)",
            margin: "0.5em",

            "&.flex--auto": {
              flex: "0 1 auto",
            },
          },
        },
        equalHeight: {
          "> *": {
            height: "100% !important",
          },
        },
      },
    })}
`;

Flex.displayName = "Flex";

export default Flex;
