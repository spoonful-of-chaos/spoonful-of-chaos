import { TabHeader } from "@/components/general/TabHeader"
import Link from "next/link"

export const About = () => {
  return (
    <>
      <TabHeader variant="secondary">Where am I?</TabHeader>
      <h2 className="text-spoon font-display text-2xl">Welcome to a Spoonful of Chaos</h2>
      <p className="mt-1 text-ghost">Hi, I&apos;m a giant nerd who enjoys creating homebrewed D&D 5e resources. I am a software engineer by trade, so I enjoy building as many of my own game master tools as possible. Here you&apos;ll find fun things I&apos;ve created for free. If you like what you see, consider 
        <Link className="text-moonstone hover:text-spoon" href="#">supporting me on Patreon!</Link>
      </p>
    </>
  )
}