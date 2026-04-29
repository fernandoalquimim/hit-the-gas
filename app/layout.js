import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/global.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hit the Gas",
  description: "Rent wild cars",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} antialiased bg-primary-950`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
