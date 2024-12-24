import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { LogOut, Search } from 'lucide-react'
import Link from 'next/link'
import { SignOutButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <div className='fixed w-full h-20 bg-[#04cecc] flex items-center justify-between px-10  shadow-lg z-10'>
        <div className='flex items-center gap-2'>
        <Image src={"/logo.svg"} height={50} width={50} alt='logo'/>
        <Link href={'/dashboard'}><h1 className='font-bold text-xl'>InnoAI</h1></Link>
        </div>
      
      <div className='flex items-center border-gray-400 gap-2'>
        
        <input type="text" placeholder='Search....' className='p-2 outline-none rounded-md' />
        <Button className='h-10 cursor-pointer' variant={"outline"}><Search/></Button>
      </div>
      <div className='flex gap-2'>
      <Button className='hover:bg-red-800' variant={'destructive'}>🔥 Join Our Membership Just At ₹49.99</Button>
      
      <div className='bg-[#009ce8] p-2 flex shadow-lg rounded-lg text-white gap-2'><LogOut/> <SignOutButton/></div>
      </div>
      
    </div>
  )
}

export default Navbar
