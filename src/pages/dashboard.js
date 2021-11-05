import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';

const Dashboard = () => {
    return (
        <div className="dashboard-page" path="dashboard">
            <Header />
            <DashboardPage />
            <Footer />
        </div>
    )
}
export default Dashboard;