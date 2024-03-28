import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import CardComponent from "../card"
import { useEffect, useState } from "react"

function CategoryCard({categoryCardData}:any) {
    const [category,setCategory] = useState<string>('')
    useEffect(()=>{
        categoryCardData(category)

    },[category])

    const getValue= (value:any)=>{
      setCategory(value)
    }
  return (
    <div>
        <CardComponent
        title="category"
        description="select a category...."
        >
        <Select onValueChange={getValue}>
        <SelectTrigger className="w-full">
            <SelectValue placeholder="category" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="Ai">Ai</SelectItem>
            <SelectItem value="Cloud">Cloud</SelectItem>
            <SelectItem value="Engineering">Engineering</SelectItem>
            <SelectItem value="Programming">Programming</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
        </SelectContent>
        </Select>

        </CardComponent>
        
    </div>
  )
}

export default CategoryCard