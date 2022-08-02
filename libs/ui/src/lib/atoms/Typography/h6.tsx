import styled from "styled-components";

import { StyledBlockProps } from "./typography";
import { HeadingXSmall } from "./typography";

export type H6Props = StyledBlockProps;

const H6Number = styled(HeadingXSmall)<H6Props>`
  display: inline;
  font-family: ${({ theme }) => theme.typography.secondaryFontFamily};
`;

export const H6 = {
  Text: HeadingXSmall,
  Number: H6Number,
};

export default H6;
