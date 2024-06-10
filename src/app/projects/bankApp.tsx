import React from 'react'
import BankPhotos from './bankphotos'

const BankApp = () => {
  return (
    <div className=' flex flex-col gap-2 px-16'>
      <h1 className='text-white text-2xl'>Project: Banking Application</h1>
      <p>I developed a complete banking application using modern technologies such as Supabase, React, Next.js, and Tailwind CSS. This application includes user registration and login functionalities, as well as a well-designed user interface for managing bank accounts, making transfers, and viewing transaction history.</p>
      <h1>Key Features:</h1>
      <div className='flex gap-2'>
        <div className="px-10 py-3  w-1/2 first-line:py-5 rounded-md border border-[#1F2836]  bg-[#12171F]">
          <h1 className='text-white pb-6'>User Authentication:</h1>
          <ul className="list-disc list-inside pl-4">
            <li>User Registration: Allows new users to create an account by providing the necessary information.</li>
            <li>Login: Registered users can securely log into their accounts.</li>
          </ul>

        </div>
        <div className="px-10 py-3  w-1/2 first-line:py-5 rounded-md border border-[#1F2836]  bg-[#12171F]">
          <h1 className='text-white pb-6'>Bank Account Management:</h1>
          <ul className="list-disc list-inside pl-4">
            <li>Dashboard View: Displays a summary of the user's accounts, including the current balance and recent transactions.</li>
            <li>Transfers: Users can transfer funds between their accounts or to external accounts.</li>
            <li>Transaction History: A detailed section where users can view the complete history of their transactions.</li>
          </ul>

        </div>
      </div>

    <BankPhotos/>
    </div>
  )
}

export default BankApp