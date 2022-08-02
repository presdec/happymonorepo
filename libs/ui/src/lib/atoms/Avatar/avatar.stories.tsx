import { Meta, Story } from "@storybook/react";

import { Avatar, AvatarProps } from "./avatar";

export default {
  component: Avatar,
  title: "Atoms/Avatar",
  // decorators: ThemeDecorators,
} as Meta;

const Template: Story = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Default: Story<AvatarProps> = (args) => {
  return <Avatar alt={args.alt} src={args.src} />;
};

Default.args = {};

Default.argTypes = {
  // name: {
  //   defaultValue: "Jane Doe",
  //   control: {
  //     type: "text",
  //   },
  // },
  // size: {
  //   defaultValue: "scale1600",
  //   control: {
  //     type: "text",
  //   },
  // },
  alt: {
    defaultValue: "Jane Doe",
    control: {
      type: "text",
    },
  },
  src: {
    defaultValue:
      "https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy",
    control: {
      type: "text",
    },
  },
};

const srcBroken = "https://broken.link.com/broken-pic.jpg";
const AvatarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="42"
    height="42"
  >
    <path
      d="M50 51.7a22.1 22.1 0 100-44.2 22.1 22.1 0 000 44.2zM87.9 69.3a27.8 27.8 0 00-21.2-16.1 4 4 0 00-2.8.7 23.5 23.5 0 01-27.6 0 4 4 0 00-2.8-.7 27.5 27.5 0 00-21.2 16.1c-.3.6-.2 1.3.1 1.8a52.8 52.8 0 007 8.9 43.4 43.4 0 0056.9 3.8 56.3 56.3 0 008.9-8.8c.9-1.2 1.8-2.5 2.6-3.9.3-.6.3-1.2.1-1.8z"
      fill="currentColor"
    />
  </svg>
);

export const Advanced: Story<AvatarProps> = (args) => (
  <>
    <h1>Without image & with fallback</h1>
    <Avatar>JS</Avatar>

    <h1>With image & with fallback</h1>
    <Avatar alt="John Smith" src={args.src} delayMs={300} />

    <h1>With image & with fallback (but broken src)</h1>
    <Avatar
      alt="John Smith"
      src={srcBroken}
      onLoadingStatusChange={console.log}
    >
      <AvatarIcon />
    </Avatar>
  </>
);

Advanced.args = Default.args;

Advanced.argTypes = Default.argTypes;

Advanced.decorators = [
  (Story) => (
    <div style={{ margin: "3em" }}>
      <Story />
    </div>
  ),
];
