import Link from "next/link"
import { Card } from "./Card"

export const HeroSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="text-center max-w-md">
        <h3 className="font-display text-moonstone underline underline-offset-8 mb-6">Latest Project</h3>
        <h1>The Last of Us D&D 5e</h1>
        <p className="text-ghost mt-4">A comprehensive overhaul of Dungeons & Dragons 5th edition for a <span className="italic">Last of Us</span> campaign setting.</p>
      </div>
      <div className="w-full flex flex-col md:grid md:grid-cols-3 md:gap-6 mt-12">
        <Link className="ghosted w-full md:mt-0 rounded font-display bg-moonstone text-left px-6 py-2" href="/lou5e/characters">
          Characters & Classes
        </Link>
        <Link href="/lou5e/encounters" className="ghosted mt-6 w-full md:mt-0 rounded font-display bg-moonstone text-left px-6 py-2">
          Encounter Generator
        </Link>
        <Link href="/" className="ghosted mt-6 w-full md:mt-0 rounded font-display bg-crayola text-left px-6 py-2 ">
          Coming Soon: Cantrips & Crafting
        </Link>
        <Link href="/" className="ghosted mt-6 w-full md:mt-0 rounded font-display bg-crayola text-left px-6 py-2 ">
          Coming Soon: Gameplay Rules
        </Link>
        <Link href="/" className="ghosted mt-6 w-full md:mt-0 rounded font-display bg-crayola text-left px-6 py-2 ">
          Coming Soon: Equipment & Items
        </Link>
        <Link href="/" className="ghosted mt-6 w-full md:mt-0 rounded font-display bg-crayola text-left px-6 py-2 ">
          Coming Soon: Appendix A: Creature Stat Blocks
        </Link>
      </div>
    </div>
  )
}