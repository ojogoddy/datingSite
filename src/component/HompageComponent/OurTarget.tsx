import target from "../../assets/Group 27.png"
import { Link } from "react-router-dom"

const OurTarget = () => {
  return (
    <div className="flex items-center gap-[10%] justify-between px-20 py-16">
        
        <div className=" w-full">
            <h1 className="font-extrabold  text-[50px] leading-[70px]">Our<span className=" text-primary"> Target</span> Audience</h1>
            <p className="text-[24px] w-[580px] leading-7 py-5">Alariina caters to individuals aged 18 and above who are seeking genuine connections and meaningful relationships.</p>
            <div className=" flex items-center gap-x-10 pb-10">
                <div className="">
                    <h1 className="font-extrabold text-[60px] leading-[60px]">18+</h1>
                    <p className="text-[20px] leading-6"> Average <br /> User Age</p>
                </div>
                <div className="">
                    <div className="">
                        <h1 className="font-extrabold text-[60px] leading-[60px]">15K+</h1>
                        <p className="text-[20px] leading-6">Weekly Active <br /> Users</p>
                    </div>
                </div>
            </div>
            <Link to="about">
            <button className=' bg-primary text-white px-14 py-3 rounded-md font-bold shadow-lg hover:shadow-none '>Know More </button>
            </Link>
        </div>
        <div className="w-full">
            <img src={target} className="" alt="" />
        </div>
    </div>
  )
}

export default OurTarget