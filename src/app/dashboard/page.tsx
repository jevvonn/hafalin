"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowUpDown,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  Flame,
  Search,
  TrendingUp,
  X,
} from "lucide-react";

const statsData = [
  {
    title: "Total Streak",
    value: "24",
    change: "+2 hari ini",
    changeType: "positive",
    icon: Flame,
  },
  {
    title: "Materi Selesai",
    value: "156",
    change: "12 bulan ini",
    changeType: "info",
    icon: BookOpen,
  },
];

const weeklyTargetData = [
  { day: "Sen", completed: true },
  { day: "Sel", completed: true },
  { day: "Rab", completed: true },
  { day: "Kam", completed: true },
  { day: "Jum", completed: false },
  { day: "Sab", completed: false },
  { day: "Min", completed: false },
];

const activityData = [
  {
    date: "15 Des 2024",
    time: "14:30 WIB",
    title: "Active Recall: Fundamental JavaScript",
    subtitle: "Kursus: Web Development Bootcamp",
    type: "Active Recall",
    typeBg: "bg-purple-100",
    typeText: "text-purple-800",
    status: "Selesai",
    statusBg: "bg-green-100",
    statusText: "text-green-800",
  },
  {
    date: "14 Des 2024",
    time: "09:15 WIB",
    title: "Mind Map : React",
    subtitle: "Kursus: React Advanced Concepts",
    type: "Mind Map",
    typeBg: "bg-purple-100",
    typeText: "text-purple-800",
    status: "Aktif",
    statusBg: "bg-green-100",
    statusText: "text-green-800",
  },
  {
    date: "13 Des 2024",
    time: "16:45 WIB",
    title: "Story Telling: Build a Todo App",
    subtitle: "Kursus: JavaScript Projects",
    type: "Story Telling",
    typeBg: "bg-red-100",
    typeText: "text-orange-800",
    status: "Review",
    statusBg: "bg-yellow-100",
    statusText: "text-yellow-800",
  },
  {
    date: "12 Des 2024",
    time: "11:20 WIB",
    title: "Flash Card: Best Practices in CSS",
    subtitle: "Forum: Frontend Development",
    type: "Flash Cards",
    typeBg: "bg-yellow-100",
    typeText: "text-yellow-800",
    status: "Aktif",
    statusBg: "bg-green-100",
    statusText: "text-green-800",
  },
];

