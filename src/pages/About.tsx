import React from 'react'
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import pic from '../assets/react.svg'
import pic1 from '../assets/bd.jpg'

const About = () => {
  return (
   <div className="flex flex-col">
     
    <div className='flex justify-between mt-10 ml-36 mr-36 xs:flex-col xs:m-10 sm:flex-col md:w-[100%] sm:m-3 md:m-10'>

      <div className="w-80 xs:w-[16rem] xs:mx-auto md:mx-auto sm:w-[20rem]  "><span className='text-5xl font-extrabold xs:text-4xl md:text-4xl '>Know More</span> <span className='text-primary text-5xl font-extrabold xs:text-4xl  md:text-4xl'>About </span><span className='text-secondary font-extrabold text-5xl xs:text-4xl md:text-4xl'>Us</span></div>

      <div className="shadow-2xl h-[15rem] mt-16 w-[30rem] xs:mt-5 xs:w-[18.5rem] xs:h-[10] sm:w-[25rem] sm:h-[10] md:w-[30rem] md:h-[10] md:mt-0">
        <div className=" m-auto pt-10 w-[25rem] xs:w-[15.2rem] xs:pt-7 sm:w-[20.2rem] sm:pt-0 md:w-[30rem] md:m-2 md:text-xl">
          <BiSolidQuoteAltLeft />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero inventore quos ducimus molestias dolorum magnam ab labore architecto repellat.
        </div>
        <div className="flex gap-3 p-10 xs:p-5 xs:pl-6 sm:p-5 sm:pl-7 md:p-0 md:pl-2 md:pt-3">
          <div className="h-10 w-10 rounded-full  bg-primary">
            <img src={pic} className='p-2' alt="" />
          </div>
          <p className='font-bold mt-1'>GLORIA JESSICA</p>
        </div>
      </div>
    </div>
  <div className="bg-[#FEF4F5] w-[100%] xs:w-[18.5rem] xs:mx-auto sm:w-[25.5rem] sm:mx-auto h-80 text-center mt-20 xs:mt-3 md:w-[51rem]">
<div className="mt-5 xs:mt-3"><span className='font-extrabold text-[3rem] xs:text-xl '>What is </span><span className='text-primary text-[3rem] xs:text-xl sm:text-2xl font-bold'>Alariina ?</span></div>
<div className="w-[80%] mx-auto xs:text-xs xs:w-[90%] sm:text-sm sm:w-[90%] text-[24px]">Alariina is your path to purposeful connections. More than a matchmaking site, it's a curated space where authenticity meets intention. Embrace a journey of genuine connections, diversity, and lasting relationships. Alariina: Where love is intentional, and every match is a meaningful step toward lasting happiness
</div>

</div>
<div className=" gap-20 flex mx-auto md:gap-10 md:flex-col text-center xs:gap-5 xs:flex-col sm:gap-10 sm:flex-col mt-20">
  <div className="h-[30rem] w-[30rem] border-[3px] xs:mx-auto sm:mx-auto text-[#FF6161] overflow-hidden rounded-full xs:h-44 xs:w-44 sm:h-60 sm:w-60 md:h-80 md:w-80 md:ml-64  mt-10 ">
    <img src={pic1} className='w-full h-full object-cover  ' alt="" />
  </div>
  <div className=" xs:w-[18rem] sm:w-[25rem] ">
    <div className="flex gap-2 mb-5 md:ml-7 ">
    <span className='text-primary font-extrabold text-[3rem] xs:text-2xl sm:text-3xl'>Why </span> <span className='font-extrabold text-[3rem] xs:text-2xl '> Alariina?</span>

    </div>
  <div className="text-justify xs:w-[18.5rem] xs:text-xs sm:w-[25.5rem] md:ml-7 w-[35rem] md:w-[47rem]  text-[24px] sm:text-xs">Why Alariina? Because love deserves more than chance; it deserves intention. Alariina is more than a matchmaking site; it's a curated journey towards meaningful connections. We go beyond algorithms, fostering a community where authenticity, respect, and diversity thrive. 

  In a world of endless options, Alariina stands out as the compass guiding you to discover not just a match but a soulful connection that resonates with the essence of who you are. Choose Alariina because your journey to love deserves purpose, and every connection made here is an intentional step towards a fulfilling and lasting, relationship.
  </div>
  <div className="text-start mt-5 md:ml-7">
  <button className='bg-primary px-10 py-3 text-[#fff] xs:px-7 '>Get started</button>

  </div>
  </div>
 
</div>
<div className="flex mx-auto md:gap-5  gap-20 mt-20 xs:mt-10 xs:flex-col  sm:mt-10 sm:flex-col">
  <div className="bg-[#FEF4F5] text-center w-[32rem] h-[25rem] xs:h-[14rem] xs:w-[18.5rem] sm:h-[14rem] sm:w-[25.5rem] md:w-[23rem] md:ml-7 ">
  <div className='text-primary text-[3rem] font-extrabold m-5 mb-3  xs:mt-3 xs:mb-3 sm:mb-3 xs:w-'>Our Vision</div>
  <div className="text-[24px] m-2 xs:text-xs sm:text-sm md:text-xl">At Alariina, we envision a world where love transcends borders, connecting diverse hearts for lifelong happiness. Our platform is the catalyst for global relationships, fostering personal growth and shared joy. We are committed to innovation, inclusivity, and the transformative power of intentional connections.

  </div>
  </div>

  <div className="bg-[#FEF4F5] w-[32rem] text-center xs:w-[18.5rem] xs:h-[14rem] sm:w-[25.5rem] md:h-[25rem] sm:h-[14rem] md:w-[23rem]">
  <div className='text-primary text-[3rem] font-extrabold m-5 mb-3 xs:mt-3 xs:mb-3 sm:mb-3'>Our Mision</div>
  <div className="text-[24px] m-2 xs:text-xs sm:text-sm md:text-xl">At Alariina, we unite hearts globally, fostering lasting love through intentional connections. Our mission is to enrich lives, promote inclusivity, and be the trusted guide on the journey to enduring happiness.
  </div>
  </div>
</div>
<div className="flex mx-auto gap-10 mt-10 xs:flex-col-reverse xs:gap-3 xs:mt-10 sm:flex-col-reverse sm:gap-3 sm:mt-10 md:gap-10 md:ml-7">
<div className=" ">
  <div className="text-primary font-extrabold text-[3rem] leading-loose ">Target Audience</div>
  <div className="w-[35rem] text-[24px] xs:text-xs xs:w-[18.5rem] sm:text-sm sm:w-[25.5rem] md:w-[25rem]">Alariina caters to individuals aged 18 and above who are seeking genuine connections and meaningful relationships. Our target audience encompasses a diverse range of backgrounds, ethnicities, and orientations, embracing inclusivity and welcoming those who value intentional and authentic connections.</div>
  <div className="flex gap-20 mt-5 xs:gap-5 sm:gap-5 text-[#83878D]">
  <div className="w-20 xs:w-14 sm:w-16">
    <div className="font-extrabold text-3xl xs:text-2xl sm:text-3xl">18+</div>
    <div className="text-sm font-medium xs:text-xs ">Average User Age</div>
  </div>

  <div className="w-20 xs:w-14 ">
    <div className="font-extrabold text-3xl xs:text-2xl sm:text-3xl ">15k+</div>
    <div className="text-sm font-medium xs:text-xs">Average User Age</div>
  </div>
  <div className="w-20 xs:w-14">
    <div className="font-extrabold text-3xl xs:text-2xl sm:text-3xl">53+</div>
    <div className="text-sm font-medium xs:text-xs">Average User Age</div>
  </div>
  </div>
  <div className="text-start mt-5">
  <button className='bg-primary px-10 py-3 text-[#fff] xs:px-7'>Get started</button>

  </div>

</div>
<div className="h-[30rem] w-[30rem] mt-10 border-[3px] text-[#FF8500] xs:mx-auto overflow-hidden rounded-full xs:h-44 xs:w-44 sm:h-60 sm:w-60 sm:mx-auto md:h-80 md:w-80 ">
    <img src={pic1} className='w-full h-full object-cover  ' alt="" />
  </div>
</div>

</div>
  )
}

export default About
