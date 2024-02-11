import { Link } from "react-router-dom"

const WhyAlariina = () => {
  return (
    <div className="bg-[#fef4f5] text-center py-16">
        <h1 className="font-extrabold text-[60px]">Why <span className="text-primary">Alariina</span></h1>
        <p  className="text-[24px] leading-8 w-[70%] pt-6 mx-auto">Because love deserves more than chance; it deserves intention. Alariina is more than a matchmaking site, it's a curated journey towards meaningful connections. We go beyond algorithms, fostering a community where authenticity, respect, and diversity thrive.</p>
        <Link to="about">
        <button className=' bg-primary mt-8 text-white px-10 py-3 rounded-md font-bold shadow-md hover:shadow-none '>Read More</button>
        </Link>
    </div>
  )
}

export default WhyAlariina