"use client";

import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Flame,
  History,
  Home,
  LogOut,
  Upload,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "Unggah PDF", icon: Upload, active: false },
  { label: "Streak", icon: Flame, active: false },
  { label: "Riwayat", icon: History, active: false },
  { label: "Profile", icon: User, active: false },
];

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <aside
      className={`sticky top-0 max-h-dvh inset-y-0 left-0 z-50 w-64 bg-white shadow-lg flex flex-col transition-transform duration-300 lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-linear-to-r from-blue-400 to-purple-500 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h1 className="font-bold text-gray-800 text-xl">Hafalin</h1>
        </div>
        <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <nav className="flex-1 px-6 space-y-2">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              item.active
                ? "bg-linear-to-r from-blue-400 to-purple-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium text-base">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6">
        <Button
          variant="ghost"
          className="w-full justify-start gap-4 text-red-600 hover:text-red-700 hover:bg-red-50 h-auto py-3"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-base">Logout</span>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
