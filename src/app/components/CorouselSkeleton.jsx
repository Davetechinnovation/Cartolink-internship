import React from 'react';

const skeletonImages = [
  { className: 'w-[90%] sm:w-1/2' },
  { className: 'w-[75%] sm:w-[38%]' },
  { className: 'w-[90%] sm:w-1/2' },
  { className: 'w-[75%] sm:w-[38%]' },
  { className: 'w-[90%] sm:w-1/2' },
  { className: 'w-[75%] sm:w-[38%]' },
  { className: 'w-[90%] sm:w-1/2' },
  { className: 'w-[75%] sm:w-[38%]' },
  { className: 'w-[90%] sm:w-1/2' },
  { className: 'w-[75%] sm:w-[38%]' },
];

function CorouselSkeleton() {
  return (
    <div className="w-full sm:pt-[60px] pb-[20px] py-[20px] mx-auto">
      <div className="w-full overflow-hidden">
        <div className="flex">
          {skeletonImages.map((img, i) => (
            <div 
              key={i} 
              className={`flex-shrink-0 mr-4 ${img.className} relative`}
              style={{ aspectRatio: '4/3' }}
            >
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse">
                {/* Skeleton content */}
                <div className="absolute bottom-2 sm:bottom-5 left-0 w-full px-4">
                  <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-600 rounded mt-1"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {skeletonImages.map((_, i) => (
          <div 
            key={i}
            className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600"
          />
        ))}
      </div>
    </div>
  );
}

export default CorouselSkeleton;