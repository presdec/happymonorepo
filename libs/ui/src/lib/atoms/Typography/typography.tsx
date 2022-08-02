import styled, { css } from "styled-components";
import {
  alignSelf,
  AlignSelfProps,
  border,
  BorderProps,
  color,
  ColorProps,
  justifySelf,
  JustifySelfProps,
  padding,
  PaddingProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  system,
  textAlign,
  TextAlignProps,
  variant,
} from "styled-system";

import { TypographyT } from "../../themes/theme-builder/types";
import { BlockPropsT } from "./primitive/types";
import {
  DisplayLarge as DisplayLargePrimitive,
  DisplayMedium as DisplayMediumPrimitive,
  DisplaySmall as DisplaySmallPrimitive,
  DisplayXSmall as DisplayXSmallPrimitive,
  HeadingLarge as HeadingLargePrimitive,
  HeadingMedium as HeadingMediumPrimitive,
  HeadingSmall as HeadingSmallPrimitive,
  HeadingXLarge as HeadingXLargePrimitive,
  HeadingXSmall as HeadingXSmallPrimitive,
  HeadingXXLarge as HeadingXXLargePrimitive,
  LabelLarge as LabelLargePrimitive,
  LabelMedium as LabelMediumPrimitive,
  LabelSmall as LabelSmallPrimitive,
  LabelXSmall as LabelXSmallPrimitive,
  ParagraphLarge as ParagraphLargePrimitive,
  ParagraphMedium as ParagraphMediumPrimitive,
  ParagraphSmall as ParagraphSmallPrimitive,
  ParagraphXSmall as ParagraphXSmallPrimitive,
} from "./primitive/typography";

export type StyledBlockProps = BlockPropsT &
  AlignSelfProps &
  BorderProps &
  ColorProps &
  JustifySelfProps &
  ShadowProps &
  SpaceProps &
  TextAlignProps &
  PaddingProps & {
    font?: string;
    color?: string;
    kind?: "primary" | "secondary" | "tertiary";
  };

const customProps = system({
  textTransform: true,
});

const defaultProps = (props: StyledBlockProps) => ({
  kind: props.kind || "secondary",
});
const defaultConfig = {
  shouldForwardProp: (
    prop: string,
    defaultValidatorFn: (args: any) => boolean
  ) => {
    return defaultValidatorFn(prop);
  },
};

export const typographyMixin = css<StyledBlockProps>`
  ${({ color, theme }) => {
    return variant({
      prop: "kind",
      variants: {
        primary: {
          color: color || theme.colors.contentPrimary,
        },
        secondary: {
          color: color || theme.colors.contentSecondary,
        },
        tertiary: {
          color: color || theme.colors.contentTertiary,
        },
      },
    });
  }};

  margin: 0;
  padding: 0;
  ${customProps};
  ${textAlign}

  ${border};
  ${color};
  ${shadow};
  ${space};
  ${justifySelf};
  ${alignSelf};
  ${padding}
`;

export const DisplayLarge = styled(DisplayLargePrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "DisplayLarge", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const DisplayMedium = styled(DisplayMediumPrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "DisplayMedium", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const DisplaySmall = styled(DisplaySmallPrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "DisplaySmall", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const DisplayXSmall = styled(DisplayXSmallPrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "DisplayXSmall", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const HeadingXXLarge = styled(HeadingXXLargePrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "HeadingXXLarge", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const HeadingXLarge = styled(HeadingXLargePrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "HeadingXLarge", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const HeadingLarge = styled(HeadingLargePrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "HeadingLarge", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const HeadingMedium = styled(HeadingMediumPrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "HeadingMedium", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const HeadingSmall = styled(HeadingSmallPrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "HeadingSmall", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const HeadingXSmall = styled(HeadingXSmallPrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "HeadingXSmall", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const LabelLarge = styled(LabelLargePrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "LabelLarge", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const LabelMedium = styled(LabelMediumPrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "LabelMedium", theme }) =>
    theme.typography[font as keyof TypographyT]};

  ${typographyMixin};
`;

export const LabelSmall = styled(LabelSmallPrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "LabelSmall", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const LabelXSmall = styled(LabelXSmallPrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "LabelXSmall", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const ParagraphLarge = styled(ParagraphLargePrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "ParagraphLarge", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const ParagraphMedium = styled(ParagraphMediumPrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "ParagraphMedium", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const ParagraphSmall = styled(ParagraphSmallPrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "ParagraphSmall", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;

export const ParagraphXSmall = styled(ParagraphXSmallPrimitive)
  .attrs(defaultProps)
  .withConfig(defaultConfig)<StyledBlockProps>`
  ${({ font = "ParagraphXSmall", theme }) =>
    theme.typography[font as keyof TypographyT]};
  ${typographyMixin};
`;
