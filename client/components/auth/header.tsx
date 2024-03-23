import { Poppins } from "next/font/google";
import {cn} from "@/lib/utils"

const font = Poppins({
    subsets:["latin"],
    weight:["600"]
})

interface HeaderProps {
    label:string,
    headerLabel:string
}

export const Header = ({label,headerLabel}:HeaderProps)=>{
    return(
        <div className="w-full flex flex-col gap-y-2 ">
            <h1 className={cn(
                "text-3xl font-semibold",
                font.className
            )}>{headerLabel}</h1>

            <p className="text-muted-foreground text-sm">{label}</p>

        </div>
    )

}