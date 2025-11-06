import z from "zod";
import { createTRPCRouter, publicProcedure } from "../init";
import db from "@/database";
import { hashPassword, verifyPassword } from "@/lib/utils";

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

      const hashedPassword = await hashPassword(input.password);

      user = await db.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: hashedPassword,
        },
      });

      if (user) {
        return {
          success: true,
          error: null,
        };
      }
    }),
  signInUser: publicProcedure
    .input(
      z.object({
        email: z.string().min(1),
        password: z.string().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (!user) {
        return {
          success: false,
          error: "Email atau kata sandi salah. Silakan coba lagi.",
        };
      }

      const checkPassword = await verifyPassword(input.password, user.password);
      if (!checkPassword) {
        return {
          success: false,
          error: "Email atau kata sandi salah. Silakan coba lagi.",
        };
      }

      return {
        success: true,
        error: null,
      };
    }),
});
