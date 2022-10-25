import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormInput from "./FormInput";

export default {
  title: "Startpage/FormInput",
  component: FormInput,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const Email = Template.bind({});
Email.args = {
  label: "E-Mail",
  type: "email",
  placeholder: "E-Mail",
};
export const Password = Template.bind({});
Password.args = {
  label: "Password",
  type: "password",
  placeholder: "Password",
};
