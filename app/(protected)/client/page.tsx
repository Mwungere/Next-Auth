"use client"

import { UserInfo } from "@/components/user-info"
import { useCurrentuser } from "@/hooks/use-current-user"
const ClientPage = () => {

    const user = useCurrentuser()
    console.log(user);
    
  return (
    <UserInfo 
        user={user} 
        label="📱 Client component"
    />
  )
}

export default ClientPage