/* eslint-disable react/jsx-no-useless-fragment */
import { CHF, Currency as DineroCurrency } from "@dinero.js/currencies";
import {
  DEFAULT_LANGUAGE,
  DEFAULT_LOCATION,
  money,
} from "@swissquant/utils-ui";
import { FC } from "react";

export type CurrencyProps = {
  children: number;
  currency?: DineroCurrency<number>;
  currencyDisplay?: "symbol" | "code" | "none";
  locale?: {
    language?: string;
    location?: string;
    isoCode?: string;
  };
  format?: "string" | "amount" | "currency" | "compact";
};

/**
 * @param value Currency value in cents.
 * @default 
 *  <React.Fragment>
      {money(children, currency, currencyDisplay, locale).toString()}
    </React.Fragment>
 */
export const Currency: FC<CurrencyProps> = ({
  children,
  currency = CHF,
  currencyDisplay = "code",
  locale = {
    language: DEFAULT_LANGUAGE,
    location: DEFAULT_LOCATION,
  },
  format = "string",
}) => {
  const fallback = "-";

  if (!children || children === 0) {
    return <>{fallback}</>;
  }

  if (format === "amount") {
    return <>{money(children, currency, currencyDisplay, locale).amount}</>;
  }

  if (format === "currency") {
    return <>{money(children, currency, currencyDisplay, locale).currency}</>;
  }

  if (format === "compact") {
    return <>{money(children, currency, currencyDisplay, locale).compact}</>;
  }

  return <>{money(children, currency, currencyDisplay, locale).toString()}</>;
};

export default Currency;
