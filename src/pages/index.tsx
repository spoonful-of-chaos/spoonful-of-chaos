import { MainLayout } from '@/layouts/MainLayout';
import { TabHeader } from '@/components/general/TabHeader';
import { RecentUpdates } from '@/components/general/RecentUpdates';
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout>
      <h1 className="font-display text-spoon text-4xl">The Last of Us D&D 5e</h1>
      <p className="text-ghost">A comprehensive overhaul of Dungeons & Dragons 5th edition for a <span className="italic">Last of Us</span> campaign setting.</p>
      <div className="mt-6">   
        <TabHeader variant="secondary">Where am I?</TabHeader>    
        <h2 className="text-spoon font-display text-2xl">Welcome to a Spoonful of Chaos</h2>
        <p className="mt-1 text-ghost">Hi, I&apos;m a giant nerd who enjoys creating homebrewed D&D 5e resources. I am a software engineer by trade, so I enjoy building as many of my own game master tools as possible. Here you&apos;ll find fun things I&apos;ve created for free. If you like what you see, consider <Link className="text-moonstone hover:text-spoon" href="#">supporting me on Patreon!</Link></p>
        <RecentUpdates />     
      </div>
    </MainLayout>
  )
}
