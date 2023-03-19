import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center p-5 gap-10 text-3xl font-bold">
        <Link href="/home">
          <li className="focus:text-orange-600">Home</li>
        </Link>
        <Link href="/blog-post/blog">
          <li className="focus:text-orange-600">Blogs</li>
        </Link>
        <Link href="/about">
          <li className="focus:text-orange-600">About</li>
        </Link>
        <Link href="/home">
          <li className="focus:text-orange-600">Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
