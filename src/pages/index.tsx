import { Inter } from "next/font/google";
import Link from "next/link";
import StyledLink from "./components/Link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`text-white flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} gap-8 bg-black`}
    >
      <h1 className="">A Demo of simple communication app using canvas.</h1>
      <StyledLink href="/prepare/host/">Create a room as a Host</StyledLink>
      <StyledLink href="/prepare/host/">Create a room as a Guest</StyledLink>
    </main>
  );
}
