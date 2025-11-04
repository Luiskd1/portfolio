'use client'
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from 'next/image';


const WhatsappIAPhotos = () => {
    const images = [
        "/whatsapp-ia/ia1.png",
        "/whatsapp-ia/ia2.png",
        "/whatsapp-ia/ia3.png",
        "/whatsapp-ia/ia4.png",
        "/whatsapp-ia/ia5.png",
        "/whatsapp-ia/ia6.png",
    ];

    return (
        <Carousel
        className='w-full   max-w-xs  xl:max-w-full'
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index} className=" w-full h-full xl:basis-1/2 2xl:basis-1/3 bg-[#131B23]">
                        <div className="p-1">
                            <Card className="border border-[#1E2D3D] bg-[#131B23]">
                                <CardContent className="flex items-center justify-center lg:p-6">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className=" h-[400px] flex justify-center items-center overflow-hidden">
                                                <Image  src={image} alt={`WhatsApp IA ${index + 1}`} width={1920} height={1080} className="w-full h-full  hover:cursor-pointer"/>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="min-w-[90%] h-[90%] flex items-center justify-center bg-gradient-to-r border dark ">
                                            <Image src={image} alt={`WhatsApp IA ${index + 1}`} width={1920} height={1080} className="max-w-full max-h-full object-contain "/>
                                        </DialogContent>
                                    </Dialog>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='hidden md:flex '/>
            <CarouselNext  className='hidden md:flex'/>
        </Carousel>
    );
}

export default WhatsappIAPhotos

