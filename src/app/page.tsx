"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  CreditCard,
  Facebook,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  Sparkles,
  Star,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: BookOpen,
    title: "Active Recall",
    description:
      "Teknik mengingat aktif yang membantu memperkuat memori jangka panjang melalui latihan berulang yang terstruktur.",
    bgGradient: "bg-linear-to-br from-blue-50 to-blue-100",
    iconBg: "bg-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Storytelling",
    description:
      "Mengubah materi pembelajaran menjadi cerita menarik yang mudah diingat dan dipahami.",
    bgGradient: "bg-linear-to-br from-purple-50 to-purple-100",
    iconBg: "bg-purple-500",
  },
  {
    icon: Network,
    title: "Mind Map",
    description:
      "Visualisasi konsep dalam bentuk peta pikiran yang memudahkan pemahaman hubungan antar topik.",
    bgGradient: "bg-linear-to-br from-green-50 to-green-100",
    iconBg: "bg-green-500",
  },
  {
    icon: CreditCard,
    title: "Flashcards",
    description:
      "Kartu belajar digital yang dapat disesuaikan untuk latihan hafalan yang efektif dan terorganisir.",
    bgGradient: "bg-linear-to-br from-yellow-50 to-yellow-100",
    iconBg: "bg-yellow-500",
  },
  {
    icon: Sparkles,
    title: "Ice Breaking",
    description:
      "Aktivitas pembuka yang menyenangkan untuk memulai sesi belajar dengan semangat dan fokus yang optimal.",
    bgGradient: "bg-linear-to-br from-pink-50 to-pink-100",
    iconBg: "bg-pink-500",
  },
];

const testimonials = [
  {
    name: "Sarah Putri",
    role: "Mahasiswa Kedokteran",
    avatar: "/people/sarah.jpg",
    rating: 5,
    quote:
      '"Hafalin sangat membantu saya menghafal materi anatomi. Fitur storytelling membuat materi yang sulit jadi mudah diingat!"',
  },
  {
    name: "Ahmad Rizki",
    role: "Siswa SMA",
    avatar: "/people/ahmad.jpg",
    rating: 5,
    quote:
      '"Mind map di Hafalin bikin belajar sejarah jadi lebih terstruktur. Nilai ujian saya naik drastis!"',
  },
  {
    name: "Lisa Maharani",
    role: "Guru SD",
    avatar: "/people/lisa.jpg",
    rating: 5,
    quote:
      '"Platform yang luar biasa! Saya gunakan untuk mengajar siswa dan mereka jadi lebih antusias belajar."',
  },
];

const footerFeatures = [
  "Active Recall",
  "Storytelling",
  "Mind Map",
  "Flashcards",
];

const contactInfo = [
  { icon: Mail, text: "info@hafalin.com" },
  { icon: Phone, text: "+62 812-3456-7890" },
  { icon: MapPin, text: "Jakarta, Indonesia" },
];

