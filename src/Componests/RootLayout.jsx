import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const RootLayout = () => {
  return (
    <>
    <Navber/>
    <Header/>
    <Outlet/>
    </>
  )
}

export default RootLayout