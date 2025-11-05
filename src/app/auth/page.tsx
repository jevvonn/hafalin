"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Lock, Mail, User, BookOpen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-white">
      <div className="flex flex-col lg:flex-row w-full max-w-screen-2xl mx-auto">
        {/* Left Panel - Hero Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-linear-to-br from-blue-500 to-purple-500 p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col items-center w-full max-w-md">
            {/* Logo and Brand - Mobile */}
            <div className="flex lg:hidden items-center gap-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/20">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="font-bold text-white text-2xl">Hafalin</h1>
            </div>

            {/* Illustration Card */}
            <Card className="w-full aspect-square max-w-sm rounded-2xl p-0 border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0 h-full">
                <Image
                  width={500}
                  height={500}
                  src="/auth/auth-hero.png"
                  alt="Students studying illustration"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>

            {/* Brand Info - Desktop */}
            <div className="hidden lg:block mt-8 text-center">
              <h1 className="font-bold text-white text-3xl xl:text-4xl">
                Hafalin
              </h1>

              <p className="mt-2 font-medium text-white/90 text-lg xl:text-xl">
                Platform Pembelajaran Interaktif
              </p>

              <p className="mt-2 font-normal text-white/80 text-base xl:text-lg">
                Belajar lebih mudah, hafalan lebih kuat
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-6 sm:p-8 lg:p-12">
          <div className="w-full max-w-md">
            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Header */}
              <div className="flex flex-col gap-1 text-center">
                <h2 className="font-bold text-gray-800 text-2xl sm:text-3xl">
                  Mulai Sekarang
                </h2>

                <p className="font-normal text-gray-600 text-sm sm:text-base">
                  Daftar akun untuk memulai pembelajaran
                </p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="daftar" className="w-full">
                <TabsList className="w-full h-11 bg-gray-100 p-1 rounded-lg">
                  <TabsTrigger
                    value="masuk"
                    className="w-full cursor-pointer h-9 font-medium text-sm rounded-md data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=inactive]:text-gray-600 transition-all"
                  >
                    Masuk
                  </TabsTrigger>
                  <TabsTrigger
                    value="daftar"
                    className="w-full cursor-pointer h-9 font-medium text-sm rounded-md data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=inactive]:text-gray-600 transition-all"
                  >
                    Daftar
                  </TabsTrigger>
                </TabsList>

                {/* Login Form */}
                <TabsContent value="masuk" className="mt-6 sm:mt-8">
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
                </TabsContent>

                {/* Register Form */}
                <TabsContent value="daftar" className="mt-6 sm:mt-8">
                  <div className="flex flex-col gap-4 sm:gap-5">
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="username"
                        className="font-medium text-gray-700 text-sm"
                      >
                        Username
                      </Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="username"
                          type="text"
                          placeholder="Masukkan Username"
                          className="h-12 sm:h-[50px] pl-12 font-normal text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="email"
                        className="font-medium text-gray-700 text-sm"
                      >
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="contoh@email.com"
                          className="h-12 sm:h-[50px] pl-12 font-normal text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="password"
                        className="font-medium text-gray-700 text-sm"
                      >
                        Kata Sandi
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="password"
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

                    <Button className="h-12 mt-4 sm:mt-6 bg-linear-to-r from-blue-500 to-purple-500 shadow-lg font-semibold text-white text-sm sm:text-base hover:opacity-90 transition-opacity">
                      Daftar
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
