"use client";

import API from "@/api/index.api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextValue = {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  const logIn = () => {
    setIsLoggedIn(true);
    // API.setAccessToken(accessToken);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    API.removeAccessToken();
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [router, isLoggedIn]);

  const value: AuthContextValue = {
    isLoggedIn,
    logIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
