"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { assets } from "@/assets/assets";
import { useModal } from "./ModelContext";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const LogoutHeader = () => {
  const { openModal } = useModal();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`${poppins.className} bg-[linear-gradient(219.84deg,_#474747_4.14%,_#222222_44.22%)] text-white px-2 sm:px-10 md:px-15 flex justify-between items-center`}
    >
      {/* =========== Menu button for mobile screen ========== */}
      <div
        className="md:hidden"
        onClick={() => (open ? setOpen(false) : setOpen(true))}
      >
        <MenuIcon className="w-6 text-[#E6B027] cursor-pointer" />
      </div>

      <div className="flex items-center">
        <Link href="/">
          <Image
            src={assets.logo}
            alt="Drive Vest Logo"
            height={100}
            width={100}
            className="sm:w-32 w-24"
          />
        </Link>
      </div>

      {/* +++++++++++++++ Large screen menu links +++++++++++++++++++ */}
      <div className="space-x-4 md:space-x-6 hidden md:block">
        <Link
          href="/"
          className="font-medium text-sm md:text-base hover:text-[#E6B027]"
        >
          Home
        </Link>
        <Link
          href="/properties"
          className="font-medium text-sm md:text-base hover:text-[#E6B027]"
        >
          Properties
        </Link>
        <Link
          href="/about"
          className="font-medium text-sm md:text-base hover:text-[#E6B027]"
        >
          About Us
        </Link>
      </div>

      <div className="lg:space-x-4 space-x-2">
        <Button
          onClick={() => openModal("signup")}
          className={`${poppins.className} py-0 text-xs sm:text-sm md:text-base md:py-2 px-1 sm:px-2 lg:px-6 bg-[#E6B027] text-white rounded-lg cursor-pointer`}
        >
          Register
        </Button>

        <Button
          onClick={() => openModal("login")}
          className={`${poppins.className} py-0 text-xs sm:text-sm md:text-base md:py-2 px-2 md:px-6 border bg-transparent border-[#E6B027] text-[#E6B027] rounded-lg cursor-pointer`}
        >
          Log In
        </Button>
      </div>

      {/* ------------------ Mobile menu ------------------ */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute flex-col gap-1 sm:gap-2 sm:top-[90px] top-[50px] bg-[linear-gradient(219.84deg,_#474747_4.14%,_#222222_44.22%)] w-full left-0 sm:px-10 px-2.5 py-2.5 mt-2 sm:mt-0 z-10 pb-8 sm:pb-6`}
        onClick={() => setOpen(false)}
      >
        <Link
          href="/"
          className="font-medium text-sm md:text-base hover:text-[#E6B027]"
        >
          Home
        </Link>
        <Link
          href="/properties"
          className="font-medium text-sm md:text-base hover:text-[#E6B027]"
        >
          Properties
        </Link>
        <Link
          href="/about"
          className="font-medium text-sm md:text-base hover:text-[#E6B027]"
        >
          About Us
        </Link>
      </div>
    </header>
  );
};

export default LogoutHeader;
