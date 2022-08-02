import styled from "styled-components";

import { StyledBlockProps } from "./typography";
import { HeadingSmall } from "./typography";

export type H5Props = StyledBlockProps;

const H5Number = styled(HeadingSmall)<H5Props>`
  display: inline;
  font-family: ${({ theme }) => theme.typography.secondaryFontFamily};
`;

export const H5 = {
  Text: HeadingSmall,
  Number: H5Number,
};

export default H5;
