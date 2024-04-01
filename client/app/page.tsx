import HomePage from "@/components/home/homepage";
import type { Metadata } from "next";

export const metadata:Metadata = {
  title:"Home",
  description:"Get the latest blog posts happening worldwide on techie.io"
}
export default function Home() {
  return (
    <main className="w-full">
         <HomePage></HomePage>
    </main>
  );
}
