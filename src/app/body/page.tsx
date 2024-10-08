import React from 'react'
import Image from "next/image";
import Hireme from "@/components/layout/hireme";
import Download from "@/components/layout/download-resume";

export default function Body() {
  return (
    <div>
      <main className="m-5 mb-20 md:lg:grid grid-cols-1 md:grid-cols-2">


    <div className="flex justify-center items-center pr-4 md:pb-11 m-20 mr-16 md:m-40 md:lg:mr-0">

     {/* left side */}

    <Image className='relative top-16 right-2 md:ml-11 no-select' src='/arrow2.png' alt="arrow" height={50} width={45} />

  <div className="text-4xl md:text-6xl text-themewhite font-sans font-semibold ">
    <h1 className="mb-2">
      <pre>Creative UI/UX</pre>
    </h1>
    <h1 className="text-themeblue">
      <pre>Web-developer</pre>
    </h1>

    <div className="flex gap-6 text-sm  relative top-16 md:top-10">
      <Hireme/>
      <Download/>
    </div>
    
  </div>
  
</div>

<div className="relative w-full h-[500px] top-2 md:lg:top-4  bottom-5 flex justify-center items-center md:col-start-3 md:col-span-4 ">
  
  {/* right side */}

  <Image className='absolute z-0 no-select' src='/circleDoodle.png' alt="doodle" height={514} width={514} />

  <Image className='relative z-10 top-24 drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)] no-select' src='/personSitting.png' alt="person" height={472} width={400} />
</div>
</main>
    </div>
  )
}
