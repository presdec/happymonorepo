import styled from "styled-components";

import { StyledBlockProps } from "./typography";
import { HeadingLarge } from "./typography";

export type H3Props = StyledBlockProps;

const H3Number = styled(HeadingLarge)<H3Props>`
  display: inline;
  font-family: ${({ theme }) => theme.typography.secondaryFontFamily};
  font-weight: 700;
  letter-spacing: -0.01em;
`;

export const H3 = {
  Text: HeadingLarge,
  Number: H3Number,
};

export default H3;
