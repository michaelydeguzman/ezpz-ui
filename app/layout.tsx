import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { NavBar } from "./components/navBar/navBar";
import "./globals.css";
import { ReduxProvider } from "./redux/provider";
import StarryBackground from "./components/background/starryBg"; // Import the StarryBackground component

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className}`}>
        <ReduxProvider>
          <div
            className="flex h-screen w-screen flex-col"
            style={{
              background:
                "radial-gradient(600px at 620px 299px, rgba(29, 78, 216, 0.15), transparent 80%)",
            }}
          >
            <div className="h-full">{children}</div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
