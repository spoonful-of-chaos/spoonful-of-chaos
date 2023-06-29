import { NavigationButton } from "../general/NavigationButton"

export const LastofUsHero = () => {
  return (
    <>
      <div className="text-center max-w-md">
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
        <NavigationButton link="/lou5e/appendix">
          Appendix A: Creature Stat Blocks
        </NavigationButton>
      </div>
    </>
  )
}