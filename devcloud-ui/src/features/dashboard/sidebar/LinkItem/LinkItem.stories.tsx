import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LinkItem from "./LinkItem";
import UserIcon from "../icons/UserIcon/UserIcon";

export default {
  title: "Dashboard/LinkItem",
  component: LinkItem,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as ComponentMeta<typeof LinkItem>;

const Template: ComponentStory<typeof LinkItem> = (args) => <LinkItem {...args} />;

export const UserLinkItem = Template.bind({});
UserLinkItem.args = {
  label: "Users",
  icon: <UserIcon />,
  href: "#",
};
