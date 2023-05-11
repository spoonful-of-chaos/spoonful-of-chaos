import Link from "next/link"

export const ClassBreadcrumb = () => {
  return (
    <>
      <Link
        className="mb-6 text-xs text-moonstone hover:text-spoon before:content-['←']"
        href="/lou5e/characters"
      > Characters</Link>
    </>
  )
}