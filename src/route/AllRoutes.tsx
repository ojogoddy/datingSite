import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import About from '../pages/About'


const Index = createBrowserRouter ([
    {
        path: "/",
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
