import { Story } from "@storybook/react";

import { H3 } from "../Typography";
import { View, ViewProps } from "../View";

export default {
  component: View,
  title: "Atoms/View/View",
};

export const Default: Story<ViewProps> = (args) => {
  return (
    <View
      borderStyle={"dashed"}
      borderColor={"#cccccc"}
      borderWidth={"1px"}
      backgroundColor={"rgba(0,0,0,0.1)"}
      textAlign={"center"}
      responsivePadding={{ min: "0.1em", max: "0.5em", top: "0.1em" }}
    >
      <H3.Text>Longer Longer Longer Longer Longer Longer Longer Text 3</H3.Text>
    </View>
  );
};

Default.args = {};

Default.argTypes = {
  // name: {
  //   defaultValue: 'Jane Doe',
  //   control: {
  //     type: 'text',
  //   },
  // },
};

export const UnbreakableVariant: Story<ViewProps> = (args) => {
  // const debug = boolean('Debug layout', false);

  return (
    <View
      variant="unbreakable"
      minWidth={"500ch"} // responsive minWidth
      maxWidth={"90%"} // responsive maxWidth
      borderStyle={"dashed"}
      borderColor={"#cccccc"}
      borderWidth={"1px"}
      backgroundColor={"rgba(0,0,0,0.1)"}
      textAlign={"center"}
      responsivePadding={{ min: "0.1em", max: "0.5em", top: "0.1em" }}
    >
      <H3.Text>Longer Longer Longer Longer Longer Longer Longer Text 3</H3.Text>
    </View>
  );
};

UnbreakableVariant.args = {};

UnbreakableVariant.argTypes = Default.argTypes;

export const Responsive: Story<ViewProps> = (args) => {
  // const debug = boolean('Debug layout', false);

  return (
    <View
      borderStyle={"dashed"}
      borderColor={"#cccccc"}
      borderWidth={"1px"}
      backgroundColor={"rgba(0,0,0,0.1)"}
      textAlign={"center"}
      responsivePadding={{ min: "0.1em", max: "0.5em", top: "0.1em" }}
      width={[
        1, // 100% below the smallest breakpoint
        1 / 4, // 25% from the next breakpoint and up
        1 / 2, // 50% from the next breakpoint and up
      ]}
    >
      <H3.Text>Longer Longer Longer Longer Longer Longer Longer Text 3</H3.Text>
    </View>
  );
};

Responsive.args = {};

Responsive.argTypes = Default.argTypes;

export const FitContent: Story<ViewProps> = (args) => {
  // const debug = boolean('Debug layout', false);

  return (
    <View
      borderStyle={"dashed"}
      borderColor={"#cccccc"}
      borderWidth={"1px"}
      backgroundColor={"rgba(0,0,0,0.1)"}
      textAlign={"center"}
      padding={"10em"}
    >
      <View
        borderStyle={"dashed"}
        borderColor={"#cccccc"}
        borderWidth={"1px"}
        backgroundColor={"green"}
        fitContent
      >
        <H3.Text>
          Longer Longer Longer Longer Longer Longer Longer Text 3
        </H3.Text>
      </View>
    </View>
  );
};

FitContent.args = {};

FitContent.argTypes = Default.argTypes;
