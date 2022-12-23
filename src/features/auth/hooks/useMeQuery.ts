import { useQuery } from "@tanstack/react-query";
import { Alert } from "react-native";

import { getMe } from "../api/authApi";

export const useMeQuery = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    onError: () => Alert.alert("There was a problem getting your profile"),
  });
};
