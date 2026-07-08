import Link from "next/link";
import Image from "next/image";

import logo from "@/public/company-logo.png";

function Logo() {
  return (
    <Link href="/" className="flex w-fit">
      <Image src={logo} width="350" quality={100} alt="Hit the Gas logo" />
    </Link>
  );
}

export default Logo;
