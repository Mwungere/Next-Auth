"use server"

import { signOut } from "@/auth"

export const logout = async () => {
    // some server staff you want to do before logging out
   await signOut()
}