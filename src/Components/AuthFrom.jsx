import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import './App.css'; // Optional: Add styles
import './AuthForm.css'

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const toggleMode = () => {
    setIsSignup((prev) => !prev);
    setFormData({ email: '', password: '', confirmPassword: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () =>{
    const {email, password, confirmPassword} = formData
    if(!email){
      toast.error('Email is required')
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email format');
      return false;
    }
    if(!password){
      toast.error('password is required')
      return false;
    }
    if(isSignup){
      if(!confirmPassword){
        toast.error('confirmpassword is required')
        return false;
      }
    }
    if (password !== confirmPassword) {
    toast.error('Passwords do not match');
    return;
  }}

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!validateForm()) return;

    if (isSignup) {
      console.log("Signing up with", formData);
      toast.success('Signed up successfully!');
    } else {
      console.log("Signing in with", formData);
      toast.success('Signed in successfully!');
    }
  };

  return (
    <div className="auth-form">
      <h2>{isSignup ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        {isSignup && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        )}
        <button type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <p onClick={toggleMode} className="toggle-link">
        {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
};

export default AuthForm;
