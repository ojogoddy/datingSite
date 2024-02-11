import logo from "../assets/Alariina.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="px-20 mt-10 pb-40 border-t-primary border-t">
      <div className="flex pt-10">
        <div className=" w-full">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <p className="w-3/5 mt-5 leading-5 text-[#83878D]">Discover Your Epic Love Story: Where Connections Begin and Adventures Unfold. Welcome to Match Me Where Hearts Align 💖✨ #LoveAwaits</p>
        <div className="flex mt-4 items-center gap-3 text-[25px] transition-all 0.3s ease-in-out">
          <a href="#"><FaFacebookF className="bg-[black] rounded-full p-1 text-white hover:text-[#83878D]"/></a>
          <a href="#"><FaTwitter className="bg-[black] p-1 rounded-full text-white hover:text-[#83878D]"/></a>
          <a href="#"><FaLinkedinIn className="bg-[black]  p-1 rounded-full text-white hover:text-[#83878D]"/></a>
          <a href="#"><FaInstagram className="bg-[black] p-1 rounded-full text-white hover:text-[#83878D]"/></a>
          
        </div>
        
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2  w-full text-[#83878D]  ">
        <nav className="">
          <h3 className="text-[20px] font-bold mb-2">Company</h3>
          <ul className="space-y-3">
            <li><a href="about">Our Team</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
        <nav>
          <h3 className="text-[20px] font-bold mb-2">Support</h3>
          <ul className="space-y-3">
            <li><a href="#">Account</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Feedbacks</a></li>
          </ul>
        </nav>
        <nav>
          <h3 className="text-[20px] font-bold mb-2">Get Help</h3>
          <ul className="space-y-3">
            <li><a href="#">Developers</a></li>
            <li><a href="#">Sign In</a></li>
            <li><a href="#">Mobile App</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <nav>
          <h3 className="text-[20px] font-bold mb-2">Contact</h3>
          <ul className="space-y-3">
            <li><a href="#">WhatsApp</a></li>
            <li><a href="#">Support 24</a></li>
            <li><a href="#">Our Services</a></li>
          </ul>
        </nav>
        
      </div>
      </div>
      <div className="flex items-center text-[#83878D] justify-between mt-4">
        <p>2024 © Match Me group of companies</p>
        <p>Privacy | Policy</p>
      </div>
    </div>
  )
}

export default Footer
