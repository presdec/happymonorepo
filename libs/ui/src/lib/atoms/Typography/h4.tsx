import styled from "styled-components";

import { StyledBlockProps } from "./typography";
import { HeadingMedium } from "./typography";

export type H4Props = StyledBlockProps;

const H4Number = styled(HeadingMedium)<H4Props>`
  display: inline;
  font-family: ${({ theme }) => theme.typography.secondaryFontFamily};
`;

export const H4 = {
  Text: HeadingMedium,
  Number: H4Number,
};

export default H4;
