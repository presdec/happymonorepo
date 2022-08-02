import {
  DEFAULT_LANGUAGE,
  DEFAULT_LOCATION,
  DEFAULT_MAX_FRACTION_DIGITS,
  DEFAULT_MIN_FRACTION_DIGITS,
  Numbers,
} from "@swissquant/utils-ui";
import { FC } from "react";

export type PercentProps = {
  children: number;
  signDisplay?: "auto" | "exceptZero" | "never" | "always";
  locale?: {
    language?: string;
    location?: string;
    isoCode?: string;
  };
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

export const Percent: FC<PercentProps> = ({
  children,
  locale = {
    language: DEFAULT_LANGUAGE,
    location: DEFAULT_LOCATION,
  },
  signDisplay = "auto",
  minimumFractionDigits = DEFAULT_MIN_FRACTION_DIGITS,
  maximumFractionDigits = DEFAULT_MAX_FRACTION_DIGITS,
}) => {
  const percent =
    children || children === 0
      ? Numbers.toPercentage(children, locale, {
          signDisplay,
          minimumFractionDigits,
          maximumFractionDigits,
        })
      : "-";

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{percent}</>;
};

export default Percent;
