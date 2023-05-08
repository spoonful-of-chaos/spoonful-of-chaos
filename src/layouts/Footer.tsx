import Link from 'next/link';

export const Footer = () => {
  return (
      <footer className="w-full sticky bottom-0">
        <Link href="#" className="text-sm font-semibold leading-6 text-moonstone">
          Support me on Patreon <span aria-hidden="true">→</span>
        </Link>
      </footer>
  )
}