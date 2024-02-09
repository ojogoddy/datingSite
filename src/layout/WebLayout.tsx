import React from 'react'
import Header from '../block/Header'
import Footer from '../block/Footer'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default WebLayout
