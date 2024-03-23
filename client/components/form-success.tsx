import Image from "next/image";
interface FormSuccessProps {
    message?:string
}
export const FormSuccess = ({message}:FormSuccessProps)=>{
    if(!message) return null;
    return(
        <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
           <Image src="/2.gif" alt="thumbs dowm gif" width={30} height={10}/>

            <p>{message}</p>

        </div>
    )

}