"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "tentang kami",
    path: "/about",
  },
  {
    name: "daftar mobil",
    path: "/car",
  },
  {
    name: "syarat & ketentuan",
    path: "/service",
  },
  {
    name: "contact us",
    path: "/contact",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-4">
      {links.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={`${
            item.path === pathname &&
            "text-indigo-500 border-b-2 border-indigo-600"
          } capitalize font-semibold hover:text-indigo-400 transition-all`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
export default Navbar;
