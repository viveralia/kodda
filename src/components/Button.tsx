import type { FC, ReactNode } from "react";
import { Text, TouchableOpacity, type TouchableOpacityProps, StyleSheet } from "react-native";

import { theme } from "~theme";

export interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  style,
  disabled,
  onPress,
  isLoading,
  loadingText,
  ...props
}) => {
  disabled = disabled || isLoading;

  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.5}
      style={[styles.container, disabled && styles.disabled, style]}
      onPress={disabled ? undefined : onPress}
      {...props}
    >
      {typeof children === "string" ? (
        <Text style={[styles.text, disabled && styles.disabledText]}>
          {isLoading ? loadingText : children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: 16,
  },
  disabled: {
    backgroundColor: "#747f96",
  },
  disabledText: {},
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
