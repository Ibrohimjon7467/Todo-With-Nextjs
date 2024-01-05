'use client'

import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [name, setName] = useState(null)

  return (
    <main>
      <div className="flex flex-col items-center gap-20 mb-5">
        <h1 className="text-5xl">Home</h1>
        <Link className="text-5xl hover:underline" href="/about">
          About
        </Link>
        <Link className="text-5xl hover:underline" href="/about/1">
          About with id
        </Link>
        <Link className="text-5xl hover:underline" href="/todos">
          Todos
        </Link>
      </div>
    </main>
  );
}