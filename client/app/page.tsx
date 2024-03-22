import Image from "next/image";
import { Button } from "@/components/ui/button"
import {Poppins} from "next/font/google"
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins({
  subsets:["latin"],
  weight:["600"]
})
export default function Home() {
  return (
    <main className="">
         <div>Home</div>
    </main>
  );
}
