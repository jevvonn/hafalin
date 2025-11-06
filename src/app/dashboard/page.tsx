"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

const DashboardPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session
        ? `Welcome to your dashboard, ${session.user?.name}`
        : "Loading..."}

      <Button
        variant={`destructive`}
        onClick={async () => {
          await signOut({
            redirectTo: "/auth",
          });
        }}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default DashboardPage;
