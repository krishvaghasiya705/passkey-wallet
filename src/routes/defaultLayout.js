import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../common/footer'
import Header from '../common/header'
import ScrollToTop from '../components/Scrolltotop/indx'

export default function DefaultLayout() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}