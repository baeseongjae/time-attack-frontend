"use client";

import HeaderLogo from "./components/HeaderLogo";
import HeaderNav from "./components/HeaderNav";
import HeaderSign from "./components/HeaderSign";

function Header() {
  return (
    <header className="flex items-center px-8 h-16">
      <HeaderLogo />
      <HeaderNav />
      <HeaderSign />
    </header>
  );
}

export default Header;
