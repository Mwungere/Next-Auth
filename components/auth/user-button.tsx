"use client"

import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaUser } from "react-icons/fa"
import { useCurrentuser } from "@/hooks/use-current-user"
import { LogoutButton } from "@/components/auth/logout-button"
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu"

import { ExitIcon } from "@radix-ui/react-icons"


export const UserButton = () => {
    const user = useCurrentuser()
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src={user?.image || ""} />
                <AvatarFallback className="bg-sky-500">
                    <FaUser className="text-white" />
                </AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
            <LogoutButton>
                <DropdownMenuItem className="bg-white">
                    <ExitIcon />
                    Logout
                </DropdownMenuItem>
            </LogoutButton>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
