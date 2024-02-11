import { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'
import logo from "../assets/Alariina.png"

const Header = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = ()=>{
    setMenu(!menu)
  }
  return (
    <div className='h-[80px] flex justify-between px-20 sm:px-6 md:px-12 items-center'>
      <Link to="/">
      <div>
        <img src={logo} alt="" />
        
      </div>
      </Link>
      <div className='flex space-x-16 items-center '>
        <nav className='md:hidden sm:hidden'>
          <ul className='flex space-x-12 cursor-pointer '>
            <Link to="/">
            <li>HOME</li>
            </Link>
            <li>FEATURES</li>
            <li>CONTACT</li>
            <li>BLOG</li>
          </ul>
        </nav>
        <button className=' md:hidden sm:hidden bg-primary text-white px-10 py-2 rounded-sm font-bold shadow-md hover:shadow-none '>Log In</button>
        
        <div className=" transition-all 0.9s ease-in-out  hidden sm:block md:block">
          <MdMenu onClick={handleMenu}  className=" text-[36px]" />
          {menu ? <div className=' absolute top-[70px] left-0 bg-[#ffe7ea] w-full h-[600px] text-center transition-all 0.9s ease-in-out  ' > <nav className=' text-[20px] pt-2'>
          <ul className=' cursor-pointer '>
            <Link to="about">
            <li className=' border-b border-[#eb647b79] py-6'>HOME</li>
            </Link>
            <li className=' border-b border-[#eb647b79] py-6'>FEATURES</li>
            <li className=' border-b border-[#eb647b79] py-6'>CONTACT</li>
            <li className=' border-b border-[#eb647b79] py-6'>BLOG</li>
          </ul>
        </nav>
        <button className=' mt-20 bg-primary text-white px-12 py-3 rounded-[5px] font-bold shadow-md hover:shadow-none '>Log In</button></div> : null}
        </div>
      </div>
    </div>
  )
}

export default Header
