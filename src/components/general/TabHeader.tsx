export const TabHeader = (props: any) => {
  if (props.variant === 'secondary') {
   return (
    <div className="border-b-2 border-ghost mb-4">
      <span className="bg-ghost rounded-t text-black font-display py-1 px-2">{props.children}</span>
    </div>
  ) 
  } else {
   return (
    <div className="border-b-2 border-spoon mb-4">
      <span className="bg-spoon rounded-t text-white font-display py-1 px-2">{props.children}</span>
    </div>
  ) 
  }
}