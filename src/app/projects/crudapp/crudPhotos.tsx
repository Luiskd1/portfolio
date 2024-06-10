'use client'
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React, { useRef } from 'react';
import Autoplay from "embla-carousel-autoplay";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";


const CrudPhotos = () => {
    const images = [
        "/crud1.png",
        "/crud2.png",
        "/crud3.png",
        "/crud4.png",
        "/crud5.png",
    ];

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 bg-[#131B23]">
                        <div className="p-1">
                            <Card className="border border-[#1E2D3D] bg-[#131B23]">
                                <CardContent className="flex items-center justify-center p-6">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className=" h-[400px] flex justify-center items-center overflow-hidden">
                                                <img src={image} alt={`Bank ${index + 1}`} className="w-full h-full  hover:cursor-pointer"/>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="min-w-[90%] h-[90%] flex items-center justify-center bg-gradient-to-r from-[#04060A] border-[#131B23] to-[#151E27]">
                                            <img src={image} alt={`Bank ${index + 1}`} className="max-w-full max-h-full object-contain"/>
                                        </DialogContent>
                                    </Dialog>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default CrudPhotos
