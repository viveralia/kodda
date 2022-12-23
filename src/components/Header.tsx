import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import type { FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { Text } from "./Text";

export const Header: FC<NativeStackHeaderProps> = ({ options }) => (
  <SafeAreaView>
    <Text
      color="emphasis"
      size="extraLarge"
      weight="bold"
      style={[options.headerStyle, styles.header]}
    >
      {options.title}
    </Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  header: {
    paddingBottom: 16,
    paddingHorizontal: 18,
    paddingTop: 16,
  },
});
