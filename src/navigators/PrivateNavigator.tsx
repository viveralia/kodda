import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { FC } from "react";

import { Header } from "~components";
import { UserListScreen } from "~features/users/screens/UserListScreen";

export type PrivateStackParamList = {
  UserList: undefined;
};

const Stack = createNativeStackNavigator<PrivateStackParamList>();

export const PrivateNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserList"
        component={UserListScreen}
        options={{ header: Header, title: "Users" }}
      />
    </Stack.Navigator>
  );
};
