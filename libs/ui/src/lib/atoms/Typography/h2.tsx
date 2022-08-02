import styled from "styled-components";

import { StyledBlockProps } from "./typography";
import { HeadingXLarge } from "./typography";

export type H2Props = StyledBlockProps;

const H2Number = styled(HeadingXLarge)<H2Props>`
  display: inline;
  font-family: ${({ theme }) => theme.typography.secondaryFontFamily};
  font-weight: 700;
  letter-spacing: -0.01em;
`;

export const H2 = {
  Text: HeadingXLarge,
  Number: H2Number,
};

export default H2;
