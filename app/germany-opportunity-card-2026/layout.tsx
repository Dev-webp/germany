import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Germany Opportunity Card 2026 | Apply Now for Work & Settle in Germany",
  description:
    "Apply for the Germany Opportunity Card and move to Germany in 2026. Check eligibility, points system, job search rules, salary options & the full process. Fast support, expert guidance & 100% professional service.",
  keywords:
    "germany opportunity card 2026,germany chancenkarte,germany job seeker visa,opportunity card Germany,germany work visa without job offer,germany job seeker visa apply online,germany job seeker visa 2026,job search visa Germany,job seeker visa germany requirements,apply for job seeker visa Germany,germany job seeker visa official website,job seeker Germany,chancenkarte Deutschland,opportunity card germany apply online,job seeker visa germany from india,www germany job seeker visa com,apply for germany job seeker visa,chancenkarte Germany,germany seeker visa,job seeker visa germany from uae,make it in germany job seeker visa,germany job seeker visa 2026,jobseeker in Germany,apply job seeker visa germany,germany opportunity card application,apply germany job seeker visa,job seeker visa germany 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="L_PNy3dgEzp57F2JsXfvTXBc7aedqUdzow1IyvEmCUE"
        />
      </head>
      <body className="font-times antialiased bg-gray-50 text-gray-900">
        {children}

        {/* ✅ Google Ads - Load gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17961063738"
          strategy="afterInteractive"
        />

        {/* ✅ Google Ads - Initialize gtag config */}
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17961063738');
          `}
        </Script>

        {/* ✅ Google Ads - Conversion Event Snippet (fires on every page load) */}
        {/* 
          NOTE: Move this snippet ONLY to your "Thank You" / confirmation page
          if you want to track a specific conversion action (e.g. form submission).
          If you need it site-wide (e.g. for remarketing), keeping it here is fine.
        */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-17961063738/mianCI7UhoIcELqqwPRC',
              'value': 1.0,
              'currency': 'INR'
            });
          `}
        </Script>

        {/* ✅ Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2003555746606868');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}