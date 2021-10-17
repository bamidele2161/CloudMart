import React, {useState} from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Sidebar from '../components/Sidebar';
const Login = () => {
    const [isOpen, setIsOpen] =useState(false);
    const toggle = () =>{
        setIsOpen(isOpen)
    }
    return (
        <div className="Login" path="login">
            <Header/>
            <LoginForm />
            <Footer />
        </div>
    )
}

export default Login
