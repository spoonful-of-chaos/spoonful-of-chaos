export const TabHeader = ({ children }: any) => {
  return (
    <div className="border-b-2 border-ghost mb-6">
      <span className="bg-ghost rounded-t text-black font-display py-1 px-2">{children}</span>
    </div>
  )
}