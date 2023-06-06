import { About } from '@/components/general/About';
import Link from 'next/link';

export const Footer = () => {
  return (
      <footer className="w-full sticky bottom-0 mt-4 py-4 border-moonstone border-t-2 bg-raisin">
        <Link href="https://www.patreon.com/SpoonfulofChaos" target="_blank" className="text-sm font-semibold text-moonstone hover:text-spoon">
          Support me on Patreon <span aria-hidden="true">→</span>
        </Link>
        <p className="text-xs italic mt-4">The Last of Us overhaul is unofficial Fan Content permitted under the Fan Content Policy created by me. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.</p>
      </footer>
  )
}