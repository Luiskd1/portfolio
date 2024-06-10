import CrudPhotos from "./crudPhotos"

const CrudApp = () => {
    return (
        <div className=' flex flex-col gap-2 px-16'>
          <h1 className='text-white text-2xl'>Project: Crud Application</h1>
          <p>This project is a CRUD (Create, Read, Update, Delete) application developed to showcase skills in modern web development. The application allows users to manage data through an intuitive and functional interface, incorporating advanced search features for a better user experience.</p>
          <h1>Key Features:</h1>
          <div className='flex gap-2'>
            <div className="px-10 py-3  w-1/2 first-line:py-5 rounded-md border border-[#1F2836]  bg-[#12171F]">
              <h1 className='text-white pb-6'>User Authentication:</h1>
              <ul className="list-disc list-inside pl-4">
                <li>Create: Users can add new records to the database through forms in the interface.</li>
                <li>Read: The application displays a list of all existing records in a clear and organized manner.</li>
                <li>Update: Users can edit the information of existing records.</li>
                <li>Delete: Records can be securely deleted from the database.</li>
                <li>Search: Implementation of a search function allows users to quickly find specific records.</li>
              </ul>
    
            </div>
            <div className="px-10 py-3  w-1/2 first-line:py-5 rounded-md border border-[#1F2836]  bg-[#12171F]">
              <h1 className='text-white pb-6'>Technologies Used</h1>
              <ul className="list-disc list-inside pl-4">
                <li>React: Used for creating an interactive and dynamic user interface.</li>
                <li>Tailwind CSS: Utilized for design and styling, enabling rapid and efficient development of a visually appealing interface.</li>
                <li>Next.js: A React framework that provides server-side rendering and static site generation capabilities, enhancing performance and SEO.</li>
                <li>Express: A Node.js framework for building the backend of the application, handling routes and server logic.</li>
                <li>MongoDB: A NoSQL database used to store and manage the application's data</li>
              </ul>
    
            </div>
          </div>
    
        <CrudPhotos/>
        </div>
      )
}

export default CrudApp