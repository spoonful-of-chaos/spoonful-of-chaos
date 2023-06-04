import Link from "next/link"
import { useState, useEffect } from "react"

export const NavigationButton = ({ children, link, variant }: any) => {
  const [bgColor, setBgColor] = useState('bg-moonstone')

  useEffect(() => {
    setBgColor(variant === 'coming-soon' ? 'bg-crayola' : 'bg-moonstone')
  })

  return (
    <Link className={`ghosted w-full mt-2 md:mt-0 rounded font-display ${bgColor} text-left px-6 py-2 flex justify-between hover:bg-spoon hover:text-ghost`} href={link}>
      {children}<span aria-hidden="true">→</span>
    </Link>
  )
}