"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import LoginTabs from "./components/login";
import { BookOpen } from "lucide-react";
import RegisterTabs from "./components/register";
import { useState } from "react";

export default function AuthPage() {
  const [tabs, setTabs] = useState<"masuk" | "daftar">("daftar");

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
              <Tabs className="w-full" value={tabs}>
                <TabsList className="w-full h-11 bg-gray-100 p-1 rounded-lg">
                  <TabsTrigger
                    value="masuk"
                    onClick={() => setTabs("masuk")}
                    className="w-full cursor-pointer h-9 font-medium text-sm rounded-md data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=inactive]:text-gray-600 transition-all"
                  >
                    Masuk
                  </TabsTrigger>
                  <TabsTrigger
                    value="daftar"
                    onClick={() => setTabs("daftar")}
                    className="w-full cursor-pointer h-9 font-medium text-sm rounded-md data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=inactive]:text-gray-600 transition-all"
                  >
                    Daftar
                  </TabsTrigger>
                </TabsList>

                {/* Login Form */}
                <TabsContent value="masuk" className="mt-6 sm:mt-8">
                  <LoginTabs />
                </TabsContent>

                {/* Register Form */}
                <TabsContent value="daftar" className="mt-6 sm:mt-8">
                  <RegisterTabs setTabs={setTabs} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
