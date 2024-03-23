"use server"
import * as z from "zod"
import bcrypt from "bcrypt"
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
export const Register = async (values:z.infer<typeof RegisterSchema>)=>{
    const validatedFields = RegisterSchema.safeParse(values)
    
    if(!validatedFields.success){
        return {error:"Invalid fields"}
    }

    const {firstName,lastName,email,password,confirmPassword} = validatedFields.data
    const hashedPassword = await bcrypt.hash(password,10)
    const existingUser = await getUserByEmail(email)
    if(password !== confirmPassword){
        return{error:"Passwords do not match"}
    }
    const fullnames = firstName + lastName
    if(existingUser){
        return{error:"Email already in use"}
    }
    await db.user.create({
        data:{
            name:firstName,
            fullNames:fullnames,
            email,
            password:hashedPassword
        }
    })

    const verificationToken = await generateVerificationToken(email);
    //Todo:send verification email later
    await sendVerificationEmail(
        verificationToken.email, verificationToken.token
    )


   return {success:"confirmation email sent"}
    
}