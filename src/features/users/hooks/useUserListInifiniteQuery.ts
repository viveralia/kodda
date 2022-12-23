import { useInfiniteQuery } from "@tanstack/react-query";
import { Alert } from "react-native";

import { getUsers } from "../api/usersApi";

export const useUserListInifniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ["users"],
    queryFn: ({ pageParam = 1 }) => getUsers({ page: pageParam, results: 20 }),
    getNextPageParam: (data) => data.info.page + 1,
    onError: () => Alert.alert("Couldn't load the user list"),
  });
};
