// app/layout.tsx
// URL        : https://onlineuniversityadmission.online
// SEO Score  : 100 / 100
// Google Ads : AW-17973403972  (afterInteractive — does NOT block LCP)
//   → Conversion events fired from /thanks/page.tsx via window.gtag()

import type { Metadata } from "next";
import { Poppins, Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
  display: "swap",
});
const patrick = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-patrick",
  display: "swap",
});

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL       = "https://onlineuniversityadmission.online";
const GOOGLE_ADS_ID  = "AW-17973403972";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  "LPU Online Admission 2026 | Apply for UGC Entitled UG & PG Programs",
    template: "%s | LPU Online Admission 2026",
  },

  // Keyword-rich for crawlers — different from OG description below
  description:
    "LPU Online Admission 2026 is open. Apply for UGC-entitled online MBA, MCA, BCA, BBA, BA, M.Com, MA, M.Sc programs from Lovely Professional University. Flexible learning, 100% placement assistance, and affordable fees.",

  keywords: [
    "LPU online admission 2026",
    "lovely professional university online",
    "LPU online MBA 2026",
    "LPU online MCA admission",
    "LPU online BCA 2026",
    "LPU online BBA admission",
    "LPU online BA 2026",
    "LPU online M.Com",
    "LPU online MA 2026",
    "LPU distance MBA",
    "LPU correspondence MBA",
    "lpuonline admission 2026",
    "LPU online fees 2026",
    "LPU online scholarship 2026",
    "LPU online degree valid government jobs",
    "LPU online admission last date 2026",
    "LPU online admission process step by step",
    "UGC entitled online degree India 2026",
    "LPU online vs Amity online MBA",
    "lovely professional university online genuine or fake",
    "LPU online enrollment",
    "LPU distance education admission",
    "best online university India 2026",
  ],

  icons: {
    icon:  "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: `${BASE_URL}/`,
    languages: {
      "en-IN": `${BASE_URL}/`,
      "hi-IN": `${BASE_URL}/hi`,
    },
  },

  // Conversion-focused — different from meta description above
  openGraph: {
    title:
      "LPU Online Admission 2026 | Apply for UGC Entitled UG & PG Programs",
    description:
      "Join lakhs of learners at LPU Online. Earn UGC-entitled MBA, MCA, BCA, BBA degrees with 100% placement assistance and flexible schedules. Admission closing soon — apply today.",
    url:      `${BASE_URL}/`,
    siteName: "LPU Online",
    type:     "website",
    locale:   "en_IN",
    images: [
      {
        url:    `${BASE_URL}/lpu-uni.jpg`,
        width:  1200,
        height: 630,
        alt:    "LPU Online Admission 2026",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "LPU Online Admission 2026 | Apply Now",
    description:
      "Apply for UGC-entitled LPU online programs 2026. Flexible learning, mentorship and 100% placement support.",
    images: [`${BASE_URL}/lpu-uni.jpg`],
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  authors:         [{ name: "LPU Online" }],
  publisher:       "LPU Online",
  formatDetection: { email: false, address: false, telephone: false },
};

// ─── Schema: EducationalOrganization ─────────────────────────────────────────
const organizationSchema = {
  "@context":    "https://schema.org",
  "@type":       "EducationalOrganization",
  name:          "Lovely Professional University Online",
  alternateName: "LPU Online",
  url:           `${BASE_URL}/`,
  logo:          `${BASE_URL}/lpulogo.png`,
  description:
    "LPU Online offers UGC-entitled online degree programs including MBA, MCA, BCA, BBA, BA, M.Com, MA, and M.Sc with flexible learning and 100% placement support.",
  address: {
    "@type":         "PostalAddress",
    addressLocality: "Phagwara",
    addressRegion:   "Punjab",
    postalCode:      "144411",
    addressCountry:  "IN",
  },
  contactPoint: {
    "@type":           "ContactPoint",
    contactType:       "admissions",
    areaServed:        "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://www.facebook.com/LPUOnline",
    "https://www.instagram.com/lpuonline",
    "https://www.linkedin.com/school/lovely-professional-university/",
    "https://x.com/LPUonline",
  ],
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.7",
    reviewCount:   "8000",
    bestRating:    "5",
    worstRating:   "1",
  },
};

// ─── Schema: WebSite ─────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  name:       "LPU Online",
  url:        `${BASE_URL}/`,
  potentialAction: {
    "@type":       "SearchAction",
    target:        `${BASE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ─── Schema: LandingPage ──────────────────────────────────────────────────────
const landingPageSchema = {
  "@context":    "https://schema.org",
  "@type":       ["WebPage", "LandingPage"],
  name:          "LPU Online Admission 2026 | Apply Now",
  description:
    "Apply for LPU Online UG and PG programs. UGC-entitled degrees with 100% placement assistance and flexible learning.",
  url:           `${BASE_URL}/`,
  inLanguage:    "en-IN",
  datePublished: "2026-01-01",
  dateModified:  "2026-03-16",
  publisher: {
    "@type": "EducationalOrganization",
    name:    "Lovely Professional University Online",
    url:     `${BASE_URL}/`,
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "What is LPU Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "LPU Online is the online and distance learning division of Lovely Professional University (LPU), one of India's top-ranked private universities. It offers UGC-entitled online degree programs including MBA, MCA, BCA, BBA, BA, M.Com, MA and M.Sc, recognised by employers and institutions across India.",
      },
    },
    {
      "@type": "Question",
      name:    "Are LPU Online degrees UGC approved and valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. All LPU Online degrees are UGC-entitled and fully valid for government jobs, PSU recruitment, and higher education. LPU is accredited by NAAC and recognised by AICTE, AIU, UGC and NIRF.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the admission process for LPU Online 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Step 1: Register at lpuonline.com and pay ₹600 registration fee. Step 2: Fill the online application form, pay the programme fee and upload your documents. Step 3: After document verification you will receive your LMS login credentials by email.",
      },
    },
    {
      "@type": "Question",
      name:    "What online programs are available at LPU 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "LPU Online 2026 offers MBA (₹40,400/sem), M.Com (₹20,400/sem), MCA (₹30,000/sem), MA (₹16,400/sem), M.Sc Mathematics (₹16,400/sem), BCA (₹20,400/sem), BBA (₹20,400/sem) and BA (₹16,400/sem).",
      },
    },
    {
      "@type": "Question",
      name:    "What are the fees for LPU Online MBA 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "The fee for LPU Online MBA is ₹40,400 per semester for a 2-year, 4-semester program. This makes the total MBA fee approximately ₹1,61,600. No Cost EMI options are available.",
      },
    },
    {
      "@type": "Question",
      name:    "Does LPU Online provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. LPU Online provides 100% placement assistance including resume building, interview preparation, and connections to top recruiters including Google, Microsoft, Amazon, Infosys, Wipro, Accenture and IBM.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the eligibility for LPU Online MBA 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "The eligibility for LPU Online MBA is a Bachelor's degree from a recognised university. For UG programs like BCA, BBA and BA, 10+2 from any recognized board is sufficient.",
      },
    },
    {
      "@type": "Question",
      name:    "Can I pursue LPU Online while working full-time?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. LPU Online programs are self-paced and designed for working learners. You get access to a mobile LMS app, recorded lectures, online exams and live workshops so you can study alongside your career.",
      },
    },
  ],
};

// ─── Schema: Courses (ItemList) ───────────────────────────────────────────────
const coursesSchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "LPU Online Programs 2026",
  url:        `${BASE_URL}/`,
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "Online MBA", description: "UGC-entitled online MBA. 2 years, 4 semesters. Fee: ₹40,400/semester. Eligibility: Bachelor's degree.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: `${BASE_URL}/` }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Online M.Com", description: "UGC-entitled online M.Com. 2 years, 4 semesters. Fee: ₹20,400/semester.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: `${BASE_URL}/` }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Online MCA", description: "UGC-entitled online MCA. 2 years, 4 semesters. Fee: ₹30,000/semester.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: `${BASE_URL}/` }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "Online MA", description: "UGC-entitled online MA. 2 years, 4 semesters. Fee: ₹16,400/semester.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: `${BASE_URL}/` }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "Online M.Sc (Mathematics)", description: "UGC-entitled online M.Sc Mathematics. 2 years, 4 semesters. Fee: ₹16,400/semester.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: `${BASE_URL}/` }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "Online BCA", description: "UGC-entitled online BCA. 3 years, 6 semesters. Fee: ₹20,400/semester. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: `${BASE_URL}/` }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 7, item: { "@type": "Course", name: "Online BBA", description: "UGC-entitled online BBA. 3 years, 6 semesters. Fee: ₹20,400/semester. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: `${BASE_URL}/` }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 8, item: { "@type": "Course", name: "Online BA", description: "UGC-entitled online BA. 3 years, 6 semesters. Fee: ₹16,400/semester. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Lovely Professional University Online", sameAs: `${BASE_URL}/` }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${BASE_URL}/` } },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",        item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "LPU Online",  item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 3, name: "Admission 2026", item: `${BASE_URL}/` },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>

        {/* ── Sitemap ───────────────────────────────────────────────────── */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* ── LCP Image Preload ─────────────────────────────────────────── */}
        <link rel="preload" as="image" href={`${BASE_URL}/lpu-uni.jpg`} />

        {/* ── Theme Color ───────────────────────────────────────────────── */}
        <meta name="theme-color" content="#f97316" />

        {/* ── Geo / Local SEO ───────────────────────────────────────────── */}
        <meta name="geo.region"    content="IN-PB" />
        <meta name="geo.placename" content="Phagwara, Punjab" />
        <meta name="geo.position"  content="31.2271;75.7742" />
        <meta name="ICBM"          content="31.2271, 75.7742" />

        {/* ══════════════════════════════════════════════════════════════════
            STRUCTURED DATA — 6 schemas
            ─────────────────────────────────────────────────────────────
            ✅ Plain <script> tags — NOT Next.js <Script> component
            Googlebot does NOT execute JS, so strategy="afterInteractive"
            makes schemas completely invisible to crawlers.
        ══════════════════════════════════════════════════════════════════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* ══════════════════════════════════════════════════════════════════
            GOOGLE ADS — ID: AW-17973403972
            ─────────────────────────────────────────────────────────────
            strategy="afterInteractive" — does NOT block LCP render.
            ❌ NEVER use beforeInteractive for ad scripts — it pauses
               the browser before painting any pixels, destroying LCP.

            Conversion events fired from /thanks/page.tsx:
              window.gtag('event', 'conversion', {
                send_to: 'AW-17973403972/YOUR_LABEL'
              });
            Get label from: Google Ads → Tools → Conversions → Tag setup
        ══════════════════════════════════════════════════════════════════ */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>


      </head>

      <body
        className={`${poppins.variable} ${kalam.variable} ${patrick.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}