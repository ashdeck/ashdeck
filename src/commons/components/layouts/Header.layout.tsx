import React, { useState, useRef, useEffect } from "react";
import useUserStore from "@store/userStore";
import Logo from "@commons/components/Logo";
import { HambergerMenu } from "iconsax-react";
import { XCircleIcon } from "@heroicons/react/16/solid";
import Link from "@router/link";
import AddToChrome, { StarOnGithub } from "../AddToChrome";

type Props = {
  className?: string;
} & React.PropsWithChildren;

const HeaderLayout = ({ className = "" }: Props) => {
  const { user } = useUserStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false); // only used for desktop dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("menu clicked");
  };

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFeaturesOpen(false);
      }
    }
    if (featuresOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [featuresOpen]);

  return (
    <header className="md:p-10 z-40 w-full flex bg-[#eff9f1] items-center justify-between h-[10vh] sticky top-0 border-b-[1px] py-2">
      <a href="/">
        <Logo className="text-white font-outfit w-[6rem] sm:w-[12rem] ml-8" />
      </a>

      {/* Hamburger for mobile */}
      <div className="flex md:hidden mr-8">
        {menuOpen ? (
          <XCircleIcon className="w-8 h-8 text-primary" onClick={toggleMenu} />
        ) : (
          <HambergerMenu className="w-8 h-8 text-primary" onClick={toggleMenu} />
        )}
      </div>

      {/* Desktop links */}
      <nav className="hidden md:flex w-full text-[#071a37] justify-center gap-12 relative">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setFeaturesOpen(!featuresOpen)}
            className="text-md hover:text-primary transition duration-500"
          >
            Features
          </button>

          {featuresOpen && (
            <div className="fixed left-0 right-0 mx-[20%] rounded-b-md top-[10vh] mt-1 bg-white shadow-lg border-t-2 border-primary p-12 z-50">
              <div className="max-w-7xl mx-auto flex gap-8 px-6 justify-between">
                <div className="w-1/3">
                  <h3 className="text-xl font-bold text-primary">
                    Core Features
                  </h3>
                  <ul className="mt-8 space-y-8">
                    <li>
                      <Link href="/website-blocker" className="hover:text-primary">
                        Website Blocker
                      </Link>
                    </li>
                    <li>
                      <Link href="/pomodoro-timer" className="hover:text-primary">
                        Pomodoro Timer
                      </Link>
                    </li>
                    <li>
                      <Link href="/task-manager" className="hover:text-primary">
                        Task Manager
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-2/3 flex justify-between items-end">
                  <img
                    src="/images/researcher-2.png"
                    alt="Features Preview"
                    width={250}
                  />
                  <div className="hidden xl:block">
                    <p className="mb-4 mr-2">
                      Let your distractions watch you walk over them.
                    </p>
                    <AddToChrome />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link
          href="/pricing"
          className="text-md hover:text-primary transition duration-500"
        >
          Pricing
        </Link>
        <Link
          href="/about"
          className="text-md hover:text-primary transition duration-500"
        >
          About
        </Link>
      </nav>

      {/* Mobile menu (flattened, no dropdown) */}
      {menuOpen && (
        <nav className="absolute top-[8vh] right-0 w-[70%] bg-white bg-opacity-95 p-4 md:hidden shadow-lg z-50">
          <Link
            href="/website-blocker"
            className="block text-secondary text-lg py-2 border-b border-gray-300"
            onClick={toggleMenu}
          >
            Website Blocker
          </Link>
          <Link
            href="/pomodoro-timer"
            className="block text-secondary text-lg py-2 border-b border-gray-300"
            onClick={toggleMenu}
          >
            Pomodoro Timer
          </Link>
          <Link
            href="/task-manager"
            className="block text-secondary text-lg py-2 border-b border-gray-300"
            onClick={toggleMenu}
          >
            Task Manager
          </Link>
          <Link
            href="/about"
            className="block text-secondary text-lg py-2 border-b border-gray-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="block text-secondary text-lg py-2 border-b border-gray-300"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
        </nav>
      )}

      {/* Right side buttons */}
      <div className="w-[32rem] mr-4 hidden md:block">
        <div className="flex justify-between items-center gap-4">
          <StarOnGithub />
          <div className="flex">
            <AddToChrome />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
