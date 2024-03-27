import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface cardProps {
    children:React.ReactNode
    title:string,
    description:string


} 
function CardComponent({
    children,
    title,
    description,
    

}:cardProps) {
  return (
    <div>
        <Card>

            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>

            <CardContent>
                {children}
            </CardContent>
        </Card>
    </div>
  )
}

export default CardComponent