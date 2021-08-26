import React from 'react'
import '../../css/Nav.css'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
function Nav({ loading }) {
    return (
        <div className="knav">
            <TopNav />
            <BottomNav loading={loading} />
        </div>
    )
}

export default Nav
