import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-row">
                <div className="column">
                    <h2 className="title" id="footer-headline">MY ACCOUNT</h2>
                    <a href="#" className="footer-link">Log In</a>
                    <a href="#" className="footer-link">Register</a>
                    <a href="#" className="footer-link">Order Status</a>
                </div>
                <div className="column">
                    <h2 className="title" id="footer-headline">ABOUT</h2>
                    <a href="#" className="footer-link">Our Story</a>
                    <a href="#" className="footer-link">Media</a>
                    <a href="#" className="footer-link">Sustainability</a>
                </div>
                <div className="column">
                    <h2 className="title" id="footer-headline">LEGAL STUFF</h2>
                    <a href="#" className="footer-link">Terms of Use</a>
                    <a href="#" className="footer-link">Terms of Sales</a>
                    <a href="#" className="footer-link">Privacy</a>
                </div>
            </div>
            <div className="footer-icons">
                <h2 className="title">FOLLOW CLOUDMART</h2>
                <div className="footer-icon">
                    <i className="fa fa-facebook" id="footer-icon-item"></i>
                    <i className="fa fa-twitter" id="footer-icon-item"></i>
                    <i className="fa fa-instagram" id="footer-icon-item"></i>
                </div>
            </div>
            <div className="footer-copyright">
                <p className="copyright">@2021 cloudmart. All Rights Reserved. </p>
            </div>
        </div>
    )
}

export default Footer
