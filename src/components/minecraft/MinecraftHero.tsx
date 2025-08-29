import { NavigationButton } from "../general/NavigationButton"

export const MinecraftHero = () => {
  return (
    <div className="text-center max-w-md mb-12">
      <h1>Minecraft Block Palette Creator</h1>
      <p className="text-ghost mt-4">A build-your-own Minecraft block palette creator.</p>
      <div className="w-full flex flex-col mt-6">
        <NavigationButton link="/mc/palette">Palettte Creator</NavigationButton>
      </div>
    </div>
  )
}