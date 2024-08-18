"use client";

import Addtodo from '@/Components/Addtodo';
import dynamic from 'next/dynamic';
import Todos from '@/Components/Todos';
import React, { Suspense } from 'react';
import "./globals.css";
import { RiCalendarTodoFill } from "react-icons/ri";

// Dynamically import Navbar with ssr: false
const Navbar = dynamic(() => import('@/Components/Navbar'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Page = () => {
  return (
    <main>
      <h2>
        <RiCalendarTodoFill className='icons' /> Todo NEXT + Typescript <RiCalendarTodoFill className='icons' />
      </h2>
      
      <Navbar />
      <Addtodo />
      <Todos />
    </main>
  );
};

export default Page;
