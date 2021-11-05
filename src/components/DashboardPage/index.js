import React, {useEffect} from 'react'
import './dashboard.css'
import AOS from 'aos';
import "aos/dist/aos.css";
const DashboardPage = () => {
    useEffect(() => {
        AOS.init({
            duration : 2000,
            easing: "ease-in-out",
            once: true,

        });
        AOS.refresh();
    }, []);
    return (
        <div className="dashboard-container">
            <div className="dashboard-header" data-aos="fade-down">
                <h1 className="dashboard-headline">My Cloudmart Account</h1>
            </div>
            <div className="dashboard-user-details" data-aos="fade-down">
                <h3 className="welcome">Welcome,</h3>
                <h2 className="user-name">Bamidele Akinyemi</h2>
            </div>
            <div className="dashboard-user-cards">
                <div className="dashboard-card-item " data-aos="fade-right">
                    <p className="account">Account</p>
                    <p className="balance">Balance</p>
                    <p className="card-price"> $300.00</p>
                </div>
                <div className="dashboard-card-item" data-aos="zoom-out">
                    <p className="balance">Deposit</p>
                </div>
                <div className="dashboard-card-item" data-aos="fade-left">
                    <p className="balance">Balance</p>
                </div>
            </div>
            <div className="dashboard-buttons">
                <button className="dashboard-btn">Orders</button>
                <button className="dashboard-btn">Orders</button>
                <button className="dashboard-btn">Orders</button>
                <button className="dashboard-btn">Orders</button>
            </div>
        </div>
    )
}

export default DashboardPage
