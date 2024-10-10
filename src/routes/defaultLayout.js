import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer'
import Header from '../common/header'
import ScrollToTop from '../components/Scrolltotop/indx'

export default function DefaultLayout() {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
