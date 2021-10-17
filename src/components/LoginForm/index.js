import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './login.css'
const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <h1 className="login-title">Log In</h1>
                <label>Username</label>
                <input
                 type="text" placeholder="Username" name="username" className="login-input-field" {...register ("username", {required: true, maxLength: 50})} />
                    {errors.username && errors.username.type === "required" && (
                        <p className="errorMsg">Username is required.</p>
                    )}
                    {errors.username && errors.username.type === "maxLength" && (
                        <p className="errorMsg">Username is not valid.</p>
                    )}
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" className="login-input-field" {...register ("password", {required: true, minLength: 6, maxLength: 10})} />
                    {errors.password && errors.password.type === "required" && (
                        <p className="errorMsg">Password is required.</p>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <p className="errorMsg">
                            Password should be at-least 6 characters.
                        </p>
                    )}
                <input type="submit" className="form-submit" placeholder="Login"/>
                <p className="member-link">Not a member? <Link to="/signup" className="signup-link">Sign Up</Link></p>
                <p className="terms">By proceeding, you agree to CloudMart's <br/> <Link to="terms" className="terms-link"> Terms of Use</Link> & <Link to="terms"  className="terms-link">Privacy Policy</Link></p>
            </form>
        </div>
    )
}

export default LoginForm


