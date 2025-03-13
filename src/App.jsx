import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import { Outlet } from "react-router"
import Sidebar from './components/Sidebar'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <About />
  },
  {
    path: "/resume",
    element: <Resume />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/contact",
    element: <Contact />
  }

])

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
