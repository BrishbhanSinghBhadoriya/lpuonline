"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function ThankYouPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        let attempts = 0;

        // ✅ Google Ads Conversion
        const fireConversion = () => {
            if (typeof (window as any).gtag === "function") {
                (window as any).gtag("event", "conversion", {
                    send_to: "AW-17973403972/k2AtCInQ9YAcEMTCsfpC",
                });
            } else if (attempts < 20) {
                attempts++;
                setTimeout(fireConversion, 100);
            } else {
                (window as any).dataLayer = (window as any).dataLayer || [];
                (window as any).dataLayer.push({
                    event: "conversion",
                    send_to: "AW-17973403972/k2AtCInQ9YAcEMTCsfpC",
                });
            }
        };

        fireConversion();
    }, []);

    if (!mounted) return null;

    return (
        <>
            {/* ✅ Meta Pixel Script */}
            <Script id="meta-pixel-thank-you" strategy="afterInteractive">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1230848505368304');
                    fbq('track', 'PageView');
                    fbq('track', 'LeadNew');
                `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src="https://www.facebook.com/tr?id=1230848505368304&ev=PageView&noscript=1"
                    alt=""
                />
            </noscript>

            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-8 relative">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-green-500 animate-ping opacity-25"></div>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Thank You!
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                    Your enquiry has been successfully submitted. Our admission counsellor will contact you shortly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-full text-lg transition-all shadow-lg hover:shadow-xl active:scale-95">
                        Back to Home
                    </Link>
                    <a href="tel:7042646766" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-full text-lg transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Now
                    </a>
                </div>
                <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-500 to-green-500"></div>
                <div className="mt-16 text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Lovely Professional University Online. All rights reserved.
                </div>
            </div>
        </>
    );
}