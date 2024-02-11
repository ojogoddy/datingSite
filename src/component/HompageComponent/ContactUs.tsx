
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { MdMailOutline, MdSupportAgent} from "react-icons/md"

interface FormValues{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    textMessage: string;
}
const ContactUs = () => {
    const initialData:FormValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        textMessage: "",
    }
    const [formData, setFormData] = useState<FormValues>(initialData)

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        console.log("form Submitted: ", formData)
        setFormData(initialData)
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name, value} = e.target
        setFormData((prevData)=>({
            ...prevData, [name]: value
        }))
    }
  return (
    <div className="px-20">
        <h1 className="font-extrabold text-[60px] py-16 leading-[68px] text-center ">Contact Us</h1>
        <div className="flex items-start ">
        <div className="w-full">
            <div className="flex items-center gap-x-6">
                <div className="flex flex-col justify-center items-center bg-[#FEF4F5] w-[280px] h-[200px]">
                    <MdMailOutline className=" bg-primary text-white rounded-full w-24 h-24 p-5 hover:text-[#83878D] "/>
                    <h3 className="font-bold pt-4">Email</h3>
                    <p>info@Alariina.com</p>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#FEF4F5] w-[280px] h-[200px]">
                    <MdSupportAgent className=" bg-primary text-white rounded-full w-24 h-24 p-5 hover:text-[#83878D] transition-colors 0.3s ease-in-out"/>
                    <h3 className=" font-bold pt-4">support</h3>
                    <p>support@Alariina.com</p>
                </div>
            </div>
            <div className=" mt-10">
                <h2 className="font-extrabold text-[30px] leading-8 ">Follow Us On</h2>
                <div className="flex mt-3 items-center gap-3 text-[44px]">
          <a href="#"><FaFacebookF className="bg-[black] rounded-full p-2 text-white"/></a>
          <a href="#"><FaTwitter className="bg-[black] p-2 rounded-full text-white"/></a>
          <a href="#"><FaLinkedinIn className="bg-[black]  p-2 rounded-full text-white"/></a>
          <a href="#"><FaInstagram className="bg-[black] p-2 rounded-full text-white"/></a>
          
        </div>
            </div>
        </div>
        <div className="w-full py-10 rounded-sm px-5 bg-[#FEF4F5]">
            <h1 className=" text-[32px] font-extrabold leading-7 ">Get in touch</h1>
            <p className="text-[14px] font-[500] text-[#565656] pb-5">You can reach us anytime</p>
            <div className="">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className=" flex space-x-4">
                    <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full border border-[#eb647b79] bg-[#ffe7ea] rounded-[30px] p-2 placeholder:text-[#eb647a] outline-none " placeholder="First Name" />
                    <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full border border-[#eb647b79] bg-[#ffe7ea] rounded-[30px] p-2 outline-none placeholder:text-[#eb647a]" placeholder="last Name" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" className="placeholder:text-[#eb647a] outline-none border border-[#eb647b79] bg-[#ffe7ea] rounded-[30px] p-2" />
                        <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" placeholder="Phone Number" className="placeholder:text-[#eb647a] border border-[#eb647b79] bg-[#ffe7ea] rounded-[30px] outline-none p-2" />
                        <textarea name="textMessage" value={formData.textMessage} onChange={handleChange}  className="placeholder:text-[#eb647a] border border-[#eb647b79] bg-[#ffe7ea] rounded-[10px] h-[140px] outline-none  p-2 " placeholder="How can we help you?"></textarea>
                        <button className=" bg-primary text-white font-bold hover:shadow-none shadow-md rounded-[30px] py-3">Submit</button>
                    </div>
                
                
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ContactUs