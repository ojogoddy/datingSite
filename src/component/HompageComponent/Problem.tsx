import { MdPlayCircle } from "react-icons/md"
import { useState } from "react"


const Problem = () => {
    const [show, setShow] = useState(false)
    const toggleText = ()=>{
        setShow(!show)
        
    }
    
    console.log(show)
    const textClass = show ? "" : "line-clamp-2"
    const problemData = [
        {
            icon: <MdPlayCircle/>,
            id: 1,
            bg: "#FF8500",
            title: "Inauthentic Profiles",
            text: "The Prevalence of inauthentic profiles and misleading The Prevalence of inauthentic profiles and misleading"
        },
        {
            icon: <MdPlayCircle/>,
            id: 2,
            bg: "#EF0F33",
            title: "limited Inclusivity ",
            text: "The Prevalence of inauthentic profiles and misleading The Prevalence of inauthentic profiles and misleading"
        },
        {
            icon: <MdPlayCircle/>,
            id: 3,
            bg: "#FFC536",
            title: "Superficial Connections ",
            text: "Shallow interactions and a focus on superficial aspects Shallow interactions and a focus on superficial aspects"
        },
        {
            icon: <MdPlayCircle/>,
            id: 4,
            bg: "#3F7AFC",
            title: "Lack of Intentionality ",
            text: "Many users express frustration with the lack of intentionality Many users express frustration with the lack of intentionality  "
        },
        {
            icon: <MdPlayCircle/>,
            id: 5,
            bg: "#8E24AA",
            title: "Lack of Intentionality ",
            text: "Many users express frustration with the lack of intentionality Many users express frustration with the lack of intentionality  "
        },
        {
            icon: <MdPlayCircle/>,
            id: 6,
            bg: "#3CB878",
            title: "Lack of Intentionality ",
            text: "Many users express frustration with the lack of intentionality Many users express frustration with the lack of intentionality  "
        },
        {
            icon: <MdPlayCircle/>,
            id: 7,
            bg: "#FC8D62",
            title: "Lack of Intentionality ",
            text: "Many users express frustration with the lack of intentionality Many users express frustration with the lack of intentionality  "
        },
        {
            icon: <MdPlayCircle/>,
            id: 8,
            bg: "#3F7AFC",
            title: "Lack of Intentionality ",
            text: "Many users express frustration with the lack of intentionality Many users express frustration with the lack of intentionality  "
        },
    ]
  return (
    <div className='px-20 py-16 '>
        <h1 className="font-extrabold mb-10 text-[60px] leading-[68px] w-[600px] text-center mx-auto">Problem <span className="text-primary">Statement</span> And Solution</h1>
        
        <div className="grid grid-cols-4 ">
        {problemData?.map((item, index)=>(
            <div key={index}  className=" py-7 ">
                <div className="  ">
            <div style={{
                backgroundColor: `${item.bg}`
            }} className=" bg-{item.bg} w-[80px] h-[80px] rounded-[20px] flex items-center justify-center text-[35px] mx-auto  text-white " >
                {item.icon}
            </div>
            <h2 className="font-bold text-[20px] text-center mt-5">{item.title}</h2>
            <p className={` ${textClass} text-center mx-auto leading-5 w-[220px] mt-3`}> {item.text}</p>
            <div onClick={toggleText} className="text-primary cursor-pointer font-bold flex justify-center mt-5"> {show ? "Show Less": "Show More"}</div>
            
        </div>
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default Problem