import { type FC, useCallback } from "react";
import { FlatList, SafeAreaView, StyleSheet, View, type ListRenderItem } from "react-native";

import { Button, Divider } from "~components";
import { useLogOutMutation } from "~features/auth/hooks/useLogOutMutation";

import type { User } from "../api/usersApi";
import { UserListItem } from "../components/UserListItem";
import { useUserListInifniteQuery } from "../hooks/useUserListInifiniteQuery";

const renderItem: ListRenderItem<User> = ({ item }) => {
  return <UserListItem user={item} />;
};

const keyExtractor = (item: User, index: number) => index.toString();

export const UserListScreen: FC = () => {
  const logOut = useLogOutMutation();
  const { data, fetchNextPage } = useUserListInifniteQuery();
  const users = data?.pages.map((group) => group.results.map((result) => result)).flat() || [];

  const onEndReached = useCallback(() => {
    return fetchNextPage();
  }, [fetchNextPage]);

  function handleLogOut() {
    return logOut.mutate();
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Divider}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
      <SafeAreaView>
        <Button style={styles.button} onPress={handleLogOut}>
          Log out
        </Button>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 18,
    marginVertical: 14,
  },
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
