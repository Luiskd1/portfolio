import React from "react";
import {Tabs, Tab} from "@nextui-org/react";


const page = () => {
  return (
    <div className="flex">
      <div className="">

export default function App() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <span>Photos</span>
            </div>
          }
        />
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <span>Music</span>
            </div>
          }
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <span>Videos</span>
            </div>
          }
        />
      </Tabs>
    </div>  
  );
}
      </div>
      
    </div>
  )
}

export default page
