import { Story } from "@storybook/react";
import { FC } from "react";

import { H3 } from "../Typography";
import { Flex, FlexProps, Grid, GridProps, View, ViewProps } from "../View";

export default {
  component: Grid,
  title: "Atoms/View/Grid",
};

const EmptyDiv: FC<ViewProps> = ({ children, ...props }) => {
  return (
    <View
      borderStyle={"dashed"}
      borderColor={"#cccccc"}
      borderWidth={"1px"}
      backgroundColor={"rgba(0,0,0,0.1)"}
      textAlign={"center"}
      responsivePadding={{ min: "0.1em", max: "0.5em", top: "0.1em" }}
      {...props}
    >
      {children}
    </View>
  );
};

export const Default: Story<GridProps> = (args) => {
  // const debug = boolean('Debug layout', false);

  return (
    <Grid gap={"1em"} border={"1px solid green"}>
      <EmptyDiv>
        <H3.Text>Text 1</H3.Text>
      </EmptyDiv>

      <EmptyDiv>
        <H3.Text>Text 2</H3.Text>
      </EmptyDiv>

      <EmptyDiv>
        <H3.Text>
          Longer Longer Longer Longer Longer Longer Longer Text 3
        </H3.Text>
      </EmptyDiv>
    </Grid>
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

export const AlbatrossVariant: Story<GridProps> = (args) => {
  // const debug = boolean('Debug layout', false);

  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?";
  return (
    <>
      <H3.Text>
        Albatross variant is used to provide enough space for each item.
      </H3.Text>
      <Grid variant={"albatross"}>
        <EmptyDiv>
          <H3.Text>{text}</H3.Text>
        </EmptyDiv>

        <EmptyDiv>
          <H3.Text>{text}</H3.Text>
        </EmptyDiv>

        <EmptyDiv>
          <H3.Text>{text}</H3.Text>
        </EmptyDiv>
      </Grid>
    </>
  );
};

AlbatrossVariant.args = {};

AlbatrossVariant.argTypes = Default.argTypes;

export const AlbatrossVariantWithContent: Story<GridProps> = (args) => {
  // const debug = boolean('Debug layout', false);

  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?";
  return (
    <Grid variant="albatross">
      <EmptyDiv variant="unbreakable">
        <Grid variant="albatross" gridMin={"15ch"}>
          <p>
            <H3.Text>{text}</H3.Text>
          </p>
          <p>
            <H3.Text>{text}</H3.Text>
          </p>
        </Grid>
      </EmptyDiv>

      <EmptyDiv variant="unbreakable">
        <H3.Text>{text}</H3.Text>
      </EmptyDiv>

      <EmptyDiv variant="unbreakable">
        <Grid variant="albatross" gridMin={"15ch"}>
          <H3.Text>Title</H3.Text>

          <H3.Text>{text}</H3.Text>
        </Grid>
      </EmptyDiv>
    </Grid>
  );
};

AlbatrossVariantWithContent.args = {};

AlbatrossVariantWithContent.argTypes = Default.argTypes;

export const NColumnVariant: Story<GridProps> = (args) => {
  // const debug = boolean('Debug layout', false);

  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?";
  return (
    <>
      <H3.Text>
        Column count variants easily force the grid into a set number of
        columns.
      </H3.Text>
      <Grid variant={args.variant} columnsCount={args.columnsCount}>
        <EmptyDiv>
          <H3.Text>{text}</H3.Text>
        </EmptyDiv>

        <EmptyDiv>
          <H3.Text>{text}</H3.Text>
        </EmptyDiv>

        <EmptyDiv>
          <H3.Text>{text}</H3.Text>
        </EmptyDiv>
      </Grid>
    </>
  );
};

NColumnVariant.args = {};

NColumnVariant.argTypes = {
  ...Default.argTypes,
  variant: {
    defaultValue: "twoColumn",
    options: ["twoColumn", "threeColumn", "nColumn"],
    control: {
      type: "select",
    },
  },
  columnsCount: {
    defaultValue: undefined,
    control: {
      type: "number",
    },
  },
};

export const MasonryVariant: Story<GridProps> = (args) => {
  // const debug = boolean('Debug layout', false);

  return (
    <Grid gap={"1em"} border={"1px solid green"} variant="masonry">
      <EmptyDiv gridColumn="1 / -1">
        <H3.Text>Header</H3.Text>
      </EmptyDiv>

      <EmptyDiv>
        <H3.Text>Text 1</H3.Text>
      </EmptyDiv>
      <EmptyDiv gridRow="span 2">
        <H3.Text>Text 2</H3.Text>
      </EmptyDiv>

      <EmptyDiv>
        <H3.Text>Text 3</H3.Text>
      </EmptyDiv>

      <EmptyDiv>
        <H3.Text>Text 4</H3.Text>
      </EmptyDiv>
      <EmptyDiv gridRow="span 2">
        <H3.Text>Text 5</H3.Text>
      </EmptyDiv>
    </Grid>
  );
};

MasonryVariant.args = {};

MasonryVariant.argTypes = Default.argTypes;
