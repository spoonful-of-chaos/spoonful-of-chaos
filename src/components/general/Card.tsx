export const Card = ({ children }: any) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-moonstone mt-6 md:mt-0 w-full">
      <div className="px-6 py-3">
      { children }
      </div>
    </div>
  )
};