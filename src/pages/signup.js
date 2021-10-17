import React, {useState} from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import SignUpPage from '../components/SignUpPage';
import Sidebar from '../components/Sidebar';

const SignUp = () => {
    return (
        <div className="signup" path="signup">
            <Header/>
            <SignUpPage />
            <Footer />
        </div>
    )
}

export default SignUp
