"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center space-x-3"
          >
            <Image src={logo} width={40} height={40} alt="logo" />
            <span className="text-xl font-bold">CodeArcUs</span>
          </Link>
        </div>

       <nav className="flex flex-col p-4 gap-6 text-lg">
  <Link
    href="/"
    onClick={() => setOpen(false)}
    className={`${isActive("/") ? "text-blue-600 font-bold" : "text-gray-700"}`}
  >
    Home
  </Link>

  <Link
    href="/about"
    onClick={() => setOpen(false)}
    className={`${isActive("/about") ? "text-blue-600 font-bold" : "text-gray-700"}`}
  >
    About
  </Link>

  <Link
    href="/service"    // ✔ Change to /services if your folder is /services
    onClick={() => setOpen(false)}
    className={`${isActive("/service") ? "text-blue-600 font-bold" : "text-gray-700"}`}
  >
    Services
  </Link>

  <Link
    href="/contact"
    onClick={() => setOpen(false)}
    className={`${isActive("/contact") ? "text-blue-600 font-bold" : "text-gray-700"}`}
  >
    Contact
  </Link>
</nav>

      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setOpen(false)}
        />
      )}

      <nav className="bg-white fixed w-full z-20 top-0 start-0 shadow-md border-b border-gray-200">
        <div className="max-w-7xl flex items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 ">
            <Image src={logo} width={40} height={40} alt="logo" />
            <span className="text-xl font-semibold">CodeArcUs</span>
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0">
            <button
              type="button"
              className=" bg-blue-200 hover:bg-blue-500 rounded-2xl px-3 py-2 text-sm"
            >
              Get started
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden hover:bg-gray-200 rounded"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${
                isActive("/") ? "text-blue-600 font-bold" : "text-heading"
              } hover:scale-110 hover:transition-transform duration-300 hover:text-blue-500 `}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`${
                isActive("/about") ? "text-blue-600 font-bold" : "text-heading"
              } hover:scale-110 hover:transition-transform duration-300 hover:text-blue-500 `}
            >
              About
            </Link>

            <Link
              href="/service"
              className={`${
                isActive("/service")
                  ? "text-blue-600 font-bold"
                  : "text-heading"
              } hover:scale-110 hover:transition-transform duration-300 hover:text-blue-500 `}
            >
              Services
            </Link>

            <Link
              href="/contact"
              className={`${
                isActive("/contact")
                  ? "text-blue-600 font-bold"
                  : "text-heading"
              } hover:scale-110 hover:transition-transform duration-300 hover:text-blue-500 `}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
