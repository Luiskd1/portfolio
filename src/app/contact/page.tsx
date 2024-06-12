import React from 'react';
import ContactMe from './contactme';
import { motion } from "framer-motion";

import ParticlesSearch from "@/components/particule/particules";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Page = () => {
  return (
    <motion.div
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.8 }}
    className='w-full flex'
  >
      <ContactMe />
      
    </motion.div>
  );
};

export default Page;
