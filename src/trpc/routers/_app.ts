import { z } from "zod";
import { publicProcedure, createTRPCRouter } from "../init";
import { authRouter } from "./auth";

export const appRouter = createTRPCRouter({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(async (opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  authRouter: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
