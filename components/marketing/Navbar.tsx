import Link from "next/link";

import { PiBracketsCurlyBold } from "react-icons/pi";

import { Button } from "../ui/button";

import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import LoaderComponent from "../LoaderComponent";

import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="py-8">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-4 items-center">
          <Link
            href="/"
            className="rounded-lg w-12 h-12 bg-blue flex items-center justify-center max-sm:h-8 max-sm:w-8"
          >
            <PiBracketsCurlyBold className="h-8 w-8 text-white max-sm:h-4 max-sm:w-4" />
          </Link>

          <h1 className="text-2xl font-bold max-sm:text-xl">
            <span className="text-blue">Snippet</span> Store
          </h1>
        </div>

        {/* Buttons */}

        <div>
          <SignedIn>
            <ClerkLoading>
              <LoaderComponent />
            </ClerkLoading>
            <ClerkLoaded>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-10 w-10 max-sm:h-8 max-sm:w-8",
                  },
                  variables: {
                    colorPrimary: "#1658ff",
                  },
                }}
              />
            </ClerkLoaded>
          </SignedIn>

          <SignedOut>
            <ClerkLoading>
              <LoaderComponent />
            </ClerkLoading>
            <ClerkLoaded>
              <SignInButton mode="modal">
                <Button className="button-base-styles bg-blue text-white">
                  Log In
                </Button>
              </SignInButton>
            </ClerkLoaded>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

{
  /* <Link href="/my-snippets">
<Button className="button-base-styles bg-blue text-white max-sm:hidden">
  Enter{" "}
  <ArrowRight className="h-4 w-5 text-white ml-2 mt-[0.5px]" />
</Button>
</Link> */
}
