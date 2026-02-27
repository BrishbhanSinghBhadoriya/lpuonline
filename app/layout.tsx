import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LPU Online Admission 2026 | Lovely Professional University",
  description:
    "Apply for LPU Online Admission 2026. UGC-entitled online UG & PG programs with flexible learning, mentorship, and placement support.",
  keywords: [
    "LPU Online",
    "Lovely Professional University",
    "LPU Admission 2026",
    "Online MBA",
    "Online BCA",
    "Online BBA",
    "Distance Learning",
  ],
  metadataBase: new URL("https://onlineuniversityadmission.online"),
  openGraph: {
    title: "LPU Online Admission 2026 | Lovely Professional University",
    description:
      "Enroll in LPU's UGC-entitled online UG/PG programs. Learn anywhere with flexible schedules and industry-focused curriculum.",
    url: "https://onlineuniversityadmission.online",
    siteName: "LPU Online",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LPU Online Admission 2026 | Lovely Professional University",
    description:
      "Apply now for LPU Online Admissions 2026. UGC-entitled programs with mentorship and placement support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
