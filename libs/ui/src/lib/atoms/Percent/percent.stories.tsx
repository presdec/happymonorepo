import { Meta, Story } from "@storybook/react";

import { Body } from "../Typography";
import { Percent, PercentProps } from "./percent";

export default {
  component: Percent,
  title: "Atoms/Percent",
} as Meta;

const Template: Story<PercentProps> = (args) => <Percent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Default = () => {
  const value1 = 0.01;
  const value2 = 0.1;
  const value3 = 1;

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
        <Body.Text.Medium>0.01 renders:</Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Percent>{value1}</Percent>
        </Body.Number.LabelMedium>
      </div>

      <div>
        <Body.Text.Medium>0.1 renders:</Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Percent>{value2}</Percent>
        </Body.Number.LabelMedium>
      </div>

      <div>
        <Body.Text.Medium>1 renders:</Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Percent>{value3}</Percent>
        </Body.Number.LabelMedium>
      </div>
    </div>
  );
};

export const withFractionDigits = () => {
  const value1 = 0.016645;

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
        <Body.Text.Medium>
          0.016645 with 2 maximumFractionDigits renders:
        </Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Percent minimumFractionDigits={0} maximumFractionDigits={2}>
            {value1}
          </Percent>
        </Body.Number.LabelMedium>
      </div>

      <div>
        <Body.Text.Medium>
          0.016645 with 4 maximumFractionDigits renders:
        </Body.Text.Medium>
        <Body.Number.LabelMedium>
          <Percent minimumFractionDigits={0} maximumFractionDigits={4}>
            {value1}
          </Percent>
        </Body.Number.LabelMedium>
      </div>
    </div>
  );
};
