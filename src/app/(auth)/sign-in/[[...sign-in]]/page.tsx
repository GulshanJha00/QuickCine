import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {

  return(
    
    <>
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='shadow-2xl h-[550px] p-10 gap-1 flex bg-gray-200 dark:bg-gray-700'>
            <div className=' w-[450px]'>
                <Image className='h-[480px] shadow-xl rounded-lg' src={"/login.jpg"} height={10} width={450} alt='no image'/>
            </div>
            <div>
                <SignIn />
            </div>
        </div>
       
    </div>
        
    </>
  ) 
}
