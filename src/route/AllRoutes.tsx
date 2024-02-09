import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import About from '../pages/About'
import WebLayout from '../layout/WebLayout'


const Index = createBrowserRouter ([
    {
        path: "/",
        element: <WebLayout/>,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "about",
                element: <About/>
            }
        ]
    }
])
export default Index
