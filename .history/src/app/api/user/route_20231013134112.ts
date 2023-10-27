import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
   try {
     const body=await req.json()
     const {email,username,password}=body
     const existingUserByEmail= await db.user.findUnique({
        where: {email:email}
     })
     if(existingUserByEmail){
        return NextResponse.json({user:null,message:"User with this email already exist"},{status:409})
     }
     const existingUserByUserName= await db.user.findUnique({
        where: {username:username}
     })
     if(existingUserByUserName){
        return NextResponse.json({user:null,message:"User with this username already exist"},{status:409})
     }
     return NextResponse.json(body)
   } catch (error) {
    
   }
    
}