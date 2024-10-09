import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer'
import Header from '../common/header'

export default function DefaultLayout() {
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    )
}
