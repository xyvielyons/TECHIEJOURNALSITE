import { UserRole } from "@prisma/client"
import * as  z  from "zod"
export const SettingsSchema:any = z.object({
    name:z.optional(z.string()),
    isTwoFactorEnabled:z.optional(z.boolean()),
    role:z.enum([UserRole.ADMIN,UserRole.USER]),
    email:z.optional(z.string().email()),
    password:z.optional(z.string()),
    newPassword:z.optional(z.string().min(6))


})
.refine((data)=>{
    if(data.password && !data.newPassword){
        return false
    }
    if(!data.password && data.newPassword){
        return false
    }
    return true


},{message:"New password is required!",path:["newPassword"]})
.refine((data)=>{
    if(data.newPassword && !data.password){
        return false
    }
    return true


},{message:"password is required!",path:["password"]})


export const NewPasswordSchema = z.object({
    password:z.string().min(6,{
        message:"minimum of 6 characters required"
    })
})
export const ResetSchema = z.object({
    email:z.string().email({
        message:"Email is required"
    })
})
export const LoginSchema = z.object({
    email:z.string().email({
        message:"Email is required"
    }),
    password:z.string().min(1,{
        message:"Password is required"
    }).nonempty({message:"Enter your password"}),
    code:z.optional(z.string())
})
export const RegisterSchema = z.object({
    firstName:z.string().nonempty({ message: "Please enter your first name." }).min(3,{message:"Must be 3 or more characters long"}),
    lastName:z.string().min(3,{message:"Must be 3 or more characters long"}),
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().nonempty({ message: "Enter your password" }),
    confirmPassword:z.string().nonempty({ message: "confrim your password" })
})

export const TitleSchema = z.object({
title:z.string().nonempty({message:"please input the title"}).min(8,{message:"A minimum of 8 characters is needed"})
})
