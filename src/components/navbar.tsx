import { Database } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div className="px-4 lg:px-6 h-14 flex items-center justify-between  max-w-7xl mx-auto w-full">
      <Link className="flex items-center justify-center" href="#">
        <Database className="h-6 w-6 text-primary" />
        <span className="ml-2 text-lg font-semibold">DatabaseAI</span>
      </Link>
      <nav className="flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </div>
  );
};

export default Navbar;
