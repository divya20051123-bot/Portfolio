import type { Metadata } from "next";
import { Outfit, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Divya Bharathi S | Portfolio",
  description: "Web Development Intern & B.Sc. Computer Science student portfolio. Hardworking, dedicated, and skilled in HTML, CSS, Python, and SQL.",
  keywords: ["Divya Bharathi S", "Portfolio", "Web Developer", "B.Sc Computer Science", "Intern", "Vel Tech Ranga Sanku Arts College"],
  icons: {
    icon: "/Dark.png",
    shortcut: "/Dark.png",
    apple: "/Dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${bebasNeue.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/Dark.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className="bg-bg-dark text-text-main font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
