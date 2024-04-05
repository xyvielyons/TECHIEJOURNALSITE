'use client'
import Image from "next/image"
import parse from 'html-react-parser';
import Link from "next/link";
interface CardComponentTypes {
    title:string
    description:string
    image:string
    slug:string
}
  
export default function CardComponent({title,description,image,slug}:CardComponentTypes) {
  console.log(slug)
  function removeTags(str:any) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
 
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, '');
}
const Mydescription:string = removeTags(parse(description))

    return (
      <div className="bg-creamywhite w-full rounded-xl hover:bg-accentcolor hover:text-white p-2 shadow-md text-secondarycolor">
        <Link href={`/post/${slug}`} className="" target="_blank">
        <div className="w-full">
            <Image src={image} className="rounded-t-xl h-64" width="1200" height="768" alt="card image"></Image>
        </div>
        <div className="p-3">
                <div className="">
                    <h1 className="font-bold text-sm">{title}</h1>
                </div>
                <div className="">
                    <p className="text-sm text-ellipsis line-clamp-3 text-secondarycolor">{Mydescription}</p>
                </div>

        </div>
        </Link>
        
      </div>
    )
  }
  