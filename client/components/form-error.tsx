import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Image from "next/image";
interface FormErrorProps {
    message?:string
}
export const FormError = ({message}:FormErrorProps)=>{
    if(!message) return null;
    return(
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <Image src="/1.gif" alt="thumbs dowm gif" width={30} height={10}/>
            <p>{message}</p>

        </div>
    )

}