import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <div className="sidebar-container" isOpen={isOpen} onClick={toggle}>
            <div className="sidebar-icon" onClick={toggle}>
                <i className="fa fa-times" ></i>
            </div>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <Link className="sidebar-links" href="#" onClick={toggle}>Home</Link>
                    <Link className="sidebar-links" href="#" onClick={toggle}>Sign In</Link>
                    <Link className="sidebar-links" href="#" onClick={toggle}>Login</Link>
                    <Link className="sidebar-links" href="#" onClick={toggle}>Wishlist</Link>
                    <Link className="sidebar-links" href="#" onClick={toggle}>Categories</Link>
                    <Link className="sidebar-links" href="#" onClick={toggle}>Profile</Link>
                    <Link className="sidebar-links" href="#" onClick={toggle}>Dashboard</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
