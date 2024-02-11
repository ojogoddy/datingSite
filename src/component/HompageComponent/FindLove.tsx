import { Link } from "react-router-dom"

const FindLove = () => {
  return (
    <div className="bg-[#fef4f5] text-center py-16">
        <h1 className="font-extrabold text-[60px] leading-[68px] w-[70%] mx-auto">Find <span className="text-primary">Love's</span> spark on our  Matchmaking stage</h1>
        <p  className="text-[24px] leading-8 w-[70%] pt-6 mx-auto">Experience the thrill of dynamic lover communication on our matchmaking stage. Spark meaningful connections, ignite passion-filled conversations, and let love unfold with energy and excitement oin us and explore the dynamic essence of love.</p>
        <Link to="about">
        <button className=' bg-primary mt-8 text-white px-10 py-3 rounded-md font-bold shadow-lg hover:shadow-none '>Get Access</button>
        </Link>
    </div>
  )
}

export default FindLove