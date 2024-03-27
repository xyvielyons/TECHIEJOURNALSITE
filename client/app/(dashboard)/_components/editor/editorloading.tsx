'use client'
import React from "react";
import {Card, Skeleton} from "@nextui-org/react";

export default function EditorLoading() {
   
    
  return (
    
     <div className="flex w-full gap-2">
         <div className="flex flex-col space-y-2 w-1/2">
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
         <div className="w-1/2">
            <Skeleton className="rounded-lg">
                <div className="h-screen rounded-lg bg-green-300"></div>
            </Skeleton>
         </div>
     </div>
  );
}