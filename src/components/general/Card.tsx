export const Card = ({ children, variant }: any) => {
  if (variant === 'ghost') {
    return (
      <div className="rounded overflow-hidden shadow-lg bg-ghost mt-6 w-full md:mt-0">
        <div className="px-6 py-3">
          {children}
        </div>
      </div>
    )
  } else {
    return (
      <div className="rounded overflow-hidden shadow-lg bg-moonstone mt-6 w-full md:mt-0">
        <div className="px-6 py-3">
          {children}
        </div>
      </div>
    )
  }
};