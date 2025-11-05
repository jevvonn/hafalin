import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masuk",
};

const LayoutAuth = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default LayoutAuth;
