import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main>
        <Header/>
        <div className=' pt-16'>
        <Outlet/>
        </div>
        {/* <Footer/> */}
    </main>
  )
}