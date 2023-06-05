export const TabHeader = ({ children, variant }: { children: any; variant: string }) => {
  return (
    <div className={`border-b-2 border-${variant} mb-4`}>
      <span className={`bg-${variant} rounded-t font-display py-1 px-2`}>{children}</span>
    </div>
  ) 
}