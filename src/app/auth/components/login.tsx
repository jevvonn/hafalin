"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import z from "zod";
import { toast } from "sonner";
import { trpc } from "@/trpc/react";

const formSchema = z.object({
  email: z.email("Email tidak valid"),
  password: z.string().min(1, "Kata sandi wajib diisi"),
});

const LoginTabs = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutateAsync } = trpc.authRouter.signInUser.useMutation();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const response = await mutateAsync(value);

      if (response?.success) {
        try {
          await signIn("credentials", {
            email: value.email,
            password: value.password,
            redirectTo: "/dashboard",
          });
        } catch (error) {
          console.error("Login failed:", error);
          toast.error("Email atau kata sandi salah. Silakan coba lagi.");
        }

        form.reset();
        return;
      }

      if (response?.error) {
        return toast.error(response.error);
      }
    },
  });

  return (
    <form
      className="flex flex-col gap-4 sm:gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.Field
        name="email"
        children={(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field data-invalid={isInvalid} className="flex flex-col gap-2">
              <FieldLabel
                htmlFor={field.name}
                className="font-medium text-gray-700 text-sm"
              >
                Email
              </FieldLabel>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="contoh@email.com"
                  type="email"
                  className="h-12 sm:h-[50px] pl-12 font-normal text-sm sm:text-base"
                  autoComplete="off"
                />
              </div>
              {isInvalid && (
                <FieldError
                  className="text-red-500"
                  errors={field.state.meta.errors}
                />
              )}
            </Field>
          );
        }}
      />

      <form.Field
        name="password"
        children={(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field data-invalid={isInvalid} className="flex flex-col gap-2">
              <FieldLabel
                htmlFor={field.name}
                className="font-medium text-gray-700 text-sm"
              >
                Kata Sandi
              </FieldLabel>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="contoh@email.com"
                  type={showPassword ? "text" : "password"}
                  className="h-12 sm:h-[50px] pl-12 font-normal text-sm sm:text-base"
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  )}
                </button>
              </div>
              {isInvalid && (
                <FieldError
                  className="text-red-500"
                  errors={field.state.meta.errors}
                />
              )}
            </Field>
          );
        }}
      />

      <Button
        type="submit"
        className="h-12 mt-4 sm:mt-6 bg-linear-to-r from-blue-500 to-purple-500 shadow-lg font-semibold text-white text-sm sm:text-base hover:opacity-90 transition-opacity"
      >
        Masuk
      </Button>
    </form>
  );
};

export default LoginTabs;
