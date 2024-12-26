"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Dashboard from '@/components/Dashboard'


const dashboard = () => {
    const { data: session } = useSession()

    // if(!session) {
    //     const router = useRouter()
    //     router.push('/login')
    //   }

  return (
    <>
    <div className='text-3xl font-bold flex justify-center items-center'>
       Dashboard
    </div>

    <div>
      <img className='w-full h-[120vh]' src="https://media.istockphoto.com/id/1168943634/vector/colorful-vector-hand-drawn-doodles-cartoon-set-of-tea-combinations.jpg?s=612x612&w=0&k=20&c=XeIHoU9pkJOynzhS89DCwR7qjVpuDyF7tji9LDDTn5Y=" alt="" />
      
    </div>

    </>
  )
}

export default dashboard
