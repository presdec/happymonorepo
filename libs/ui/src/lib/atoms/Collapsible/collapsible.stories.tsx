import {
  ColumnSpacingIcon,
  Cross2Icon,
  RowSpacingIcon,
} from "@radix-ui/react-icons";
import { Meta, Story } from "@storybook/react";
import { FC, useState } from "react";

import { Button } from "../Button";
import { Body } from "../Typography";
import { Flex, View } from "../View";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleProps,
  CollapsibleTrigger,
} from "./collapsible";

export default {
  component: Collapsible,
  title: "Atoms/Collapsible",
} as Meta;

const Template: Story<CollapsibleProps> = (args) => <Collapsible {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

const Repository: FC = ({ children }) => {
  return (
    <View
      backgroundColor="white"
      borderRadius={4}
      margin="10px 0"
      padding={"10px"}
    >
      {children}
    </View>
  );
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Flex alignItems="center" justifyContent="space-between">
        <Body.Text.LabelMedium color="white">
          @peduarte starred 3 repositories
        </Body.Text.LabelMedium>
        <CollapsibleTrigger asChild>
          <Button>{open ? <Cross2Icon /> : <RowSpacingIcon />}</Button>
        </CollapsibleTrigger>
      </Flex>

      <Repository>
        <Body.Text.LabelMedium>@radix-ui/primitives</Body.Text.LabelMedium>
      </Repository>

      <CollapsibleContent>
        <Repository>
          <Body.Text.LabelMedium>@radix-ui/colors</Body.Text.LabelMedium>
        </Repository>
        <Repository>
          <Body.Text.LabelMedium>@stitches/react</Body.Text.LabelMedium>
        </Repository>
      </CollapsibleContent>
    </Collapsible>
  );
};

Default.args = {};
Default.argTypes = {};

export const Vertical = () => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} data-orientation="vertical">
      <View margin="10px 0" padding={"10px"}>
        <CollapsibleTrigger asChild>
          <Button>{open ? <Cross2Icon /> : <ColumnSpacingIcon />}</Button>
        </CollapsibleTrigger>
      </View>

      <CollapsibleContent data-orientation="vertical">
        <Flex flexDirection="column">
          <Repository>
            <Body.Text.LabelMedium>@radix-ui/colors</Body.Text.LabelMedium>
          </Repository>
          <Repository>
            <Body.Text.LabelMedium>@radix-ui/colors</Body.Text.LabelMedium>
          </Repository>
          <Repository>
            <Body.Text.LabelMedium>@radix-ui/colors</Body.Text.LabelMedium>
          </Repository>
        </Flex>
      </CollapsibleContent>
    </Collapsible>
  );
};

Vertical.args = {};
Vertical.argTypes = {};
