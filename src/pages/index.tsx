import { MainLayout } from '@/layouts/MainLayout'
import Link from 'next/link'

export default function Home() {
  return (
    <MainLayout>
      <div>
        <h1 className="text-4xl text-spoon sm:text-6xl font-display">Welcome to Spoonful of Chaos</h1>
        <p className="mt-6 text-lg leading-8 text-ghost">Hi! I make homebrewed D&D 5th edition campaign settings and adventures. There&apos;s free fun stuff to be found on this website!</p>
        <p className="font-xs italic pt-4">Oh...and I have a <Link href="#" className="text-moonstone">Patreon</Link> if you&apos;re interested.</p>
        <div className="mt-10 flex items-center gap-x-6">
          <Link href="#" className="rounded-md bg-crayola px-3.5 py-2.5 text-sm font-semibold text-ghost shadow-sm hover:bg-moonstone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moonstone">Get started</Link>
        </div>
      </div>
    </MainLayout>
  )
}
