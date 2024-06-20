import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NavBar } from "./components/navBar/navBar";
import "./globals.css";
import { ReduxProvider } from "./redux/provider";

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
          <div className="h-screen w-screen bg-gradient-to-br from-zinc-900 to-black">
            <div>
              <NavBar />
            </div>
            <div className="h-[calc(100vh - 6rem)]">{children}</div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
