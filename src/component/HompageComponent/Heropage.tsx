
import heroImage from "../../assets/Group 39.png"

const Heropage = () => {
  return (
    <div className=' h-[calc(100vh-70px)] sm:pt-5 px-20 sm:px-6 md:px-12 flex items-center gap-x-[10%] sm:flex-col'>
        <div className="w-[90%] flex flex-col justify-center sm:text-center  ">
            <h2 className='text-[45px] sm:text-[30px] sm:leading-[35px] font-extrabold leading-[50px]'>FORGE CONNECTIONS,</h2>
            <h1 className='text-[80px] sm:text-[50px] sm:leading-[55px] font-extrabold leading-[92px]'>IGNITE <span className=' text-primary'>LOVE</span></h1>
            <h3 className='text-[33px] sm:text-[23px] sm:leading-[26px] font-bold leading-[37px] mb-7 sm:mb-4'>YOUR <span className=' text-primary'>PERFECT MATCH</span> AWAITS.</h3>
            <p className='text-[20px] w-[90%] sm:mx-auto sm:text-[18px] leading-[25px] mb-12 sm:mb-5'>Embrace a journey of <span className=' text-primary'>genuine</span> connections, diversity, and lasting relationships</p>
            <button className='bg-primary w-[250px] sm:w-[180px] sm:py-2 sm:mx-auto text-white text-center text-[20px] py-4 rounded-[5px] font-bold shadow-lg hover:shadow-none cursor-pointer'>Join Now</button>
        </div>
        <div className="w-[90%] sm:mt-5">
          <img src={heroImage} className="" />
        </div>
    </div>
  )
}

export default Heropage