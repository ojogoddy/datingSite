
import ContactUs from '../component/HompageComponent/ContactUs'
import FindLove from '../component/HompageComponent/FindLove'
import Heropage from '../component/HompageComponent/Heropage'
import Mission from '../component/HompageComponent/Mission'
import OurTarget from '../component/HompageComponent/OurTarget'
import Problem from '../component/HompageComponent/Problem'
import Vision from '../component/HompageComponent/Vision'
import WhyAlariina from '../component/HompageComponent/WhyAlariina'

const HomePage = () => {
  return (
    <div className=''>
      <Heropage/>
      <WhyAlariina/>
      <Vision/>
      <Mission/>
      <OurTarget/>
      <FindLove/>
      <Problem/>
      <ContactUs/>
    </div>
  )
}

export default HomePage
