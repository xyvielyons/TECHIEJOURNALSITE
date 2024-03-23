"use client"

import { Card,CardContent,CardFooter,CardHeader } from "../ui/card";
import { Header } from "./header";
import {Social} from "./social"
import { BackButton } from "./back-button";
interface CardWrapperProps {
    children:React.ReactNode;
    headerLabel:string;
    backButtonLabel:string;
    backButtonHref:string;
    showSocial?:boolean;
    header:string;
}

export const CardWrapper = ({
    header,
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}:CardWrapperProps)=>{
    return (
        <Card className="w-full shadow-md ">
            <CardHeader>
                <Header label={headerLabel} headerLabel={header}></Header>
            </CardHeader>
            <CardContent>
               {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )}
            <CardFooter>

                <BackButton
                label={backButtonLabel}
                href={backButtonHref}
                >
                </BackButton>
            </CardFooter>
            

        </Card>
    )

}