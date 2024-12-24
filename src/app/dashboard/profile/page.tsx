import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen justify-center items-center flex pt-20 pl-20'>
      <UserProfile routing="hash"/>
    </div>
  )
}
export default page
