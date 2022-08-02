import styled from "styled-components";

import { CustomThemeT } from "../../themes/types";
import { StyledBlockProps } from "./typography";
import {
  LabelLarge,
  LabelMedium,
  LabelSmall,
  LabelXSmall,
  ParagraphLarge,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphXSmall,
} from "./typography";

export type TextBodyProps = StyledBlockProps;

const customNumberOverrides = ({ theme }: { theme: CustomThemeT }) => ({
  display: "inline",
  fontFamily: theme.typography.secondaryFontFamily,
});

const NumberXSmall = styled(ParagraphXSmall)<TextBodyProps>`
  display: inline;
  font-family: ${({ theme }) => theme.typography.secondaryFontFamily};
`;

const NumberSmall = styled(ParagraphSmall)`
  ${({ theme }) => customNumberOverrides({ theme })}
`;

const NumberMedium = styled(ParagraphMedium)`
  ${({ theme }) => customNumberOverrides({ theme })}
`;

const NumberLarge = styled(ParagraphLarge)`
  ${({ theme }) => customNumberOverrides({ theme })}
`;

const NumberLabelXSmall = styled(LabelXSmall)`
  ${({ theme }) => customNumberOverrides({ theme })}
`;

const NumberLabelSmall = styled(LabelSmall)`
  ${({ theme }) => customNumberOverrides({ theme })}
`;

const NumberLabelMedium = styled(LabelMedium)`
  ${({ theme }) => customNumberOverrides({ theme })}
`;

const NumberLabelLarge = styled(LabelLarge)`
  ${({ theme }) => customNumberOverrides({ theme })}
`;

export const Body = {
  Text: {
    XSmall: ParagraphXSmall,
    Small: ParagraphSmall,
    Medium: ParagraphMedium,
    Large: ParagraphLarge,
    LabelXSmall, // used for captions with bold text
    LabelSmall, // used for captions with bold text
    LabelMedium, // used for captions with bold text
    LabelLarge, // used for captions with bold text
  },

  Number: {
    XSmall: NumberXSmall,
    Small: NumberSmall,
    Medium: NumberMedium,
    Large: NumberLarge,
    LabelXSmall: NumberLabelXSmall, // used for captions with bold text
    LabelSmall: NumberLabelSmall, // used for captions with bold text
    LabelMedium: NumberLabelMedium, // used for captions with bold text
    LabelLarge: NumberLabelLarge, // used for captions with bold text
  },
};

export default Body;