const DashboardPage = () => {
  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="border-gray-100 shadow-sm">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="font-medium text-gray-600 text-sm">
                    {stat.title}
                  </p>
                  <p className="font-bold text-gray-800 text-2xl sm:text-3xl">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1">
                    <TrendingUp
                      className={`w-3 h-3 ${
                        stat.changeType === "positive"
                          ? "text-green-600"
                          : "text-blue-600"
                      }`}
                    />
                    <p
                      className={`font-normal text-sm ${
                        stat.changeType === "positive"
                          ? "text-green-600"
                          : "text-blue-600"
                      }`}
                    >
                      {stat.change}
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-lg bg-linear-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning History Section */}
      <section className="space-y-4 lg:space-y-6">
        <div className="space-y-2">
          <h3 className="font-bold text-gray-900 text-xl sm:text-2xl lg:text-3xl">
            Riwayat Belajar
          </h3>
          <p className="font-normal text-gray-600 text-sm sm:text-base">
            Lihat semua aktivitas pembelajaran Anda
          </p>
        </div>

        {/* Filters */}
        <Card className="border shadow-sm">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Select defaultValue="all-activities">
                <SelectTrigger className="w-full sm:w-[180px] bg-gray-50 border-gray-300">
                  <SelectValue placeholder="Semua Aktivitas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-activities">
                    Semua Aktivitas
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all-time">
                <SelectTrigger className="w-full sm:w-[180px] bg-gray-50 border-gray-300">
                  <SelectValue placeholder="Semua Waktu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-time">Semua Waktu</SelectItem>
                </SelectContent>
              </Select>

              <div className="relative flex-1 sm:max-w-[256px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Cari aktivitas..."
                  className="pl-10 bg-gray-50 border-gray-300"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Table - Desktop */}
        <Card className="border shadow-sm overflow-hidden hidden md:block">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 border-b">
                    <TableHead className="font-semibold text-gray-900 text-sm">
                      <div className="flex items-center gap-2">
                        Waktu
                        <ArrowUpDown className="w-3.5 h-3.5" />
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900 text-sm">
                      <div className="flex items-center gap-2">
                        Detail Aktivitas
                        <ArrowUpDown className="w-3.5 h-3.5" />
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900 text-sm">
                      <div className="flex items-center gap-2">
                        Tipe
                        <ArrowUpDown className="w-3.5 h-3.5" />
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900 text-sm">
                      Status
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900 text-sm text-center">
                      Aksi
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activityData.map((activity, index) => (
                    <TableRow key={index} className="border-t">
                      <TableCell>
                        <div className="space-y-1">
                          <p className="font-medium text-gray-900 text-sm">
                            {activity.date}
                          </p>
                          <p className="font-normal text-gray-500 text-sm">
                            {activity.time}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="font-medium text-gray-900 text-sm">
                            {activity.title}
                          </p>
                          <p className="font-normal text-gray-500 text-sm">
                            {activity.subtitle}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${activity.typeBg} ${activity.typeText} font-medium text-xs rounded-full h-auto py-1 px-2.5`}
                        >
                          {activity.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${activity.statusBg} ${activity.statusText} font-medium text-xs rounded-full h-auto py-1 px-2.5`}
                        >
                          {activity.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 h-auto py-1 px-2"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          <span className="font-medium text-sm">Lihat</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Activity Cards - Mobile */}
        <div className="space-y-4 md:hidden">
          {activityData.map((activity, index) => (
            <Card key={index} className="border shadow-sm">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1 flex-1">
                    <p className="font-medium text-gray-900 text-sm">
                      {activity.title}
                    </p>
                    <p className="font-normal text-gray-500 text-xs">
                      {activity.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    className={`${activity.typeBg} ${activity.typeText} font-medium text-xs rounded-full h-auto py-1 px-2.5`}
                  >
                    {activity.type}
                  </Badge>
                  <Badge
                    className={`${activity.statusBg} ${activity.statusText} font-medium text-xs rounded-full h-auto py-1 px-2.5`}
                  >
                    {activity.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="space-y-0.5">
                    <p className="font-medium text-gray-900 text-xs">
                      {activity.date}
                    </p>
                    <p className="font-normal text-gray-500 text-xs">
                      {activity.time}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 h-auto py-1.5 px-3"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    <span className="font-medium text-sm">Lihat</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-normal text-gray-700 text-sm">
            Menampilkan 1-4 dari 24 aktivitas
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled
              className="gap-1 opacity-50 h-auto py-2 px-3 sm:px-4"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="font-medium text-sm hidden sm:inline">
                Previous
              </span>
            </Button>
            <Button
              size="sm"
              className="bg-blue-600 text-white hover:bg-blue-700 h-auto py-2 px-3 min-w-8"
            >
              <span className="font-medium text-sm">1</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-auto py-2 px-3 min-w-8"
            >
              <span className="font-medium text-sm text-gray-700">2</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-auto py-2 px-3 min-w-8"
            >
              <span className="font-medium text-sm text-gray-700">3</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1 h-auto py-2 px-3 sm:px-4"
            >
              <span className="font-medium text-sm hidden sm:inline text-gray-700">
                Next
              </span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Weekly Target */}
      <Card className="border-gray-100 shadow-sm">
        <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
              Target Belajar Mingguan
            </h3>
            <p className="font-normal text-gray-500 text-sm">
              4/7 hari tercapai
            </p>
          </div>
          <div className="flex items-center justify-between sm:gap-4 overflow-x-auto pb-2">
            {weeklyTargetData.map((day, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 shrink-0"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
                    day.completed ? "bg-green-500" : "bg-gray-200"
                  }`}
                >
                  {day.completed ? (
                    <Check className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <X className="w-3 h-3 text-gray-400" />
                  )}
                </div>
                <span className="font-normal text-gray-600 text-xs text-center">
                  {day.day}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
