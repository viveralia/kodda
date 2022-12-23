import { api } from "~api";

export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

interface Pagination {
  results: number;
  page: number;
}

type GetUsers = (pagination: Pagination) => Promise<{
  results: User[];
  info: { page: number };
}>;

export const getUsers: GetUsers = async ({ results, page }) => {
  const searchParams = new URLSearchParams();
  searchParams.append("results", results.toString());
  searchParams.append("page", page.toString());

  const response = await api.get<{
    results: User[];
    info: { page: number };
  }>("?" + searchParams.toString());

  if (!response.ok) throw new Error(response.problem);
  return response.data!;
};
