"use client";

import Link from "next/link";

function CustomNavbarLink({ children, href, classes }) {
  function handleCloseNavbar() {
    const check = document.getElementById("navbar-active");
    check.click();
  }

  return (
    <Link href={href} className={classes} onClick={handleCloseNavbar}>
      {children}
    </Link>
  );
}

export default CustomNavbarLink;
