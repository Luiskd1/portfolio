import Link from "next/link"
import CrudPhotos from "./crudPhotos"
import { Button } from "@/components/ui/button"
import { SiGithub, SiVercel } from "react-icons/si"

const CrudApp = () => {
  return (
    <div className=' flex flex-col gap-2 md:px-2 lg:px-16 w-full h-full'>
      <div className='flex items-center  w-full  '>
        <h1 className='text-white text-2xl md:pr-2 w-[40%] sm:w-auto '>Project: Crud Application</h1>
        <div className="xl:flex w-[60%] sm:w-auto">
          <Link href={"https://crud-final-luiskd1.vercel.app/"} target="_blank" ><Button variant="link"><SiVercel size={25} />  <h1 className='text-1xl lg:pl-4 pl-2 text-[#8095AB]'>Deploy in vercel</h1>
          </Button></Link>
          <Link href={"https://github.com/Luiskd1/Crud-final"} target="_blank" ><Button variant="link"><SiGithub size={25} />  <h1 className='text-1xl lg:pl-4 pl-2 text-[#8095AB]'>View in github</h1>
          </Button></Link>
        </div>
      </div>
      <p>This project is a CRUD (Create, Read, Update, Delete) application developed to showcase skills in modern web development. The application allows users to manage data through an intuitive and functional interface, incorporating advanced search features for a better user experience.</p>
      <h1 className="text-white">Key Features:</h1>
      <div className='lg:flex gap-2'>
        <div className="lg:px-10 py-3 w-full lg:w-1/2 first-line:py-5 rounded-lg border border-[#1F2836]  bg-[#12171F]">
          <h1 className='text-white pb-6'>User Authentication:</h1>
          <ul className="list-disc list-inside lg:pl-4">
            <li>Create: Users can add new records to the database through forms in the interface.</li>
            <li>Read: The application displays a list of all existing records in a clear and organized manner.</li>
            <li>Update: Users can edit the information of existing records.</li>
            <li>Delete: Records can be securely deleted from the database.</li>
            <li>Search: Implementation of a search function allows users to quickly find specific records.</li>
          </ul>

        </div>
        <div className="w-full lg:px-10 py-3 mt-2 lg:mt-0 lg:w-1/2 first-line:py-5 rounded-lg border border-[#1F2836]  bg-[#12171F]">
          <h1 className='text-white pb-6'>Technologies Used</h1>
          <ul className="list-disc list-inside lg:pl-4">
            <li>React: Used for creating an interactive and dynamic user interface.</li>
            <li>Tailwind CSS: Utilized for design and styling, enabling rapid and efficient development of a visually appealing interface.</li>
            <li>Next.js: A React framework that provides server-side rendering and static site generation capabilities, enhancing performance and SEO.</li>
            <li>Express: A Node.js framework for building the backend of the application, handling routes and server logic.</li>
            <li>MongoDB: A NoSQL database used to store and manage the application&apos;s data</li>
          </ul>
        </div>
      </div>

      <div className=' pt-2 flex items-center justify-center'>
        <CrudPhotos />
      </div>


    </div>
  )
}

export default CrudApp