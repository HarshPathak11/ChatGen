"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon, ArrowBigRight, User, LogOut } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { data: session } = useSession();
  const [profileOpen, setProfileOpen] = useState(false);

  // When mounted on client, now we can show the UI (prevents hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  if (!mounted) return null; // Avoid SSR issues with theme

  const handleLogout = () => {
    signOut();
    setProfileOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-14 bg-white/75 dark:bg-gray-800/75 border-b border-gray-200 dark:border-gray-700 backdrop-blur-lg transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className='text-2xl font-bold font-sans text-blue-500'>
          
            Chat<span className="text-green-600">Gen</span>
         
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/chat">
            <Button className="bg-black text-white font-bold px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
              Create <ArrowBigRight />
            </Button>
          </Link>

          {session ? (
            <div className="relative">
              <Button
                variant="ghost"
                onClick={() => setProfileOpen(prev => !prev)}
                className="p-3 flex items-center bg-gray-800 gap-2 transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:block">
                  {session.user?.name || session.user?.email?.split('@')[0]}
                </span>
              </Button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-800 border  dark:border-gray-700 rounded-md shadow-lg z-50 transition-colors">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-left bg-gray-800  dark:hover:bg-gray-700 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/auth/login">
                <Button className="bg-black text-white font-bold px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-black text-white font-bold px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                  Sign Up
                </Button>
              </Link>
            </>
          )}

          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-black" />}
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Dark Mode Toggle in Mobile */}
          <Button
            variant="ghost"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-14 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-4 w-48 z-40 flex flex-col gap-2">
          <Link href="/chat">
            <Button
              variant="default"
              className="bg-black text-white font-bold px-4 py-2 rounded-md hover:bg-gray-700 transition-colors w-full"
              onClick={() => setIsOpen(false)}
            >
              Create <ArrowBigRight />
            </Button>
          </Link>
          {session ? (
            <>
              <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                <User className="w-5 h-5" />
                <span>{session.user?.name || session.user?.email?.split('@')[0]}</span>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  signOut();
                }}
                className="bg-black text-white font-bold px-4 py-2 rounded-md hover:bg-gray-700 transition-colors w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button
                  variant="default"
                  className="bg-black text-white font-bold px-4 py-2 rounded-md hover:bg-gray-700 transition-colors w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button
                  variant="default"
                  className="bg-black text-white font-bold px-4 py-2 rounded-md hover:bg-gray-700 transition-colors w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
