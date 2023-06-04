import Link from "next/link"
import { useState, useEffect } from "react"

export const NavigationButton = ({ children, link, disabled }: any) => {
  const [isDisabled, setDisabled] = useState('hover:bg-spoon hover:text-ghost');

  useEffect(() => {
    setDisabled(disabled ? 'bg-crayola' : 'bg-moonstone hover:bg-spoon hover:text-ghost')
  })

  return (
    <Link className={`ghosted w-full mt-2 md:mt-0 rounded font-display text-left px-6 py-2 flex justify-between ${isDisabled}`} href={link}>
      {children}<span aria-hidden="true">→</span>
    </Link>
  )
}