import { cache } from "react";
// import { createTRPCMsw } from "msw-trpc";
import { headers } from "next/headers";

import { appRouter } from "./routers/_app";

const createContext = cache(async () => {
  const heads = new Headers(await headers());
  heads.set("x-trpc-source", "rsc");

  return {
    headers: heads,
  };
});

export const api = appRouter.createCaller(createContext);

// export const mockTrpc = createTRPCMsw(appRouter);
