'use client';

// import React, { useState } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const getDarkModePreference = () => {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return true;
  }
  return false;
};

export default function MainPage() {
  const [darkMode, setDarkMode] = useState(getDarkModePreference());
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setMounted(true);
    setDarkMode(getDarkModePreference());
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white shadow-lg dark dark:bg-slate-800">
      <header className="shadow-lg">
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="dark:invert">
            <Image src="/logo.svg" alt="Logo" width={70} height={100} />
          </div>
          <div className="text-gray-600 hover:text-gray-800 dark:text-white  focus:outline-none">
            {mounted && darkMode ? '🌓' : '☀️'}
          </div>
        </nav>
      </header>
      <div className="dark:text-white flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold underline">Hello, Next.js!</h1>
        <h2 className="dark:text-gray-300">
          Current Dark Mode Value: {darkMode.toString()}
        </h2>
        <Link
          className="text-2xl hover:text-gray-300 hover:underline"
          href="/dashboard"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
