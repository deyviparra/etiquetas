import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import s from './Layout.module.scss'

const Layout = ({children}) => {
    return (
        <div className={s.container}>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout