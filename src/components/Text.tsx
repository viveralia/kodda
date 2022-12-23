import type { FC } from "react";
import { StyleSheet, Text as BaseText, type TextProps as BaseTextProps } from "react-native";

import { theme } from "~theme";

export interface TextProps extends BaseTextProps {
  weight?: "bold" | "normal";
  size?: "small" | "medium" | "large" | "extraLarge";
  color?: "emphasis" | "tenuous" | "primary";
  align?: "left" | "center" | "right";
}

export const Text: FC<TextProps> = ({ weight, size, color, style, align, children }) => {
  return (
    <BaseText style={[styles[weight!], styles[size!], styles[color!], styles[align!], style]}>
      {children}
    </BaseText>
  );
};

Text.defaultProps = {
  weight: "normal",
  size: "medium",
  color: "tenuous",
  align: "left",
};

/* eslint-disable react-native/no-unused-styles */
const styles = StyleSheet.create({
  bold: {
    fontWeight: "700",
  },
  center: {
    textAlign: "center",
  },
  emphasis: {
    color: "#081f42",
  },
  extraLarge: {
    fontSize: 28,
  },
  large: {
    fontSize: 22,
  },
  left: {
    textAlign: "left",
  },
  medium: {
    fontSize: 16,
  },
  normal: {
    fontWeight: "400",
  },
  primary: {
    color: theme.colors.primary,
  },
  right: {
    textAlign: "right",
  },
  small: {
    fontSize: 14,
  },
  tenuous: {
    color: "#7a869a",
  },
});
