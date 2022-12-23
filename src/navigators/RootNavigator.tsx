import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { FC } from "react";

import { useMeQuery } from "~features/auth/hooks/useMeQuery";
import { theme } from "~theme";

import { PrivateNavigator } from "./PrivateNavigator";
import { PublicNavigator } from "./PublicNavigator";

export type RootStackParamList = {
  Public: undefined;
  Private: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: FC = () => {
  const { data: user } = useMeQuery();

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Private" component={PrivateNavigator} />
        ) : (
          <Stack.Screen
            name="Public"
            component={PublicNavigator}
            options={{ animationTypeForReplace: "pop" }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
