import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const LayoutDashbaord = ({ children }) => {
    return (
        <>
            <Header />
            <div className='layout'>
                <Sidebar />
                {children}
            </div>
        </>
    )
}

export default LayoutDashbaord