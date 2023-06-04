import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Navigation } from '@/utils/navigation';

const Logo = () => (
  <Image
    src="/chaos_spoon_horz_blkbg.jpg"
    alt="the spoon itself"
    width="80"
    height="30"
  />
);

export const Nav = () => {
  const [open, setOpen] = useState<boolean>();

  return (
    <header className="w-full">
        <nav className="flex text-ghost justify-between items-center">
        <button type="button" className="rounded-lg leading-7 hover:text-moonstone font-display text-left flex items-center">
          {/*<Logo />*/}
          <Link href="/">A Spoonful of Chaos</Link>
        </button>
        <div>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-ghost hover:text-moonstone"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          {open && (
            <div>
              <div className="fixed inset-0 z-10"></div>
              <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-moonstone p-6 px-6 md:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-end">
                  <button type="button" className="-m-2.5 rounded-md p-2.5 text-ghost" onClick={() => setOpen(false)}>
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root space-y-2">
                  {Navigation.map((c, i) => (
                    <Link key={`nav-${c}-${i}`} className="nav-item" href={c.link}>{c.text}</Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}