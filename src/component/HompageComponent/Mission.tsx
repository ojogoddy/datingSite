import mission from "../../assets/Rectangle 18.png"
import { Link } from "react-router-dom"
const Mission = () => {
  return (
    <div className="flex items-center px-20 bg-[#fef4f5] py-16">
        <div className="w-full">
            <img src={mission} className="w-500px h-[500px]" alt="" />
        </div>
        <div className=" w-full">
            <h1 className="font-extrabold  text-[70px] leading-[70px]"><span className=" text-primary"> Mission</span> <br /> Statement</h1>
            <p className="text-[24px] leading-7 py-7">At Alariina, we unite hearts globally, fostering lasting love through intentional connections. Our mission is to enrich lives, promote inclusivity, and be the trusted guide on the journey to enduring happiness.</p>
            <Link to="about">
            <button className=' bg-primary text-white px-10 py-3 rounded-md font-bold shadow-lg hover:shadow-none '>More About Us </button>
            </Link>
        </div>
    </div>
  )
}

export default Mission