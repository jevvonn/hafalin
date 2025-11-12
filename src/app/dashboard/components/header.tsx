import { auth } from "@/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const Header = async () => {
  const session = await auth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-gray-800 text-xl sm:text-2xl">
              Dashboard
            </h2>
            <p className="font-normal text-gray-600 text-sm sm:text-base hidden sm:block">
              Selamat datang kembali! Mari lanjutkan belajar hari ini.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
            <AvatarFallback>
              {session?.user?.name?.charAt(0).toUpperCase() ?? "U"}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
