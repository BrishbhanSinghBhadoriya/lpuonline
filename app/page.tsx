"use client";
import { useState } from "react";
import EnquiryModal from "@/components/EnquiryModal";

// ── Types ──────────────────────────────────────────────────────────────
interface Program {
  title: string;
  eligibility: string;
  duration: string;
  fee: string;
  type: "UG" | "PG";
  image: string;
}

interface AdmissionStep {
  step: number;
  title: string;
  desc: string;
  icon: string;
}

type Feature =
  | {
      type: "highlight";
      points: string[];
    }
  | {
      type: "card";
      title: string;
      desc: string;
      img: string;
    };

interface Advantage {
  text: string;
  title?: string;
}

interface NavTab {
  label: string;
}

// ── Data ────────────────────────────────────────────────────────────────
const navTabs: NavTab[] = [
  { label: "MBA" },
  { label: "M.Com" },
  { label: "MCA" },
  { label: "M.Sc" },
  { label: "BCA" },
  { label: "BBA" },
  { label: "BA" },
];

const accreditations = [
  { name: "NIRF", img: "/NIRF.png" },
  { name: "AICTE", img: "/AICTE.png" },
  { name: "THE", img: "/world_education.jpg" },
  { name: "UGC", img: "/UGC.png" },
  { name: "Outlook", img: "/outlook_ranking.png" },
  { name: "WES", img: "/world_education.jpg" },
];

const features: Feature[] = [
  {
    type: "highlight",
    points: [
      "Award-Winning LMS (Learning Management System) with interactive features",
      "Industry Oriented Curriculum Designed By Experts",
      "Personalized Mentorship with excellent guidance",
      "Placement Assistance for fulfilling career Requirement",
    ],
  },
  {
    type: "card",
    img: "/Holistic.png",
    title: "Learning Pedagogy",
    desc: "The university provides a mobile application to access your live classes and coursework from anywhere.",
  },
  {
    type: "card",
    img: "/Academic.png",
    title: "Online Examinations",
    desc: "The university provides the advantage of online exams via LMS Portal.",
  },
  {
    type: "card",
    img: "/Build.png",
    title: "Proper Mentorship With Academic Advisors",
    desc: "Classes will be taken by experienced professors and curriculum designed by industry experts.",
  },
];

const advantages: Advantage[] = [
  { text: "Workshops & Seminars: Live workshops are organized on a weekly/monthly basis." },
  { text: "Exposure to Industry Experts: We are partnered with leading companies globally." },
  { text: "Centre Instrumentation Facility, Industry Sponsored & Collaborated Labs for hands-on learning." },
  
  { text: "Flexible Schedule: Online students will still receive a world class education in your learning." },
  { text: "Access to exclusive content: Free access to online courses, case studies, and journals." },
];


const programs: Program[] = [
  // PG Courses (Masters)
  {
    title: "Online MBA",
    eligibility: "Bachelor's (Recognised)",
    duration: "2 Years (4 Semesters)",
    fee: "Rs. 40400/Semester",
    type: "PG",
    image: "/OnlineMBA.jpg",
  },
  {
    title: "Online M.Com",
    eligibility: "Bachelor's (Recognised)",
    duration: "2 Years (4 Semesters)",
    fee: "Rs. 20400/Semester",
    type: "PG",
    image: "/OnlineMCom.jpg",
  },
  {
    title: "Online MCA",
    eligibility: "Bachelor's (Recognised)",
    duration: "2 Years (4 Semesters)",
    fee: "Rs. 30000/Semester",
    type: "PG",
    image: "/OnlineMCA.jpg",
  },
  {
    title: "Online MA",
    eligibility: "Bachelor's (Recognised)",
    duration: "2 Years (4 Semesters)",
    fee: "Rs. 16400/Semester",
    type: "PG",
    image: "/OnlineMA.jpg",
  },
  {
    title: "Online M.Sc (Mathematics)",
    eligibility: "12th (PCM/Physics and Math)",
    duration: "2 Years (4 Semesters)",
    fee: "Rs. 16400/Semester",
    type: "PG",
    image: "/OnlineBBA.jpg",
  },
  // UG Courses (Bachelor's)
  {
    title: "Online BCA",
    eligibility: "10+2 (Any board)",
    duration: "3 Years (6 Semesters)",
    fee: "Rs. 20400/Semester",
    type: "UG",
    image: "/OnlineBCA.jpg",
  },
  {
    title: "Online BBA",
    eligibility: "10+2 (Any board)",
    duration: "3 Years (6 Semesters)",
    fee: "Rs. 20400/Semester",
    type: "UG",
    image: "/OnlineBBA.jpg",
  },
  {
    title: "Online BA",
    eligibility: "10+2 (Any board)",
    duration: "3 Years (6 Semesters)",
    fee: "Rs. 16400/Semester",
    type: "UG",
    image: "OnlineMCom(1).jpg",
  },
];
const tabs = ["All Courses", "UG Courses", "PG Courses"];
const steps = [
    {
      title: "Registration",
      description: "Sign up @ lpuonline.com and pay Rs 600 registration fees",
    },
    {
      title: "Online Application Form",
      description:
        "Fill in the details, pay programme fee and upload relevant documents.",
    },
    {
      title: "Student Registration and LMS Activation",
      description:
        "After document verification, students will receive their LMS login credentials over student's email.",
    },
  ];

