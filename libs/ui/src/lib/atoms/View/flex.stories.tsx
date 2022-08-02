import { Story } from "@storybook/react";
import { FC } from "react";

import { H3 } from "../Typography";
import { Flex, FlexProps, View, ViewProps } from "../View";

export default {
  component: Flex,
  title: "Atoms/View/Flex",
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

export const Default: Story<FlexProps> = (args) => {
  // const debug = boolean('Debug layout', false);

  return (
    <Flex justifyContent={"center"} gap={"1em"} border={"1px solid green"}>
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
    </Flex>
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

export const AlbatrossVariant: Story<FlexProps> = (args) => {
  // const debug = boolean('Debug layout', false);

  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?";
  return (
    <>
      <H3.Text>
        Albatross variant is used to provide enough space for each item, with
        breakpoints set with flexMin
      </H3.Text>
      <Flex variant={"albatross"}>
        <EmptyDiv flexMin={"50em"} variant="unbreakable">
          <H3.Text>{text}</H3.Text>
        </EmptyDiv>

        <EmptyDiv>
          <H3.Text>{text}</H3.Text>
        </EmptyDiv>

        <EmptyDiv>
          <H3.Text>{text}</H3.Text>
        </EmptyDiv>
      </Flex>
    </>
  );
};

AlbatrossVariant.args = {};

AlbatrossVariant.argTypes = Default.argTypes;

export const AlbatrossVariantWithContent: Story<FlexProps> = (args) => {
  // const debug = boolean('Debug layout', false);

  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?";
  return (
    <Flex variant="albatross">
      <EmptyDiv>
        <Flex flexMin={"18em"}>
          <p>
            <H3.Text>{text}</H3.Text>
          </p>
          <p>
            <H3.Text>{text}</H3.Text>
          </p>
        </Flex>
      </EmptyDiv>

      <EmptyDiv>
        <H3.Text>{text}</H3.Text>
      </EmptyDiv>

      <EmptyDiv>
        <Flex variant="albatross" flexMin={"8em"}>
          {/* This element has the holy grail trick applied */}
          <H3.Text className="flex--auto">Title</H3.Text>

          <H3.Text>{text}</H3.Text>
        </Flex>
      </EmptyDiv>
    </Flex>
  );
};

AlbatrossVariantWithContent.args = {};

AlbatrossVariantWithContent.argTypes = Default.argTypes;

export const PancakeVariant: Story<FlexProps> = (args) => {
  // const debug = boolean('Debug layout', false);

  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?";
  return (
    <>
      <H3.Text>
        Pancake variant is used to provide enough space for each item, without
        breakpoints, fully automatic.
      </H3.Text>
      <Flex variant="pancake">
        <EmptyDiv>
          <p>
            <H3.Text>{text}</H3.Text>
          </p>
          <p>
            <H3.Text>{text}</H3.Text>
          </p>
        </EmptyDiv>

        <EmptyDiv>
          <H3.Text>{text}</H3.Text>
        </EmptyDiv>

        <EmptyDiv>
          <H3.Text>{text}</H3.Text>
        </EmptyDiv>
      </Flex>
    </>
  );
};

PancakeVariant.args = {};

PancakeVariant.argTypes = Default.argTypes;

export const SameHeightInnerDivs: Story<FlexProps> = (args) => {
  // const debug = boolean('Debug layout', false);

  return (
    <>
      <H3.Text>
        Every item has fixed height, but the equalHeight variant can reset them
        to 100%.
      </H3.Text>
      <Flex border={"1px solid green"}>
        <EmptyDiv height={"10em"}>
          <H3.Text>Text 1</H3.Text>
        </EmptyDiv>

        <EmptyDiv height={"5em"}>
          <H3.Text>Text 2</H3.Text>
        </EmptyDiv>

        <EmptyDiv height={"12em"}>
          <H3.Text>
            Longer Longer Longer Longer Longer Longer Longer Text 3
          </H3.Text>
        </EmptyDiv>
      </Flex>

      <Flex variant="equalHeight" border={"1px solid green"}>
        <EmptyDiv height={"10em"}>
          <H3.Text>Text 1</H3.Text>
        </EmptyDiv>

        <EmptyDiv height={"5em"}>
          <H3.Text>Text 2</H3.Text>
        </EmptyDiv>

        <EmptyDiv height={"12em"}>
          <H3.Text>
            Longer Longer Longer Longer Longer Longer Longer Text 3
          </H3.Text>
        </EmptyDiv>
      </Flex>
    </>
  );
};

SameHeightInnerDivs.args = {};

SameHeightInnerDivs.argTypes = Default.argTypes;
