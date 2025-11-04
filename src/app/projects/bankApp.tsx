'use client'
import React from 'react'
import BankPhotos from './bankphotos'
import { SiGithub, SiVercel } from 'react-icons/si'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { bankAppData } from './bankApp.data'
import { bankAppDataEs } from './bankApp.data.es'

const BankApp = () => {
  const { language, t } = useLanguage()
  const projectData = language === 'en' ? bankAppData : bankAppDataEs
  const { title, description, github, vercel, features, accountManagement } = projectData

  return (
    <div className=' flex flex-col gap-2 px-2 lg:px-16 w-full h-full  '>
      <div className='flex items-center  w-full  '>
        <h1 className='text-white text-2xl md:pr-2 w-[40%] sm:w-auto'>Project: {title}</h1>
        <div className=' xl:flex w-[60%] sm:w-auto '>
          <Link href={vercel} target="_blank" ><Button variant="link"><SiVercel size={25} />  <h1 className='text-1xl lg:pl-4 pl-1 text-[#8095AB]'>{t.projects.viewDemo}</h1>
          </Button></Link>
          <Link href={github} target="_blank" ><Button variant="link"><SiGithub size={25} />  <h1 className='text-1xl lg:pl-4 pl-1 text-[#8095AB]'>{t.projects.viewGithub}</h1>
          </Button></Link>
        </div>
      </div>
      <p>{description}</p>
      <div className='xl:flex gap-2 '>
        <div className="px-10 py-3  xl:w-1/2 first-line:py-5 rounded-lg border border-[#1F2836]  bg-[#12171F]">
          <h1 className='text-white pb-6'>{language === 'en' ? 'User Authentication:' : 'Autenticación de Usuario:'}</h1>
          <ul className="list-disc list-inside pl-4">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

        </div>
        <div className="px-10 py-3 mt-2 lg:mt-0 xl:w-1/2 first-line:py-5 rounded-lg border border-[#1F2836]  bg-[#12171F]">
          <h1 className='text-white pb-6'>{language === 'en' ? 'Bank Account Management:' : 'Gestión de Cuenta Bancaria:'}</h1>
          <ul className="list-disc list-inside pl-4">
            {accountManagement.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
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