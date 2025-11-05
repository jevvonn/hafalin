import { initTRPC } from "@trpc/server";
import { cache } from "react";
import superjson from "superjson";
import { type Session } from "next-auth";
import db from "@/database";
import { auth } from "@/auth";

type CreateContextOptions = {
  session: Session | null;
};

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    db,
  };
};

export const createTRPCContext = cache(async () => {
  const session = await auth();

  return createInnerTRPCContext({
    session,
  });
});

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const publicProcedure = t.procedure;
