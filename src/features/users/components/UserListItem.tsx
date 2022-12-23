import type { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

import { Text } from "~components";

import type { User } from "../api/usersApi";

export interface UserListItemProps {
  user: User;
}

export const UserListItem: FC<UserListItemProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: user.picture.medium }} />
      <View>
        <Text
          color="emphasis"
          numberOfLines={1}
        >{`${user.name.title} ${user.name.first} ${user.name.last}`}</Text>
        <Text size="small" numberOfLines={1}>
          {user.email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  image: {
    borderRadius: 20,
    height: 40,
    marginRight: 16,
    width: 40,
  },
});
