import { auth } from "@/auth";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Dashboard",
};

const LayoutDashboard = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  if (!session) {
    redirect("/auth");
  }

  return (
    <SessionProvider session={session}>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 flex flex-col min-h-screen">
          <Header />
          {children}
        </main>
      </div>
    </SessionProvider>
  );
};

export default LayoutDashboard;
