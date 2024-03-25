"use client"
import { UserInfo } from "@/components/user-info"
import { useCurrentUser } from "@/hooks/use-current-user"
export default function Profileform() {
    const user = useCurrentUser()
  return (
    
        <UserInfo user={user} label="🧕 Your Profile"></UserInfo>
    
  )
}
