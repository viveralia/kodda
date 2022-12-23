import * as SecureStore from "expo-secure-store";

export interface AuthUser {
  id: string;
  email: string;
}

interface Credentials {
  email: string;
  password: string;
}

type LogIn = (credentials: Credentials) => Promise<AuthUser & { token: string }>;

const dummyData = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  id: "4c480cbe-f924-46b0-91d1-af42c4a712d7",
};

export const logIn: LogIn = async ({ email }) => {
  return { ...dummyData, email };
};

type LogOut = () => Promise<void>;

export const logOut: LogOut = async () => {
  return;
};

type GetMe = () => Promise<(AuthUser & { token: string }) | null>;

export const getMe: GetMe = async () => {
  const user = await SecureStore.getItemAsync("user");
  if (!user) return null;
  return JSON.parse(user) as AuthUser & { token: string };
};
