import Link from 'next/link';

export const Footer = () => {
  return (
      <footer className="w-full sticky bottom-0">
        <Link href="#" className="text-sm font-semibold text-moonstone hover:text-spoon">
          Support me on Patreon <span aria-hidden="true">→</span>
        </Link>
      </footer>
  )
}