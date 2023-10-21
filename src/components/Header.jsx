import React, { useState } from "react";
import logo from "../assets/images/grand-base-logo.png";
import X from "./icons/X";
import Discord from "./icons/Discord";
import Gmail from "./icons/Gmail";
import Menu from "./icons/Menu";
import GitBook from "./icons/GitBook";
import XMark from "./icons/XMark";
const socialList = [
  {
    label: "X",
    icon: X,
    href: "#",
  },
  {
    label: "Discord",
    icon: Discord,
    href: "#",
  },
  {
    label: "Gmail",
    icon: Gmail,
    href: "#",
  },
  {
    label: "Git Book",
    icon: GitBook,
    href: "#",
  },
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <header className="fixed top-0 z-50 left-0 right-0 bg-white/[0.01] px-8 backdrop-blur-[3px] sm:h-[99px]">
      <div className="max-w-[1257px] w-full h-full flex items-center justify-between gap-10 py-[25px] sm:py-0 mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-[54px] h-[54px] relative z-0">
            <img src={logo} alt="Logo" className="" />
            <svg
              className="absolute top-1/2 left-1/2 pointer-events-none -z-10 -translate-x-1/2 -translate-y-1/2 blur-[9px]"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.675 13.5336C31.6929 11.7275 30.3427 10.3523 28.6242 9.40817C26.9057 8.46404 24.9007 7.99198 22.6094 7.99198C20.0725 7.99198 17.8221 8.56666 15.8581 9.71604C13.8941 10.8654 12.3597 12.5074 11.255 14.6419C10.1502 16.7765 9.59782 19.2395 9.59782 22.0308C9.59782 24.9043 10.1502 27.4083 11.255 29.5428C12.4006 31.6774 13.9759 33.3193 15.9809 34.4687C17.9858 35.6181 20.318 36.1928 22.9776 36.1928C26.251 36.1928 28.9311 35.3308 31.0178 33.6067C33.1046 31.8416 34.4753 29.3991 35.13 26.2794H20.3999V19.691H43.5998V27.203C43.0269 30.1996 41.7994 32.9704 39.9172 35.5155C38.0351 38.0605 35.6005 40.113 32.6136 41.6729C29.6676 43.1917 26.3533 43.9511 22.6708 43.9511C18.5382 43.9511 14.7943 43.0275 11.4391 41.1803C8.12481 39.292 5.50613 36.6854 3.58303 33.3604C1.70085 30.0354 0.759766 26.2589 0.759766 22.0308C0.759766 17.8027 1.70085 14.0262 3.58303 10.7012C5.50613 7.33519 8.12481 4.72856 11.4391 2.88135C14.7943 0.993082 18.5177 0.0489502 22.6094 0.0489502C27.4376 0.0489502 31.6316 1.23938 35.1913 3.62023C38.7511 5.96004 41.2061 9.2645 42.5564 13.5336H32.675Z"
                fill="#074F7C"
              />
            </svg>
          </div>
          <p className="text-[19px] font-semibold">Grand Base</p>
        </div>

        {/* Social List */}
        <ul className="hidden sm:flex items-center gap-[30px]">
          {socialList.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                <span className="sr-only">{item.label}</span>
                <item.icon />
              </a>
            </li>
          ))}
        </ul>

        <button onClick={toggleMenu} className="sm:hidden">
          {isMenuOpen ? (
            <XMark className="w-[45px] p-1.5 stroke-[2px] h-[45px]" />
          ) : (
            <Menu />
          )}
        </button>
      </div>

      {/* Mobile Menu Social List */}
      <div
        className={`w-full overflow-hidden transition-all duration-150 sm:hidden ${
          isMenuOpen ? "h-14" : "h-0"
        }`}
      >
        <ul className="flex items-center justify-center gap-[50px]">
          {socialList.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                <span className="sr-only">{item.label}</span>
                <item.icon className="w-5 h-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
