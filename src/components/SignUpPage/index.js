import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './signup.css'
const SignUpPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                <h1 className="signup-title">Sign Up</h1>
                <label>First Name</label>
                <input type="text" name="firstname" className="input-field" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
                    {errors.firstname && errors.username.type === "required" && (
                        <p className="errorMsg">First Name is required.</p>
                    )}
                    {errors.firstname && errors.firstname.type === "maxLength" && (
                        <p className="errorMsg">Firstname is not valid.</p>
                    )}
                
                <label>Last Name</label>
                <input type="text" name="lastname" className="input-field" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
                    {errors.lastname && errors.lastname.type === "required" && (
                        <p className="errorMsg">Last Name is required.</p>
                    )}
                    {errors.lastname && errors.lastname.type === "maxLength" && (
                            <p className="errorMsg">Lastname is not valid.</p>
                    )}
                <label>Email Address</label>
                <input type="text" name="email" className="input-field" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                    {errors.email && errors.email.type === "required" && (
                        <p className="errorMsg"> Email is required.</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <p className="errorMsg">Email is not valid</p>
                    )}
                <label>Mobile Number</label>
                <input type="tel" name="mobile" className="input-field" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
                    {errors.mobile && errors.mobile.type === "required" && (
                        <p className="errorMsg"> Mobile Number is required.</p>
                    )}
                    {errors.mobile && errors.mobile.type === "minLength" && (
                        <p className="errorMsg">Mobile should be at least 6 characters.</p>
                    )}
                
                <label>Password</label>
                <input type="password" name="password" className="input-field" placeholder="Password" {...register("Password", {required: true, maxLength: 10, minLength: 6})} />
                    {errors.password && errors.password.type === "required" && (
                        <p className="errorMsg">Password is required.</p>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <p className="errorMsg">
                            Password should be at-least 6 characters.
                        </p>
                    )}
                
                <input type="submit" className="form-submit"/>
                <p className="member-link">Already a member? <Link to="/login" className="login-link">Log In</Link></p>
                <p className="terms">By proceeding, you agree to CloudMart's <br/> <Link to="terms" className="terms-link"> Terms of Use</Link> & <Link to="terms"  className="terms-link">Privacy Policy</Link></p>
            </form>
        </div>
    )
}

export default SignUpPage;