const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png" },

  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png" },
];

// Duplicate for seamless infinite loop
const doubled = [...companies, ...companies];

const topQueries: string[] = [
  "lpu correspondence mba",
  "lpuonline",
  "distance mba from lpu",
  "lpu online distance education",
  "lpu distance",
  "mba correspondence lpu",
  "correspondence education mba",
  "lpu enrollment",
  "lpu fees distance",
  "lpu online admission",
  "lpu correspondence",
  "lpu online education course",
  "lpu admission distance education",
  "lpu correspondence educations",
  "lpu to in distance",
  "lpu online education courses",
  "lpu to in learning",
  "lpu bca in distance education",
  "lpu university courses in dba",
  "lpu admission lpu",
  "lpu delay in learning",
  "lpu correspondence education lovely professional university",
  "lpu university correspondence courses in llp",
  "lpu to register apply online",
  "online admission lpu",
  "lpu university distance",
  "lpu online university",
  "lpu mba courses",
  "online distance learning",
  "distance university",
  "lpu distance university",
  "lpu distance university",
  "lpu online education courses",
  "lovely professional university online distance education",
  "lpu distance education admission",
  "lpu distance education",
  "lpu distance course",
  "lovely professional university distance courses",
  "lpu distance learning tips",
  "distance learning courses",
  "lpu online courses online scheduled",
  "lovely professional university apply online",
];

