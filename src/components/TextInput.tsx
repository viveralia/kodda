import type { FC } from "react";
import {
  StyleSheet,
  TextInput as BaseTextInput,
  type TextInputProps as BaseTextInputProps,
} from "react-native";

export type TextInputProps = BaseTextInputProps;

export const TextInput: FC<TextInputProps> = ({ style, ...props }) => {
  return <BaseTextInput style={[styles.container, style]} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    border: "none",
    borderBottomColor: "#e4e6e9",
    borderBottomWidth: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
});
