import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState, type FC } from "react";

import { api } from "~api";
import { getMe } from "~features/auth/api/authApi";
import { RootNavigator } from "~navigators/RootNavigator";

const queryClient = new QueryClient();

const App: FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        const me = await getMe();
        queryClient.setQueryData(["me"], me);
        me && api.setHeader("Bearer ", me.token);
      } catch (error) {
        console.warn(error);
      } finally {
        await SplashScreen.hideAsync();
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />
      <RootNavigator />
    </QueryClientProvider>
  );
};

export default App;
