import { LastofUsHero } from "../LastofUs/LastofUsHero"
import { NavigationButton } from "./NavigationButton"

export const HeroSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="text-center max-w-md">
        <h3 className="font-display text-moonstone underline underline-offset-8 mb-6">Latest Project</h3>
      </div>
      <LastofUsHero />
    </div>
  )
}