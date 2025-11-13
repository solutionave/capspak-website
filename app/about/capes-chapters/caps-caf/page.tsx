import React from 'react'
import Image from "next/image";

const page = () => {
  return (
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[40rem] hover:shadow-xl transition-shadow duration-300">
        <Image
        src="/Assets/Opportunities/Climate action forum.jpeg"
        alt=""
        width={600}      
        height={400} 
        className='border border-radius[8px]'
     />
      </div>
  )
}

export default page
