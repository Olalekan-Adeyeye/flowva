import "./globals.css";
import { Outfit } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Flowva - Rewards Hub",
  description: "Earn points, unlock rewards, and celebrate your progress!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-outfit antialiased text-gray-900 min-h-screen`}
      >
        <div className="flex min-h-screen bg-gray-50 text-gray-900">
          <Sidebar />
          <main className="flex-1 ml-60 pb-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
