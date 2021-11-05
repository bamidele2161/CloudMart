import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
const Login = () => {
    return (
        <div className="Login" path="login">
            <Header/>
            <LoginForm />
            <Footer />
        </div>
    )
}

export default Login
