import React, { useState } from 'react'
import styles from './signup.module.css'
import { useNavigate } from 'react-router-dom';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const Signup = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        gender: "others",
        password: "",
        confirmPassword: "",
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const navigate = useNavigate();

    const validateForm = () =>{
        let tempErrors = {...errors};
        let isValid = true;

        if(!formData?.name){
            tempErrors.name = "Name is required";
            isValid = false;
        }
        if(!formData?.email){
            tempErrors.email = "Email is required";
            isValid = false;
        }else{
            if(!emailRegex.test(formData?.email)){
                tempErrors.email = "Invalid Email";
                isValid = false;
            }
        }
        if(!formData?.password){
            tempErrors.password = "Password is required";
            isValid = false;
        }
        if(!formData?.confirmPassword){
            tempErrors.confirmPassword = "Confirm Password is required";
            isValid = false;
        }
        if(formData?.password !== formData?.confirmPassword){
            tempErrors.confirmPassword = "Passwords do not match";
            isValid = false;
        }


        setErrors(tempErrors);
        return isValid
    }

    const handleInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        setErrors({...errors, [e.target.name]: ""})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(validateForm()){
            console.log("Submits")
            navigate("/home")
        }
    }
    console.log(formData)
  return (
    <div className='container'>
      <h1>Signup Form</h1>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <div>
            <label htmlFor=''>Name</label><br />
            <input 
                className={styles.input_field} 
                type='text'
                placeholder='Enter Your Name'
                name='name'
                value={formData?.name}
                onChange={handleInput}
            />
            {errors.name && <p className='text-danger m-0'>{errors.name}</p>}
        </div>
        <div>
            <label htmlFor=''>Email</label><br />
            <input 
                className={styles.input_field} 
                type='text'
                placeholder='Enter Your Email'
                name='email'
                value={formData?.email}
                onChange={handleInput}
            />
            {errors.email && <p className='text-danger m-0'>{errors.email}</p>}
        </div>
        <div>
            <label htmlFor="">Gender</label>
            <input 
                type="radio" 
                value="male" 
                checked={formData?.gender == "male"} 
                name='gender'
                onChange={handleInput}
                /> Male
            <input 
                type="radio" 
                value="female" 
                checked={formData?.gender == "female"} 
                name='gender'
                onChange={handleInput}
                /> Female
                
            <input 
                type="radio" 
                value="others" 
                checked={formData?.gender == "others"} 
                name='gender'
                onChange={handleInput}
                /> Others
                
        </div>
        <div>
            <label htmlFor=''>Password</label><br />
            <input 
                className={styles.input_field} 
                type='password'
                placeholder='Enter Your Password'
                name='password'
                value={formData?.password}
                onChange={handleInput}
            />
            {errors.password && <p className='text-danger m-0'>{errors.password}</p>}
        </div>
        <div>
            <label htmlFor=''>Confirm Password</label><br />
            <input 
                className={styles.input_field} 
                type='password'
                placeholder='Enter Your Password'
                name='confirmPassword' 
                value={formData?.confirmPassword}
                onChange={handleInput}
            />
            {errors.confirmPassword && <p className='text-danger m-0'>{errors.confirmPassword}</p>}
        </div>
        <div className='text-end mt-2'>
            <input type='submit' value="Sign Up"/>
        </div>
      </form>
    </div>
  )
}

export default Signup

// initial form Data state
// handleInput
// handleValidation
// show validations errors
// handle radio