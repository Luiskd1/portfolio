'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs/tabs";

const page = () => {



  return (
    <div className="  flex  h-full"  >
      <div className="flex-col p-8 gap-6 h-full border border-[#1E2D3D]  ">
        <Image src='devcode.svg' alt="imagen devcode" width={40} height={40} className="mb-10" />
        <Image src='personalinfo.svg' alt="imagen personalinfo" width={40} height={40} className="mb-10" />
        <Image src='hobbiesicon.svg' alt="imagen hobbiesicon" width={40} height={40} />
      </div>


      <Tabs defaultValue="account" className="w-full flex ">

        <div>
          <Accordion>
            <AccordionItem key="1" aria-label="Personal-Info" title="Personal-Info">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
            </AccordionItem>
          </Accordion>
        </div>

        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

    </div >


  )
}

export default page
