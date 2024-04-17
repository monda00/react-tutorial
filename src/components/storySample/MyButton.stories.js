import MyButton from "./MyButton";

export default {
  title: "MyApp/MyButton",
  component: MyButton,
};

export const Index = {
  render: () => (
    <MyButton
      primary
      size="medium"
      label="button"
      onClick={() => console.log("Hello, Storybook")}
    />
  ),
};

export const White = {
  args: {
    size: "small",
    label: "Button",
    backgroundColor: "white",
    onClick: () => console.log("Hello, Storybook"),
  },
};
