import { PropsWithChildren } from "react";

interface LinkRoundedProps extends PropsWithChildren {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function StyledButton({ onClick, children }: LinkRoundedProps) {
  return (
    <button
      className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
