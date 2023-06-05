export const Card = ({ children, variant }: any) => {
  return (
    <div className={`rounded overflow-hidden shadow-lg bg-raisin mt-6 w-full md:mt-0`}>
      <div className="px-6 py-3">
        {children}
      </div>
    </div>
  )
};