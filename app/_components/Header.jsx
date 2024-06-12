"use client";
import Image from "next/image";
import logoImg from "../assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList } from "lucide-react";
import ProductsApis from "../_utils/ProductsApis";
import { useEffect, useState } from "react";

function Header() {
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    getCategories_();
  }, []);
  const getCategories_ = () => {
    ProductsApis.getCategories().then((res) => {
      setCategoriesList(res.data.data);
    });
  };
  return (
    <header className="bg-white shadow-md w-full">
      <div className="mx-auto flex h-16 container items-center gap-8 ">
        <a className="block text-primary" href="#">
          <Image src={logoImg} alt="logo" width={40} height={40} />
        </a>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="hidden md:flex gap-1 items-center bg-slate-100 p-2 rounded-xl">
              <LayoutList size={18} />
              <h2 className="text-sm">Categories</h2>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {categoriesList.map((category, index) => {
              return (
                <DropdownMenuItem key={index}>
                  <div className="flex justify-start items-center gap-2 cursor-pointer">
                    <Image
                      src={category?.attributes?.icon?.data?.attributes?.url}
                      alt="01"
                      width={25}
                      height={25}
                    />
                    <p>{category?.attributes?.name}</p>
                  </div>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-medium">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Careers{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  History{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Services{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Projects{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Blog{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-secondary"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-secondary sm:block"
                href="#"
              >
                Register
              </a>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
