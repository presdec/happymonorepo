import styled from "styled-components";

import { SqLogoText } from "./logo-sq-text";
import { LogoSvg } from "./logo-svg";

export const Logo = {
  Text: SqLogoText,
  Svg: LogoSvg,
};

export const BaseLogo = styled(Logo.Svg)`
  color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export default Logo;