const socialMedia = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-start bg-white">
      <div className="w-full">
        <header className="w-full h-18 bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-linear-to-r from-blue-500 to-purple-500">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-gray-800 text-xl sm:text-2xl">
                Hafalin
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <a
                href="#"
                className="font-medium text-gray-700 text-sm lg:text-base hover:text-blue-500 transition-colors"
              >
                Beranda
              </a>
              <a
                href="#"
                className="font-medium text-gray-700 text-sm lg:text-base hover:text-blue-500 transition-colors"
              >
                Fitur
              </a>
              <a
                href="#"
                className="font-medium text-gray-700 text-sm lg:text-base hover:text-blue-500 transition-colors"
              >
                Tentang
              </a>
              <a
                href="#"
                className="font-medium text-gray-700 text-sm lg:text-base hover:text-blue-500 transition-colors"
              >
                Masuk
              </a>
              <Button className="h-10 px-4 lg:px-6 bg-linear-to-r from-blue-500 to-purple-500 hover:opacity-90 rounded-lg">
                <span className="font-medium text-white text-sm lg:text-base">
                  Daftar
                </span>
              </Button>
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <nav className="flex flex-col px-4 py-4 gap-4">
                <a
                  href="#"
                  className="font-medium text-gray-700 text-base py-2"
                >
                  Beranda
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-700 text-base py-2"
                >
                  Fitur
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-700 text-base py-2"
                >
                  Tentang
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-700 text-base py-2"
                >
                  Masuk
                </a>
                <Button className="h-10 px-6 bg-linear-to-r from-blue-500 to-purple-500 hover:opacity-90 rounded-lg w-full">
                  <span className="font-medium text-white text-base">
                    Daftar
                  </span>
                </Button>
              </nav>
            </div>
          )}
        </header>

        <main>
          <section className="w-full min-h-screen sm:min-h-0 sm:h-auto bg-linear-to-br from-blue-50 to-purple-50 py-12 sm:py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
                  <div className="flex flex-col">
                    <h1 className="font-bold text-gray-800 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                      Belajar Efektif, Mudah, dan Interaktif dengan Hafalin!
                    </h1>
                    <p className="font-normal text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mt-4 lg:mt-6">
                      Platform pembelajaran berbasis AI yang membantu Anda
                      menguasai materi dengan metode yang telah terbukti efektif
                      dan menyenangkan.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="h-14 lg:h-16 px-6 lg:px-8 bg-linear-to-r from-blue-500 to-purple-500 hover:opacity-90 rounded-xl w-full sm:w-auto">
                      <span className="font-semibold text-white text-base lg:text-lg">
                        Mulai Sekarang
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-14 lg:h-16 px-6 lg:px-8 border-2 border-blue-500 rounded-xl hover:bg-blue-50 w-full sm:w-auto"
                    >
                      <span className="font-semibold text-blue-500 text-base lg:text-lg">
                        Masuk
                      </span>
                    </Button>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
                  <div
                    className="relative w-full aspect-video rounded-2xl shadow-2xl bg-cover bg-center"
                    style={{ backgroundImage: "url(/hero.png)" }}
                  >
                    <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-blue-200 rounded-full opacity-50" />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-purple-200 rounded-full opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-12 lg:gap-16">
                <div className="flex flex-col gap-2 text-center">
                  <h2 className="font-bold text-gray-800 text-2xl sm:text-3xl lg:text-4xl">
                    Fitur Unggulan
                  </h2>
                  <p className="font-normal text-gray-600 text-base sm:text-lg lg:text-xl">
                    Metode pembelajaran yang telah terbukti efektif untuk
                    meningkatkan daya ingat
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <Card
                        key={index}
                        className={`${feature.bgGradient} border-0 rounded-2xl`}
                      >
                        <CardContent className="p-6 lg:p-8 flex flex-col gap-4 lg:gap-6">
                          <div
                            className={`w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center ${feature.iconBg} rounded-xl`}
                          >
                            <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-800 text-xl lg:text-2xl">
                            {feature.title}
                          </h3>
                          <p className="font-normal text-gray-600 text-sm lg:text-base leading-relaxed">
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-linear-to-br from-gray-50 to-blue-50 py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-12 lg:gap-16">
                <div className="flex flex-col gap-2 text-center">
                  <h2 className="font-bold text-gray-800 text-2xl sm:text-3xl lg:text-4xl">
                    Testimoni Pengguna
                  </h2>
                  <p className="font-normal text-gray-600 text-base sm:text-lg lg:text-xl">
                    Apa kata mereka yang telah merasakan manfaat Hafalin
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {testimonials.map((testimonial, index) => (
                    <Card
                      key={index}
                      className="bg-white border-0 rounded-2xl shadow-lg"
                    >
                      <CardContent className="p-6 lg:p-8 flex flex-col gap-4 lg:gap-6">
                        <div className="flex items-center gap-4">
                          <div
                            className="w-12 h-12 rounded-full bg-cover bg-center shrink-0"
                            style={{
                              backgroundImage: `url(${testimonial.avatar})`,
                            }}
                          />
                          <div className="flex flex-col">
                            <div className="font-semibold text-gray-800 text-base">
                              {testimonial.name}
                            </div>
                            <div className="font-normal text-gray-600 text-sm">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>

                        <p className="font-normal text-gray-600 text-sm lg:text-base leading-relaxed">
                          {testimonial.quote}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-linear-to-r from-blue-500 to-purple-500 py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center gap-6 lg:gap-8 text-center">
                <h2 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
                  Siap Memulai Perjalanan Belajar Anda?
                </h2>
                <p className="font-normal text-blue-100 text-base sm:text-lg lg:text-xl">
                  Bergabunglah dengan ribuan pengguna yang telah merasakan
                  manfaat belajar dengan Hafalin
                </p>
                <Button className="h-14 lg:h-15 px-8 lg:px-10 bg-white hover:bg-gray-50 rounded-xl w-full sm:w-auto">
                  <span className="font-semibold text-blue-500 text-base lg:text-lg">
                    Mulai Gratis Sekarang
                  </span>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full bg-gray-900 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:gap-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-linear-to-r from-blue-500 to-purple-500">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-bold text-white text-xl lg:text-2xl">
                      Hafalin
                    </div>
                  </div>
                  <p className="font-normal text-gray-400 text-sm lg:text-base leading-relaxed">
                    Platform pembelajaran interaktif berbasis AI untuk belajar
                    yang lebih efektif dan menyenangkan.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-white text-base lg:text-lg">
                    Fitur
                  </h3>
                  <div className="flex flex-col gap-2">
                    {footerFeatures.map((feature, index) => (
                      <a
                        key={index}
                        href="#"
                        className="font-normal text-gray-400 text-sm lg:text-base hover:text-white transition-colors"
                      >
                        {feature}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-white text-base lg:text-lg">
                    Kontak
                  </h3>
                  <div className="flex flex-col gap-2">
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon;
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-gray-400 shrink-0" />
                          <span className="font-normal text-gray-400 text-sm lg:text-base">
                            {contact.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-white text-base lg:text-lg">
                    Media Sosial
                  </h3>
                  <div className="flex gap-4">
                    {socialMedia.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                        >
                          <Icon className="w-5 h-5 text-gray-400" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-800">
                <p className="font-normal text-gray-400 text-sm lg:text-base text-center">
                  © 2024 Hafalin. Semua hak dilindungi.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
