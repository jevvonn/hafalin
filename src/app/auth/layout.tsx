import { auth } from "@/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Masuk",
};

const LayoutAuth = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  if (session) return redirect("/dashboard");

  return <>{children}</>;
};

export default LayoutAuth;
