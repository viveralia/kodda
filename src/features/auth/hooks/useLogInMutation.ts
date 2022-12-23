import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

import { api } from "~api";

import type { getMe } from "../api/authApi";
import { logIn } from "../api/authApi";

export const useLogInMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logIn,
    onError: () => Alert.alert("Couldn't log in"),
    onSuccess: async (data) => {
      // Persist user data
      await SecureStore.setItemAsync("user", JSON.stringify(data));

      // Set auth headers in API
      api.setHeader("Bearer ", data.token);

      // Set user state
      queryClient.setQueryData<Awaited<ReturnType<typeof getMe>>>(["me"], {
        id: data.id,
        email: data.email,
      });
    },
  });
};
