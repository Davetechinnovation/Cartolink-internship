"use client"
import React from "react"

export default function CorouselSkeleton() {
    const skeletonItems = [
        "w-[90%] sm:w-1/2",
        "w-[75%] sm:w-[38%]",
        "w-[90%] sm:w-1/2",
        "w-[75%] sm:w-[38%]",
        "w-[90%] sm:w-1/2",
        "w-[75%] sm:w-[38%]",
        "w-[90%] sm:w-1/2",
        "w-[75%] sm:w-[38%]",
        "w-[90%] sm:w-1/2",
        "w-[75%] sm:w-[38%]",
    ]

    return (
        <div className="sm:pt-[60px] pb-[20px] py-[20px]">
            {/* Carousel Skeleton */}
            <div className="overflow-hidden">
                <div className="flex items-center">
                    {skeletonItems.map((className, i) => (
                        <div key={i} className={`flex-shrink-0 mr-4 relative ${className}`}>
                            <div className="bg-gray-300 animate-pulse rounded-lg w-full h-[500px] object-cover filter brightness-80"></div>
                            <div className="absolute bottom-2 sm:bottom-5 left-0 flex items-center justify-center w-full">
                                <div className="max-w-[400px] px-4 w-full">
                                    <div className="h-6 bg-gray-400 animate-pulse rounded sm:text-[25px] text-[19px] font-extrabold w-3/4 mb-2"></div>
                                    <div className="h-4 bg-gray-400 animate-pulse rounded text-[12px] sm:text-[14px] w-full"></div>
                                    <div className="h-4 bg-gray-400 animate-pulse rounded text-[12px] sm:text-[14px] w-1/2 mt-1"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots Skeleton */}
            <div className="flex justify-center mt-4 gap-2">
                {skeletonItems.map((_, i) => (
                    <div
                        key={i}
                        className="h-2 w-2 rounded-full bg-gray-300 animate-pulse"
                    />
                ))}
            </div>
        </div>
    )
}
