import { NavigationButton } from "./NavigationButton"

export const HeroSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="text-center max-w-md">
        <h3 className="font-display text-moonstone underline underline-offset-8 mb-6">Latest Project</h3>
        <h1>The Last of Us D&D 5e</h1>
        <p className="text-ghost mt-4">A comprehensive overhaul of Dungeons & Dragons 5th edition for a <span className="italic">Last of Us</span> campaign setting.</p>
      </div>
      <div className="w-full flex flex-col md:grid md:grid-cols-3 md:gap-6 mt-12">
        <NavigationButton link="/lou5e/characters">
          Characters & Classes
        </NavigationButton>
        <NavigationButton link="/lou5e/encounters">
          Encounter Generator
        </NavigationButton>
        <NavigationButton link="/lou5e/crafting">
          Cantrips & Crafting
        </NavigationButton>
        <NavigationButton disabled link="/">
          Coming Soon: Gameplay Rules
        </NavigationButton>
        <NavigationButton disabled link="/">
          Coming Soon: Equipment & Items
        </NavigationButton>
        <NavigationButton disabled link="/">
          Coming Soon: Appendix A: Creature Stat Blocks
        </NavigationButton>
      </div>
    </div>
  )
}