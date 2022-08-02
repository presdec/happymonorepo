import styled from "styled-components";

import ThemeAwareBackground, {
  ThemeAwareBackgroundProps,
} from "./primitive/theme-aware-background";

export type StyledBackgroundProps = ThemeAwareBackgroundProps & {
  height?: string | number;
};

export const StyledThemeAwareBackground = styled(
  ThemeAwareBackground.Root
)<StyledBackgroundProps>`
  height: ${(props) => props.height || "100%"};
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;