// ── Main Component ──────────────────────────────────────────────────────
export default function LPUOnlinePage() {
  const [activeTab, setActiveTab] = useState<string>("All Courses");
  const [enquiryOpen, setEnquiryOpen] = useState<boolean>(false);
  const [enquiryProgram, setEnquiryProgram] = useState<string | null>(null);

  const filteredPrograms = programs.filter((p) => {
    if (activeTab === "All Courses") return true;
    if (activeTab === "UG Courses") return p.type === "UG";
    if (activeTab === "PG Courses") return p.type === "PG";
    return true;
  });
  

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Trebuchet MS', Georgia, serif" }}>

      {/* ─── NAVBAR ─────────────────────────────────────────────────────── */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
  <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-2 flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-2">
      <img
        src="/lpulogo.png"
        alt="LPU Logo"
        className="h-15 w-auto object-contain"
      />
    </div>

    {/* Button */}
    <button
      onClick={() => {
        setEnquiryProgram(null);
        setEnquiryOpen(true);
      }}
      className="bg-orange-400 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-md text-2xl transition-all shadow-md"
    >
      Enroll Now
    </button>

  </div>
</nav>

      {/* ─── HERO ───────────────────────────────────────────────────────── */}
      <section className="bg-white pt-12 pb-16 min-h-[70vh] flex items-center">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center w-full">
          {/* Left */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-3">
              LPU Online Degree <br />
              <span className="text-orange-500">Programmes</span>
            </h1>

            {/* Program pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {navTabs.map((t) => (
                <span
                  key={t.label}
                  className="bg-white text-orange-400 text-1.5xl font-bold px-3 py-1 rounded-full border border-orange-200"
                >
                  {t.label}
                </span>
              ))}
            </div>

            <p className="text-gray-600 text-2xl mb-5 leading-relaxed">
              Get UGC Entitled Degree from India&apos;s Top Ranked University
            </p>
            <div className="flex gap-3 mb-6">
              <button 
                onClick={() => {
                  setEnquiryProgram(null);
                  setEnquiryOpen(true);
                }}
                className="bg-orange-400 hover:bg-orange-600 text-white  px-5 py-2.5 rounded-md text-2xl transition-all"
              >
                Download Brochure
              </button>
              <button
                onClick={() => {
                  setEnquiryProgram(null);
                  setEnquiryOpen(true);
                }}
                className="bg-orange-400 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-md text-2xl transition-all"
              >
                Apply Now
              </button>
             
            </div>

            {/* Countdown */}
            <div className="inline-flex items-center gap-2 bg-white   px-4 py-2">
             
              <span className="text-orange-700 font-bold text-2xl">Admission Closing in 5 Days</span>
            </div>
          </div>

          {/* Right – building image */}
          <div className="relative">
            <div className=" overflow-hidden shadow-2xl ">
              <img
                src="/lpu-uni.jpg"
                alt="LPU Campus"
                className="w-full h-[22rem] md:h-[30rem] object-cover"
              />
            </div>
           
          </div>
        </div>
      </section>

    <section className="bg-blue-50 py-20 border-y border-gray-200">
  <div className="max-w-screen-2xl mx-auto px-6 md:px-16">

    <h2 className="text-center text-black text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4">
      Lovely Professional University Online
    </h2>
    <p className="text-center text-gray-500 text-lg md:text-xl font-normal mt-2 mb-14">
      LPU is the top-ranked and fastest-growing private university in India.
    </p>

    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
      {accreditations.map((item) => (
        <div
          key={item.name}
          className="bg-white px-10 py-7 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
        >
          <img
            src={item.img}
            alt={item.name}
            className="h-20 w-auto object-contain"
          />
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ─── WHY LPU ONLINE ────────────────────────────────────────────── */}
<section id="about" className="py-16 bg-white">
  <div className="max-w-screen-2xl mx-auto px-6 md:px-10">

    {/* Logo */}
    <div className="flex justify-center mb-4">
      <img src="/lpulogo.png" alt="LPU Logo" className="h-14 w-auto object-contain" />
    </div>

    <p className="text-center text-black text-2xl mb-12">
      Reasons to pursue Online Program from LPU Online.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

      {features.map((f, i) =>
        f.type === "highlight" ? (

          /* ORANGE HIGHLIGHT CARD */
          <div
            key={`highlight-${i}`}   // ✅ fixed unique key
            className="bg-orange-400 text-white rounded-2xl p-7 flex flex-col h-full shadow-md"
          >
            <ul className="space-y-6 text-base leading-relaxed">
              {f.points.map((p, idx) => (
                <li key={`point-${idx}`} className="flex gap-3">
                  <span className="mt-2 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

        ) : (

          /* NORMAL GREY CARD */
          <div
            key={f.title}   // ✅ MAIN FIX (this removed your error)
            className="bg-gray-100 rounded-2xl p-7 flex flex-col h-full shadow-sm"
          >

            {/* Top Row : Image + Title */}
            <div className="flex items-start gap-4 mb-4">
              <img
                src={f.img}
                alt={f.title}
                className="h-12 w-12 object-contain flex-shrink-0"
              />

              <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                {f.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm flex-grow leading-relaxed">
              {f.desc}
            </p>

            {/* Button */}
            <button 
            onClick={() => {
                    setEnquiryProgram(null);
                    setEnquiryOpen(true);
                  }}
            className="mt-6 bg-orange-400 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition w-full">
              Know More
            </button>

          </div>

        )
      )}

    </div>
  </div>
</section>

      {/* ─── ONLINE PROGRAMS ADVANTAGES ─────────────────────────────────── */}
<section className="py-12 bg-orange-400">
  <div className="max-w-screen-2xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">

    {/* Certificate Image */}
    <div className="flex justify-center md:justify-start">
      <img
        src="/certificate.png"   
        alt="LPU Degree Certificate"
        className="w-full max-w-xl h-auto object-contain shadow-2xl rounded-md border border-orange-300"
      />
    </div>

    {/* Advantages List */}
    <div>
      <h2 className="text-4xl md:text-4xl  text-white mb-2">
        Online Programs From LPU Online
      </h2>

      <p className="text-orange-100 text-2xl mb-6">
        Advantages Other Than Just A Degree
      </p>

      <ul className="space-y-5 border-l-2 border-orange-200 pl-6">
        {advantages.map((a: Advantage, i: number) => (
          <li key={a.text} className="flex flex-col gap-1">
            <span className="text-white font-bold">
              {i + 1}. {a.title}
            </span>
            <span className="text-white text-2xl leading-relaxed">
              {a.text}
            </span>
          </li>
        ))}
      </ul>

    </div>

  </div>
</section>

      {/* ─── PROGRAMS GRID ──────────────────────────────────────────────── */}
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-2">
          Online Master&apos;s &amp; Bachelor&apos;s Program
        </h2>
        <p className="text-gray-500 text-center text-sm mb-8">
          UGC entitled degrees. Industry recognized. 100% online.
        </p>

        {/* Filter Tabs — only 3 buttons */}
        <div className="flex gap-3 justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                activeTab === tab
                  ? "bg-orange-500 text-white border-orange-500 shadow-md"
                  : "bg-white text-orange-500 border-orange-400 hover:bg-orange-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white font-extrabold text-lg">
                  {p.title}
                </div>
                {/* UG / PG Badge */}
                <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {p.type} Course
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-1.5 mb-4">
                  <div className="flex gap-2 text-xs text-gray-600">
                    <span className="font-bold text-gray-800">Eligibility:</span>
                    <span>{p.eligibility}</span>
                  </div>
                  <div className="flex gap-2 text-xs text-gray-600">
                    <span className="font-bold text-gray-800">Duration:</span>
                    <span>{p.duration}</span>
                  </div>
                  <div className="flex gap-2 text-xs text-gray-600">
                    <span className="font-bold text-gray-800">Fees:</span>
                    <span className="text-orange-500 font-bold">{p.fee}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setEnquiryProgram(p.title);
                    setEnquiryOpen(true);
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg text-sm transition-all"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* ─── ADMISSION PROCESS ──────────────────────────────────────────── */}
     <section className="py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
          Admission Process
        </h2>

        {/* Timeline Card */}
        <div className="bg-white rounded-2xl shadow-md px-10 py-20">
          {/* Titles Row */}
          <div className="grid grid-cols-3 text-center mb-0">
            {steps.map((step, i) => (
              <div key={i} className="px-4">
                <p className="font-bold text-gray-800 text-4xl md:text-base">
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline Line + Dots */}
          <div className="relative flex items-center my-5">
            {/* Full horizontal line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-orange-400" />

            {/* Dots positioned at 1/6, 3/6, 5/6 of width */}
            <div className="relative w-full grid grid-cols-3">
              {steps.map((_, i) => (
                <div key={i} className="flex justify-center">
                  <div className="relative z-10 w-5 h-5 rounded-full border-2 border-orange-500 bg-white flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Descriptions Row */}
          <div className="grid grid-cols-3 text-center py-16">
            {steps.map((step, i) => (
              <div key={i} className="px-8">
                <p className="text-gray-500 text-2xl leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* ─── LEARNERS WORK AT ────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-1">Our learners work at</h2>
        <p className="text-gray-500 text-2xl">Top hiring partners of LPU Online</p>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {doubled.map((c, i) => (
            <div
              key={i}
              className="mx-5 bg-white rounded-xl px-8 py-4 shadow-sm border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all flex items-center justify-center"
              style={{ minWidth: "160px", height: "72px" }}
            >
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* ─── CTA CONNECT ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-orange-400 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-white text-3xl font-bold uppercase tracking-widest mb-2">
            CONNECT FOR YOUR QUERIES
          </div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-4xl mr-2">LPU</span>
            </div>
            <span className="text-white font-extrabold text-4xl ml-2">Online</span>
          </div>
          <button
            onClick={() => {
              setEnquiryProgram(null);
              setEnquiryOpen(true);
            }}
            className="bg-white text-orange-400 font-extrabold px-10 py-4  text-base hover:bg-orange-50 transition-all shadow-2xl hover:shadow-3xl"
          >
            Enroll Now →
          </button>
        </div>
      </section>

      {/* ─── TOP QUERIES ─────────────────────────────────────────────────── */}
     <section className="py-10 bg-black border-t border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
        <h3 className="text-white font-extrabold text-4xl mb-6">Top Query</h3>

        <div className="grid grid-cols-3 gap-x-12 gap-y-3 ">
          {topQueries.map((q: string, i: number) => (
            <a
              key={`${q}-${i}`}
               onClick={(e) => {
    e.preventDefault();
    setEnquiryProgram(null);
    setEnquiryOpen(true);
  }}
              className="text-white text-2xl hover:underline hover:text-orange-500 transition-colors truncate cursor-pointer"
            >
              {q}
            </a>
          ))}
        </div>
      </div>
    </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────────── */}
      
    <footer className="bg-black py-6 px-4">
      <div className="max-w-5xl mx-auto text-center">

        <div className="border-t border-gray-600 mb-6" />

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Disclaimer: We act as a marketing service partner only. LPU University hold full rights
          to request change or removal of any non-relevant content. Images used are for illustrative
          purposes and do not directly represent the respective colleges or universities.
        </p>

        <a
          onClick={() => {
              setEnquiryProgram(null);
              setEnquiryOpen(true);
            }}
          className="text-blue-400 text-sm hover:underline block mb-2"
        >
          Privacy-Policy
        </a>

        <p className="text-gray-400 text-sm">
          © 2025 learningshala.in | All Rights Reserved
        </p>

      </div>
    </footer>
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} program={enquiryProgram} />
    </div>
  );
}
