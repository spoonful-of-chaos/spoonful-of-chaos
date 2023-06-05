import { TabHeader } from "@/components/general/TabHeader"
import { Logo } from "./Logo"

export const About = () => {
  return (
    <>
      <TabHeader variant="ghost"><span className="text-black">Where am I?</span></TabHeader>
      <div className="p-4 -mt-4 flex">
        <Logo width="200" height="300" />
        <div>
          <h2>Welcome to a Spoonful of Chaos</h2>
          <p>Hi, I&apos;m a giant nerd who enjoys creating homebrewed D&D 5e resources. I am a software engineer by trade, so I enjoy building as many of my own game master tools as possible. Here you&apos;ll find fun things I&apos;ve created for free.
          </p>
        </div>
      </div>
    </>
  )
}