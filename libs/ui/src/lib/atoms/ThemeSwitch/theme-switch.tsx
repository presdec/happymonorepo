import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

import { Switch, SwitchProps } from "../../molecules/Switch";
import { ThemeType } from "../../themes/types";
import { Button } from "../Button";
import { Icon } from "../Icon/icon";

export type ThemeSwitchProps = SwitchProps & {
  themeType: ThemeType;
  onCheckedChange: () => void;
};

const ButtonSwitch: FC<ThemeSwitchProps> = ({
  themeType,
  onCheckedChange,
  children,
  labelPlacement = "right",
}) => {
  return (
    <Button
      kind={"secondary"}
      onPress={() => {
        onCheckedChange();
      }}
      endEnhancer={
        labelPlacement === "left"
          ? themeType === ThemeType.DARK
            ? () => <Icon icon={faMoon} label="dark" />
            : () => <Icon icon={faSun} label="light" />
          : undefined
      }
      startEnhancer={
        labelPlacement === "right"
          ? themeType === ThemeType.DARK
            ? () => <Icon icon={faMoon} label="dark" />
            : () => <Icon icon={faSun} label="light" />
          : undefined
      }
    >
      {children}
    </Button>
  );
};

export const ToggleSwitch: FC<ThemeSwitchProps> = ({
  themeType,
  onCheckedChange,
  children,
  labelPlacement = "right",
  className,
}) => {
  return (
    <Switch
      checked={themeType === ThemeType.DARK}
      onCheckedChange={onCheckedChange}
      labelPlacement={labelPlacement}
      className={className}
    >
      {children}
    </Switch>
  );
};

export const ThemeSwitches = {
  Button: ButtonSwitch,
  Toggle: ToggleSwitch,
};

export default ThemeSwitches;
