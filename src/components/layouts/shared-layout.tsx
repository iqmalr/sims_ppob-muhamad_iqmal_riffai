"use client";

import { HomeIcon, LogOutIcon } from "lucide-react";
import Link from "next/link";

type SharedLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const SharedLayout = ({ children, title }: SharedLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/dashboard" className="flex items-center">
              <HomeIcon className="h-6 w-6" />
              <span className="ml-2 text-xl font-bold">
                {title || "SIMS PPOB"}
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link
                href="/top-up"
                className="flex items-center hover:text-blue-500"
              >
                Top Up
              </Link>
              <Link
                href="/transaction"
                className="flex items-center hover:text-blue-500"
              >
                Transaction
              </Link>
              <Link
                href="/profile"
                className="flex items-center hover:text-blue-500"
              >
                Akun
              </Link>

              <Link
                href="/login"
                className="flex items-center text-red-500 hover:text-red-600"
              >
                <LogOutIcon className="mr-1 h-5 w-5" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default SharedLayout;
