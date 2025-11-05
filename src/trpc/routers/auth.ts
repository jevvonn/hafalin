import z from "zod";
import { createTRPCRouter, publicProcedure } from "../init";
import db from "@/database";

export const authRouter = createTRPCRouter({
  registerUser: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.email().min(1),
        password: z.string().min(6),
      })
    )
    .mutation(async ({ input, ctx }) => {
      let user = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (user) {
        return {
          success: false,
          error: "Email sudah terdaftar. Silakan gunakan email lain.",
        };
      }

      user = await db.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: input.password,
        },
      });

      if (user) {
        return {
          success: true,
          error: null,
        };
      }
    }),
});
