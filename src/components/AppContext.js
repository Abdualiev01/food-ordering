"use client";

import { SessionProvider } from "next-auth/react";
import { createContext } from "react";

export const CartContext = createContext({});

export function AppProvider({ children }) {
  return (
  <SessionProvider>{children}</SessionProvider>
  );
}
