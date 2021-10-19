import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import SignUpPage from '../components/SignUpPage';

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
