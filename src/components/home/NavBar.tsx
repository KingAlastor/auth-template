"use client";

import { SignIn } from "../auth/signin-button"
import { SignOut } from "../auth/signout-button"
import { useSession } from "next-auth/react"

export const NavBar = () => {
  const { status } = useSession();

  return (
    <nav>
      <div>
        {status === "authenticated" ? <SignOut /> : <SignIn />}
      </div>
    </nav>
  )
}