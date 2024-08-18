"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

const Navbar = () => {

  const searchParams = useSearchParams();
  const todoFilter = searchParams.get('todos');
  function SearchBarFallback() {
    return <>placeholder</>
  }
  return (

    <nav>
      <Suspense  fallback={<SearchBarFallback />}>
      <Link href="/page" className={todoFilter === null ? "active" : ""}> All </Link>
      <Link href="/page?todos=active" className={todoFilter === "active" ? "active" : ""}> Active </Link>
      <Link href="/page?todos=completed" className={todoFilter === "completed" ? "active" : ""}> Completed </Link>
      </Suspense>
    </nav>
  );
  
};

export default Navbar;
