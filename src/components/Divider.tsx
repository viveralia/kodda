import type { FC } from "react";
import { StyleSheet, View } from "react-native";

export const Divider: FC = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "#eee",
    height: 1,
    width: "100%",
  },
});
