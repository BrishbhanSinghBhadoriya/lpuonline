import type { Metadata } from "next";
import { Poppins, Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";
import Script from "next/script"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
});
const kalam = Kalam({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-kalam", display: "swap" });
const patrick = Patrick_Hand({ subsets: ["latin"], weight: "400", variable: "--font-patrick", display: "swap" });

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
        className={`${poppins.variable} ${kalam.variable} ${patrick.variable} font-sans antialiased`}
      >
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17973403972"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config',  'AW-17973403972');
          `}
        </Script>

      </body>
    </html>
  );
}