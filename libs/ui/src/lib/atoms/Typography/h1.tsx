import styled from "styled-components";

import { StyledBlockProps } from "./typography";
import { HeadingXXLarge } from "./typography";

export type H1Props = StyledBlockProps;

const H1Number = styled(HeadingXXLarge)<H1Props>`
  display: inline;
  font-family: ${({ theme }) => theme.typography.secondaryFontFamily};
  font-weight: normal;
  letter-spacing: -0.01em;
`;

export const H1 = {
  Text: HeadingXXLarge,
  Number: H1Number,
};

export default H1;
