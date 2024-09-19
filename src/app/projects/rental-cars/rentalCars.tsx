import Link from "next/link";
import CrudPhotos from "./RentalCarsPhotos";
import { Button } from "@/components/ui/button";
import { SiGithub, SiVercel } from "react-icons/si";
import RentalPhotos from "./RentalCarsPhotos";
import { rentalCarsData } from "./rentalCars.data";

const RentalApp = () => {
  const { description, features, github, technologies, title, vercel } =
    rentalCarsData;
  return (
    <div className=" flex flex-col gap-2 md:px-2 lg:px-16 w-full h-full">
      <div className="flex items-center  w-full  ">
        <h1 className="text-white text-2xl md:pr-2 w-[40%] sm:w-auto ">
          Project: {title}
        </h1>
        <div className="xl:flex w-[60%] sm:w-auto">
          <Link href={vercel} target="_blank">
            <Button variant="link">
              <SiVercel size={25} />{" "}
              <h1 className="text-1xl lg:pl-4 pl-2 text-[#8095AB]">
                Deploy in vercel
              </h1>
            </Button>
          </Link>
          <Link href={github} target="_blank">
            <Button variant="link">
              <SiGithub size={25} />{" "}
              <h1 className="text-1xl lg:pl-4 pl-2 text-[#8095AB]">
                View in github
              </h1>
            </Button>
          </Link>
        </div>
      </div>
      <p>{description}</p>
      <h1 className="text-white">Key Features:</h1>
      <div className="xl:flex gap-2">
        <div className="lg:px-10 py-3 w-full xl:w-1/2 first-line:py-5 rounded-lg border border-[#1F2836]  bg-[#12171F]">
          <h1 className="text-white pb-6">Features: </h1>
          <ul className="list-disc list-inside lg:pl-4">
           {features.map((x,index) => (
            <li key={index}>{x}</li>
           ))} 
          </ul>
        </div>
        <div className="w-full lg:px-10 py-3 mt-2 lg:mt-0 xl:w-1/2 first-line:py-5 rounded-lg border border-[#1F2836]  bg-[#12171F]">
          <h1 className="text-white pb-6">Technologies Used</h1>
          <ul className="list-disc list-inside lg:pl-4">
          {technologies.map((x,index) => (
            <li key={index}>{x}</li>
           ))} 
          </ul>
        </div>
      </div>

      <div className=" pt-2 flex items-center justify-center">
        <RentalPhotos />
      </div>
    </div>
  );
};

export default RentalApp;
