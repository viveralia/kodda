import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { FC } from "react";

import { LogInScreen } from "~features/auth/screens/LogInScreen";

export type PublicStackParamList = {
  LogIn: undefined;
};

const Stack = createNativeStackNavigator<PublicStackParamList>();

export const PublicNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LogIn" component={LogInScreen} />
    </Stack.Navigator>
  );
};
