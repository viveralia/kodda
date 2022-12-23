import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

import { api } from "~api";

import type { getMe } from "../api/authApi";
import { logOut } from "../api/authApi";

export const useLogOutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logOut,
    onError: () => Alert.alert("Couldn't log out"),
    onSuccess: async () => {
      // Remove user data
      await SecureStore.deleteItemAsync("user");

      // Remove auth header in API
      api.deleteHeader("Bearer ");

      // Set user state
      queryClient.setQueryData<Awaited<ReturnType<typeof getMe>>>(["me"], null);
    },
  });
};
