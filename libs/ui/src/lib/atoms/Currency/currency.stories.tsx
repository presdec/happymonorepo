import { Meta, Story } from "@storybook/react";

import { Body } from "../Typography";
import { Currency, CurrencyProps, GBP, USD } from "./currency";

export default {
  component: Currency,
  title: "Atoms/Currency",
} as Meta;

const Template: Story<CurrencyProps> = (args) => <Currency {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Default = () => {
  const value1 = 1;
  const value2 = 10;
  const value3 = 100;

  return (
    <div
      style={{
        height: "100px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <div>
        <Body.Text.Medium>1 renders:</Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Currency>{value1}</Currency>
        </Body.Number.LabelMedium>
      </div>

      <div>
        <Body.Text.Medium>10 renders:</Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Currency>{value2}</Currency>
        </Body.Number.LabelMedium>
      </div>

      <div>
        <Body.Text.Medium>100 renders:</Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Currency>{value3}</Currency>
        </Body.Number.LabelMedium>
      </div>
    </div>
  );
};

export const withCurrency = () => {
  const value1 = 253687;

  return (
    <div
      style={{
        height: "100px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Body.Number.LabelMedium>
        <Currency currency={USD}>{value1}</Currency>
      </Body.Number.LabelMedium>

      <Body.Number.LabelMedium>
        <Currency currency={GBP}>{value1}</Currency>
      </Body.Number.LabelMedium>

      <Body.Number.LabelMedium>
        <Currency currency={GBP} currencyDisplay={"symbol"}>
          {value1}
        </Currency>
      </Body.Number.LabelMedium>
    </div>
  );
};

export const withLocale = () => {
  const value1 = 253687;

  return (
    <div
      style={{
        height: "100px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <div>
        <Body.Text.Medium>GBP in en-GB:</Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Currency currency={GBP} locale={{ isoCode: "en-GB" }}>
            {value1}
          </Currency>
        </Body.Number.LabelMedium>
      </div>

      <div>
        <Body.Text.Medium>GBP in fr:</Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Currency currency={GBP} locale={{ isoCode: "fr" }}>
            {value1}
          </Currency>
        </Body.Number.LabelMedium>
      </div>

      <div>
        <Body.Text.Medium>GBP in it:</Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Currency currency={GBP} locale={{ isoCode: "it" }}>
            {value1}
          </Currency>
        </Body.Number.LabelMedium>
      </div>
    </div>
  );
};

export const withFormat = () => {
  const value = 25896;

  return (
    <div
      style={{
        height: "100px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <div>
        <Body.Text.Medium>Format string:</Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Currency format={"string"}>{value}</Currency>
        </Body.Number.LabelMedium>
      </div>

      <div>
        <Body.Text.Medium>Format amount:</Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Currency format={"amount"}>{value}</Currency>
        </Body.Number.LabelMedium>
      </div>

      <div>
        <Body.Text.Medium>Format currency:</Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Currency format={"currency"}>{value}</Currency>
        </Body.Number.LabelMedium>
      </div>

      <div>
        <Body.Text.Medium>Format compact:</Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Currency format={"compact"}>{value}</Currency>
        </Body.Number.LabelMedium>
      </div>
    </div>
  );
};
