import React from 'react'
import { Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        Homepage
        <Link to='about'>
            <div>about page</div>
        </Link>
    </div>
  )
}

export default HomePage
