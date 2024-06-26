import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NavBar } from "./components/navBar/navBar";
import "./globals.css";
import { ReduxProvider } from "./redux/provider";
import StarryBackground from "./components/background/starryBg"; // Import the StarryBackground component

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Michael's Portfolio",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ReduxProvider>
          <div className="relative flex h-screen w-screen flex-col">
            <div className="absolute left-0 top-0 z-0 h-full w-full">
              <StarryBackground />
            </div>
            <div className="relative z-10">
              <NavBar />
            </div>
            <div className="relative z-10 h-full w-full">{children}</div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
