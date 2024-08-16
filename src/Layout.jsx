import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main>
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
  )
}