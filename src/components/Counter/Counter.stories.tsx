import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";

import { store } from "app/store";

import Counter from "./Counter";

export default {
  title: "Component/Counter",
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export const Default = Template.bind({});
