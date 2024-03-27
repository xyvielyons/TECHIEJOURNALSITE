'use client'
import React from "react";
import {Card, Skeleton} from "@nextui-org/react";

export default function EditorLoading() {
   
    
  return (
    
     <div className="flex w-full gap-2 md:flex-row flex-col">
         <div className="flex flex-col space-y-2 md:w-1/2 w-full">
            <Skeleton className="rounded-lg">
                <div className="h-28 rounded-lg bg-default-400"></div>
            </Skeleton>
            <Skeleton className="rounded-lg">
                <div className="h-28 rounded-lg bg-default-400"></div>
            </Skeleton>
            <Skeleton className="rounded-lg">
                <div className="h-28 rounded-lg bg-default-800"></div>
            </Skeleton>
         </div>
         <div className="md:w-1/2 w-full">
            <Skeleton className="rounded-lg">
                <div className="h-screen rounded-lg bg-green-300"></div>
            </Skeleton>
         </div>
     </div>
  );
}