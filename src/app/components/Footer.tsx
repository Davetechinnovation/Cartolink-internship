import React from 'react'

function Footer() {
    return (
        <div className=' '>
            <div className=' bg-[#242424] py-4 px-5  flex flex-wrap gap-5 justify-center sm:justify-between '>
                <div className='flex  items-center gap-2'>
                    <div className='bg-black w-[40px] rounded-[10px] py-2 flex justify-center items-center '>
                        <svg aria-label="Krea Logo" width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21"></path><path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793"></path></svg>
                    </div>
                    <p className='text-white sm:text-[22px] text-[18px] '>Krea Ai</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <p className='text-[white] text-[14px] sm:text-[17px] '>Curated By</p>
                    <div className='flex gap-2 justify-center items-center '>
                        <p><svg className='sm:w-[65px] w-[35px] ' height="24" viewBox="0 0 139 64" fill="white" xmlns="http://www.w3.org/2000/svg" data-sentry-element="svg" data-sentry-source-file="MobbinLogo.tsx" data-sentry-component="MobbinLogo"><title>Mobbin</title><path d="M84.3504 64H48.1695V47.315L32.569 63.9989L0 63.9841V29.9515L28.31 0H67.4439V15.9214L82.6881 0H116.593V26.1874H139V64H99.1163V48.208L84.3504 64Z" data-sentry-element="path" data-sentry-source-file="MobbinLogo.tsx"></path></svg></p>
                        <p className=' text-[15px] sm:text-[30px] font-bold text-[white] '>Mobin</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Footer