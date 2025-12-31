import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "VJC Overseas - Immigration Consultancy",
  description: "Your trusted partner for Germany Opportunity Card and global visas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-times antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
