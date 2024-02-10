import React from 'react'
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import pic from '../assets/react.svg'
import pic1 from '../assets/bd.jpg'

const About = () => {
  return (
   <div className="flex flex-col">
     
    <div className='flex justify-between ml-36 mr-36'>

      <div className="w-80 "><span className=' text-5xl font-extrabold'>Know More</span> <span className='text-primary text-5xl font-extrabold'>About </span><span className='text-secondary font-extrabold text-5xl'>Us</span></div>

      <div className="shadow-2xl h-[15rem] mt-16 w-[30rem]">
        <div className=" m-auto pt-10 w-[25rem]">
          <BiSolidQuoteAltLeft />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero inventore quos ducimus molestias dolorum magnam ab labore architecto repellat.
        </div>
        <div className="flex gap-3 p-10">
          <div className="h-10 w-10 rounded-full  bg-primary">
            <img src={pic} className='p-2' alt="" />
          </div>
          <p className='font-bold mt-1'>GLORIA JESSICA</p>
        </div>
      </div>
    </div>
  <div className="bg-[#FEF4F5] w-[100%] h-44 text-center mt-10">
<div className="mt-5"><span className='font-bold text-2xl '>What is </span><span className='text-primary text-2xl font-bold'>Alariina ?</span></div>
<div className="w-[80%] mx-auto">Alariina is your path to purposeful connections. More than a matchmaking site, it's a curated space where authenticity meets intention. Embrace a journey of genuine connections, diversity, and lasting relationships. Alariina: Where love is intentional, and every match is a meaningful step toward lasting happiness
</div>

</div>
<div className="mt-10 gap-48 flex mx-auto text-center">
  <div className="h-96 w-96 border-[3px] text-[#FF6161] overflow-hidden rounded-full ">
    <img src={pic1} className='w-full h-full object-cover  ' alt="" />
  </div>
  <div className="w-96">
    <div className="flex gap-2 mb-5">
    <span className='text-primary font-bold text-4xl'>Why </span> <span className='font-bold text-4xl'> Alariina?</span>

    </div>
  <div className="text-justify">Why Alariina? Because love deserves more than chance; it deserves intention. Alariina is more than a matchmaking site; it's a curated journey towards meaningful connections. We go beyond algorithms, fostering a community where authenticity, respect, and diversity thrive. 

  In a world of endless options, Alariina stands out as the compass guiding you to discover not just a match but a soulful connection that resonates with the essence of who you are. Choose Alariina because your journey to love deserves purpose, and every connection made here is an intentional step towards a fulfilling and lasting, relationship.
  </div>
  <div className="text-start mt-5">
  <button className='bg-primary px-10 py-3 text-[#fff]'>Get started</button>

  </div>
  </div>
 
</div>
<div className="flex mx-auto gap-10 mt-20">
  <div className="bg-[#FEF4F5] text-center w-[29rem] h-[25rem] ">
  <div className='text-primary text-3xl font-extrabold m-7 '>Our Vision</div>
  <div className="text-2xl m-2">At Alariina, we envision a world where love transcends borders, connecting diverse hearts for lifelong happiness. Our platform is the catalyst for global relationships, fostering personal growth and shared joy. We are committed to innovation, inclusivity, and the transformative power of intentional connections.

  </div>
  </div>

  <div className="bg-[#FEF4F5] w-[29rem] text-center mt- ">
  <div className='text-primary text-3xl font-extrabold m-7'>Our Mision</div>
  <div className="text-2xl m-2">At Alariina, we unite hearts globally, fostering lasting love through intentional connections. Our mission is to enrich lives, promote inclusivity, and be the trusted guide on the journey to enduring happiness.
  </div>
  </div>
</div>
<div className="flex mx-auto gap-28 mt-20">
<div className=" ">
  <div className="text-primary font-extrabold text-2xl leading-loose">Target Audience</div>
  <div className="w-[25rem] text-xl ">Alariina caters to individuals aged 18 and above who are seeking genuine connections and meaningful relationships. Our target audience encompasses a diverse range of backgrounds, ethnicities, and orientations, embracing inclusivity and welcoming those who value intentional and authentic connections.</div>
  <div className="flex gap-20 mt-5  text-[#484848]">
  <div className="w-20">
    <div className="font-extrabold text-3xl ">18+</div>
    <div className="text-sm font-medium ">Average User Age</div>
  </div>

  <div className="w-20 ">
    <div className="font-extrabold text-3xl ">15k+</div>
    <div className="text-sm font-medium">Average User Age</div>
  </div>
  <div className="w-20">
    <div className="font-extrabold text-3xl">53+</div>
    <div className="text-sm font-medium">Average User Age</div>
  </div>
  </div>
  <div className="text-start mt-5">
  <button className='bg-primary px-10 py-3 text-[#fff]'>Get started</button>

  </div>

</div>
<div className="h-96 w-96 border-[3px] text-[#FF8500] overflow-hidden rounded-full ">
    <img src={pic1} className='w-full h-full object-cover  ' alt="" />
  </div>
</div>

</div>
  )
}

export default About
