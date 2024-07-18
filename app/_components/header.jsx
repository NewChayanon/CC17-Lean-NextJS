"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {}, []);
  console.log("first");
  return (
    <header>
      <nav>
        <ul className="flex gap-4 bg-blue-200">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
