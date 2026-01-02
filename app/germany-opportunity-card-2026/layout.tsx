import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Germany Opportunity Card 2026 | Apply Now for Work & Settle in Germany",
  description: "Apply for the Germany Opportunity Card and move to Germany in 2026. Check eligibility, points system, job search rules, salary options & the full process. Fast support, expert guidance & 100% professional service.",
  keywords: "germany opportunity card 2026,germany chancenkarte,germany job seeker visa,opportunity card Germany,germany work visa without job offer,germany job seeker visa apply online,germany job seeker visa 2026,job search visa Germany,job seeker visa germany requirements,apply for job seeker visa Germany,germany job seeker visa official website,job seeker Germany,chancenkarte Deutschland,opportunity card germany apply online,job seeker visa germany from india,www germany job seeker visa com,apply for germany job seeker visa,chancenkarte Germany,germany seeker visa,job seeker visa germany from uae,make it in germany job seeker visa,germany job seeker visa 2026,jobseeker in Germany,apply job seeker visa germany,germany opportunity card application,apply germany job seeker visa,job seeker visa germany 2026",
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
        {/* ✅ Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JPH0CGYTXT');
          `}
        </Script>
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16767451796');
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
        
        {/* ✅ Facebook Pixel Noscript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2003555746606868&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="font-times antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
