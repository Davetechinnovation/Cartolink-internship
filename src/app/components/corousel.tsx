"use client"
import React, { useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const images = [
    { src: "/1.webp", className: "w-[90%] sm:w-1/2 border  border-gray-300 rounded-[10px] " },
    { src: "/wineframe.png", className: "w-[75%] sm:w-[38%] border  border-gray-300 rounded-[10px] " },
    { src: "/1.webp", className: "w-[90%] sm:w-1/2 border  border-gray-300 rounded-[10px] " },
    { src: "/wineframe.png", className: "w-[75%] sm:w-[38%] border  border-gray-300 rounded-[10px] " },
    { src: "/1.webp", className: "w-[90%] sm:w-1/2 border  border-gray-300 rounded-[10px] " },
    { src: "/wineframe.png", className: "w-[75%] sm:w-[38%] border  border-gray-300 rounded-[10px] " },
    { src: "/1.webp", className: "w-[90%] sm:w-1/2 border  border-gray-300 rounded-[10px] " },
    { src: "/wineframe.png", className: "w-[75%] sm:w-[38%] border  border-gray-300 rounded-[10px] " },
    { src: "/1.webp", className: "w-[90%] sm:w-1/2 border  border-gray-300 rounded-[10px] " },
    { src: "/wineframe.png", className: "w-[75%] sm:w-[38%] border  border-gray-300 rounded-[10px] " },
]

export default function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [Autoplay({ delay: 2500 })]
    )

    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())

        emblaApi.on("select", onSelect)
        onSelect()
    }, [emblaApi])

    return (
        <div className="sm:pt-[60px] pb-[20px] py-[20px]">
            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex items-center">
                    {images.map((img, i) => (
                        <div key={i} className={`flex-shrink-0 mr-4 relative ${img.className}`}>
                           
                            <Image
                                src={img.src}
                                alt={`Slide ${i}`}
                                width={800}
                                height={500}
                                className="rounded-lg object-cover w-full h-auto filter brightness-80 "
                            />
                            <div className="absolute bottom-2 sm:bottom-5 left-0 flex items-center justify-center">
                                <div className="max-w-[400px]  px-4 ">
                                  
                                    <h2 className="sm:text-[25px] text-[19px] font-extrabold text-wt drop-shadow-md">
                                        {img.src === "/1.webp"
                                            ? "WAN 2.2 Image Generation"
                                            : "Flux.1 Krea"}
                                    </h2>

                               
                                    <p className="text-wt text-lg font-bold text-[12px] sm:text-[14px]   rounded-lg mt-1 sm:mt-2 inline-block">
                                        {img.src === "/1.webp"
                                            ? "Generate complex images with the brand new powerful WAN 2.2 model. Exceptional prompt adherence and ultra realistic textures. "
                                            : "We are making the weights for our FLUX.1 krea model open source. Download and run our model weights, read the technical report, or generate with it in krea image. "}
                                    </p>
                                </div>
                            </div>

                        </div>


                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => emblaApi && emblaApi.scrollTo(i)}
                        className={`h-2 w-2 rounded-full cursor-pointer transition-all ${selectedIndex === i ? "bg-blk cursor-pointer scale-125" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
