export const CloseButton = ({ clickHandler }: { clickHandler: any }) => {
  return (
    <>
      <button type="button" className="bg-ghost rounded-md p-1 inline-flex items-center justify-center text-black hover:bg-crayola-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-crayola-light h-6 w-6" onClick={clickHandler}>
        <span className="sr-only">Close</span>
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </>
  )
}