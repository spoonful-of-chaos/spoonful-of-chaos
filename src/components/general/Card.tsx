import { CloseButton } from "./CloseButton";

export const Card = ({ children, close }: { children: any, close?: any }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-black mt-6 w-full md:mt-0">
      <div className="px-6 py-3 flex h-full">
        <div className="w-full">
          {children}
        </div>
        {close && <CloseButton clickHandler={close} />}
      </div>
    </div>
  )
};