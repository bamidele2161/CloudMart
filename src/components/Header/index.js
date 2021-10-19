import React, {useEffect, useState} from 'react'
import './header.css'
import image from '../../images/cloud.JPG'
import { Link } from 'react-router-dom'
const Header = () => {
    const  [mobile, setMobile] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 1065) {
            setMobile(true);
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1065) {
                setMobile(true);
            } else {
                setMobile(false);
                setSidebar(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, []);
    
    return (
        <>
            <nav className="header-container">
                <Link className="header-logo" to="/home" onClick={() => setSidebar(false)}>
                    <img src={image} className="logo" alt="nav logo"/>
                </Link>

                {!mobile && (
                    <div className="header-right-elements">
                        <div className="head-icon">
                            <i className="fa fa-user" id="header-icon"></i>   
                            <i className="fa fa-shopping-cart" id="header-icon"></i>
                        </div>
                        <div className="head-bt">
                            <Link className="sign-up-btn" to="/signup">SIGN UP</Link>
                        </div>
                    </div>
                )}
                
                {mobile && (
                    <div className="mobile-icon">
                        {sidebar ? (
                            <i className="fa fa-times" onClick={() => setSidebar(!sidebar)}></i>
                        ) : (
                            <i className="fa fa-bars" onClick={() => setSidebar(!sidebar)}></i>
                        )}
                    </div>
                )}
                
            </nav>
            
            <div className={sidebar ? "sidebar active" : "sidebar"}>
                <div className="sidebar-items">
                    <Link className="sidebar-links" to="/home" onClick={() => setSidebar(false)}>Home</Link>
                        <Link className="sidebar-links" to="/signup" onClick={() => setSidebar(false)}>Sign In</Link>
                        <Link className="sidebar-links" to="/login" onClick={() => setSidebar(false)}>Login</Link>
                        <Link className="sidebar-links" to="/signup" onClick={() => setSidebar(false)}>Dashboard</Link>
                </div>
            </div>
        </>
    )
}

export default Header
