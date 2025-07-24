import { cache } from "react";
import { createTRPCMsw } from "msw-trpc";
import { createCaller } from "@trpc/server";
import { headers } from "next/headers";

import { appRouter } from "./routers/_app";

const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");

  return {
    headers: heads,
  };
});

export const api = createCaller(appRouter)(createContext);

export const mockTrpc = createTRPCMsw(appRouter);