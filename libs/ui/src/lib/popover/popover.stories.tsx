import { Cross2Icon, MixerHorizontalIcon } from '@radix-ui/react-icons';
import { ComponentMeta } from '@storybook/react';
import {
  Fieldset,
  Flex,
  IconButton,
  Input,
  Label,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from './popover';

export default {
  component: Popover,
  title: 'Popover',
} as ComponentMeta<typeof Popover>;

export const Primary = () => (
  <Popover>
    <PopoverTrigger asChild>
      <IconButton aria-label="Update dimensions">
        <MixerHorizontalIcon />
      </IconButton>
    </PopoverTrigger>
    <PopoverContent sideOffset={5}>
      <Flex css={{ flexDirection: 'column', gap: 10 }}>
        Dimensions
        <Fieldset>
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="maxWidth">Max. width</Label>
          <Input id="maxWidth" defaultValue="300px" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="25px" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="maxHeight">Max. height</Label>
          <Input id="maxHeight" defaultValue="none" />
        </Fieldset>
      </Flex>
      <PopoverClose aria-label="Close">
        <Cross2Icon />
      </PopoverClose>
    </PopoverContent>
  </Popover>
);

Primary.args = {};
