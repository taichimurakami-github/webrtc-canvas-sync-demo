import Link from "next/link";
import { PropsWithChildren } from "react";

interface LinkRoundedProps extends PropsWithChildren {
  href: string;
}
export default function StyledLink({ href, children }: LinkRoundedProps) {
  return (
    <Link
      className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded"
      href={href}
    >
      {children}
    </Link>
  );
}
