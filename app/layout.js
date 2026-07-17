import { Rubik } from "next/font/google";

import "@/app/_styles/global.css";

import Header from "./_components/Header/Header";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata = {
  title: {
    template: "%s | Hit the Gas",
    default: "Welcome | Hit the Gas",
  },
  description:
    "The road will never be the same. Rent wild cars and hit the gas.",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 grid">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
