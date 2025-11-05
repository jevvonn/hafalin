"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

const LoginTabs = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="login-email"
          className="font-medium text-gray-700 text-sm"
        >
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            id="login-email"
            type="email"
            placeholder="contoh@email.com"
            className="h-12 sm:h-[50px] pl-12 font-normal text-sm sm:text-base"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="login-password"
          className="font-medium text-gray-700 text-sm"
        >
          Kata Sandi
        </Label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            id="login-password"
            type={showPassword ? "text" : "password"}
            placeholder="Masukkan kata sandi"
            className="h-12 sm:h-[50px] pl-12 pr-12 font-normal text-sm sm:text-base"
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
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 text-sm">
        <a
          href="#"
          className="text-blue-500 hover:text-blue-600 transition-colors"
        >
          Lupa kata sandi?
        </a>
      </div>

      <Button className="h-12 mt-4 sm:mt-6 bg-linear-to-r from-blue-500 to-purple-500 shadow-lg font-semibold text-white text-sm sm:text-base hover:opacity-90 transition-opacity">
        Masuk
      </Button>
    </div>
  );
};

export default LoginTabs;
