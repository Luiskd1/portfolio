import React from 'react'
import BankPhotos from './bankphotos'
import { SiGithub, SiVercel } from 'react-icons/si'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const BankApp = () => {
  return (
    <div className=' flex flex-col gap-2 px-2 lg:px-16 w-full h-full  '>
      <div className='flex items-center  w-full  '>
        <h1 className='text-white text-2xl md:pr-2 w-[40%] sm:w-auto'>Project: Banking Application</h1>
        <div className=' xl:flex w-[60%] sm:w-auto '>
          <Link href={"https://bank-app-master-f.vercel.app/"} target="_blank" ><Button variant="link"><SiVercel size={25} />  <h1 className='text-1xl lg:pl-4 pl-1 text-[#8095AB]'>Deploy in vercel</h1>
          </Button></Link>
          <Link href={"https://github.com/Luiskd1/bank_app-master"} target="_blank" ><Button variant="link"><SiGithub size={25} />  <h1 className='text-1xl lg:pl-4 pl-1 text-[#8095AB]'>View in github</h1>
          </Button></Link>
        </div>
      </div>
      <p>I developed banking application using modern technologies such as Supabase, React, Next.js, and Tailwind CSS. This application includes user registration and login functionalities, as well as a well-designed user interface for managing bank accounts, making transfers, and viewing transaction history.</p>
      <h1 className='text-white'>Key Features:</h1>
      <div className='xl:flex gap-2 '>
        <div className="px-10 py-3  xl:w-1/2 first-line:py-5 rounded-lg border border-[#1F2836]  bg-[#12171F]">
          <h1 className='text-white pb-6'>User Authentication:</h1>
          <ul className="list-disc list-inside pl-4">
            <li>User Registration: Allows new users to create an account by providing the necessary information.</li>
            <li>Login: Registered users can securely log into their accounts.</li>
          </ul>

        </div>
        <div className="px-10 py-3 mt-2 lg:mt-0 xl:w-1/2 first-line:py-5 rounded-lg border border-[#1F2836]  bg-[#12171F]">
          <h1 className='text-white pb-6'>Bank Account Management:</h1>
          <ul className="list-disc list-inside pl-4">
            <li>Dashboard View: Displays a summary of the user&apos;s accounts, including the current balance and recent transactions.</li>
            <li>Transfers: Users can transfer funds between their accounts or to external accounts.</li>
            <li>Transaction History: A detailed section where users can view the complete history of their transactions.</li>
          </ul>

        </div>
      </div>
      <div className=' pt-2 flex items-center justify-center'>
        <BankPhotos />
      </div>


    </div>
  )
}

export default BankApp