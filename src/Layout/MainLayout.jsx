import React, { useState } from 'react'
import SidebarMenu from '../components/sidebar/Index'
import Assesments from '../components/assesments/Index'
import './MainLayout.css'

export default function MainLayout() {
    // State for Toggle Sidebar on small screen
    const [showSidebar, setShowSidebar] = useState(false);

    const handleShowSidebar = (flag) => {
        setShowSidebar(flag)
    }

    return (
        <div className='d-flex gap-2 main-layout-container'>
            <div style={showSidebar ? { background: 'rgba(0, 0, 0, 0.2)', width: '100vw', position: 'fixed  ', height: '100vh' } : {}}>
                <SidebarMenu showSidebar={showSidebar} handleShowSidebar={handleShowSidebar} />
            </div>
            <div className='flex-grow-1 main-layout-body'>
                <Assesments handleShowSidebar={handleShowSidebar} />
            </div>
        </div>
    )
}
