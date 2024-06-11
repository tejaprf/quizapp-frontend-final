import React, {useState,useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/Screen2.css';
import axios from 'axios';
import avatar from "../avatar.png";
import eopen from "../eopen.png";
import eclose from "../eclose.png";

const Screen2 = () => {
    const moveToNext = (event, nextInputId) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById(nextInputId)?.focus();
        }
    };
    
    const [formData, setFormData] = useState({
        fullName: '',
        password: '',
        age: '',
        email: '',
        contact: '',
        city: '',
        school: ''
    });
    
    const [showSecondPart, setShowSecondPart] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // const handleChange = (e) => {
    //     const {id, value} = e.target;
    //     setFormData({
    //         ...formData,
    //         [id]: value
    //     });
    // };

    const [errors, setErrors] = useState({});

  const handleChange = (e) => {
      const {id, value} = e.target;
      setFormData({
          ...formData,
          [id]: value
      });
    let newErrors = { ...errors };

    // Validate email
    if (id === 'email') {
      if (!value || !value.includes('@') || !value.includes('.')) {
        newErrors.email = 'Invalid email format';
      } else {
        delete newErrors.email;
      }
    }

    // Validate mobile number
    if (id === 'contact') {
      if (!value || !/^\d{10}$/.test(value)) {
        newErrors.contact = 'Mobile number must be 10 digits';
      } else {
        delete newErrors.contact;
      }
    }

    if(id==='password'){
      if(value.length<8){
        newErrors.password='Password must be atleast 8 characters';
      }
      else{
        delete newErrors.password;
      }
    }
    if(id==='age'){
      if (/^\d+$/.test(value) && parseInt(value) >= 0) {
        delete newErrors.age;
      }
      else{
        newErrors.age='Enter positive number';
      }
    }

    setFormData({ ...formData, [id]: value });
    setErrors(newErrors);
  };


    const handleSubmitFirstPart = (e) => {
      if (Object.keys(errors).length === 0) {
        e.preventDefault();
        setShowSecondPart(true);
      }
    };

    const navigate=useNavigate();
    const handleSubmitSecondPart =async  (e) => {
      if (Object.keys(errors).length === 0) {
        e.preventDefault();
        console.log('Form submitted:', formData);
        console.log(`${process.env.REACT_APP_serverUrl}auth/signup`);
        try{
          const res=await axios.post(`${process.env.REACT_APP_serverUrl}auth/signup`, formData);
          console.log(res);
          // User already exists. Please signup using different email id.
          if(res.data==='Signup Failed')
          alert('User already exists. Please signup using different email id.')
          else
          {
            alert('Signup Successfull');
            navigate('/SignIn');
          }
        }
        catch(err){
          console.log('Signup Error ',err);
        }
      }

    };
    const handleSubmitPrev = (e) => {
        e.preventDefault();
        setShowSecondPart(false);
        // You can now send the formData to your backend here
    };


      const handleCheckboxChange = (event) => {
          setIsChecked(event.target.checked);
      };



    return (
        <div className='page-container'>
      <Link to="/">
        <img src={avatar}
                          style={
                              {
                                  display: "inline",
                                  width: "80px",
                                  height: "80px",
                                  top:'4px',
                                  left:'40px',
                                  position:'absolute'
                              }
                          }/>
      </Link>
            <Link to="/SignIn">
                <button className='signInButton' style={{position:'fixed',top:'10px',right:'30px'}}>Sign In</button>
            </Link>
            <div className='page-title'>
                <h1>Hello! Digital Warriors</h1>
                <h2 style={{marginTop:'50px'}}>Welcome to the</h2>
                <h2>DigiVerse</h2>
            </div>
            <div className='screen2-container'>
                <div className="form-container">
                    {
                    !showSecondPart && (
                        <form className="registration-form"
                            onSubmit={handleSubmitFirstPart}>
                            <div>
                                <h3 style={
                                    {'margin': '0px'}
                                }>Register</h3>
                                <div style={
                                    {
                                        'margin': '10px 0px 40px 0px',
                                        fontSize: '13px'
                                    }
                                }>Create a new account</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input onChange={handleChange}
                                    type="text"
                                    id="fullName"
                                    name="name"
                                    onKeyPress={
                                        (e) => moveToNext(e, 'contact')
                                    }
                                    required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact">Mobile Number</label>
                                <input onChange={handleChange}
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    required
                                    onKeyPress={
                                        (e) => moveToNext(e, 'password')
                                    }/>
                                    {errors.contact && <p className="error">{errors.contact}</p>}
                            </div>

                          <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input onChange={handleChange}
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    required
                                    onKeyPress={
                                      (e) => moveToNext(e, 'next-button')
                                    }/>
                                    {errors.password && <p className="error">{errors.password}</p>}
                            </div>
                            <img src={showPassword ? eopen : eclose} style={{ width: '30px', height: '30px',position:'relative',right:'40px' }} onClick={() => setShowPassword(!showPassword)} alt="Toggle Password Visibility" />
                          </div>

                            <div className='form-next-button'>
                                {/* Display "Next" button for the first part */}
                                <button id="next-button" type='submit'>Next</button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Link to="/SignIn" style={{ textDecoration: 'none', textAlign: 'center' }}>
                                <div style={{ display: 'flex', color: 'black', marginTop: '20px' }}>
                                <div style={{ color: 'grey' }}>Already have an account? </div>
                                <h4 style={{ marginLeft: '5px' }}>Login Here</h4>
                                </div>
                            </Link>
                            </div>
                        </form>
                    )
                }

                    {/* Second part of the form */}
                    {
                    showSecondPart && (
                        <form className="registration-form"
                            onSubmit={handleSubmitSecondPart}>

                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input onChange={handleChange}
                                    type="text"
                                    id="age"
                                    name="age"
                                    required
                                    onKeyPress={
                                        (e) => moveToNext(e, 'email')
                                    } />
                                {errors.age && <p className="error">{errors.age}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input onChange={handleChange}
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    onKeyPress={
                                        (e) => moveToNext(e, 'city')
                                    }/>
                                    {errors.email && <p className="error">{errors.email}</p>}
                            </div>


                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input onChange={handleChange}
                                    type="text"
                                    id="city"
                                    name="city"
                                    onKeyPress={
                                        (e) => moveToNext(e, 'school')
                                    }/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="school">School</label>
                                <input onChange={handleChange}
                                    type="text"
                                    id="school"
                                    name="school"
                                    onKeyPress={
                                        (e) => moveToNext(e, 'sign-up')
                                    }/>
                            </div>
                      <div style={{display:'flex',margin:'10px'}}>
                      < input type = "checkbox" id = "acceptTermsCheckbox" checked = {isChecked} onChange = {handleCheckboxChange }/>
                      <span>I accept the terms and conditions </span > 
                      </div>
                      {!isChecked && <p className="error">Please accept terms and conditions to proceed</p>}


                            <div className='form-group-button'>
                                {/* Display "Sign Up" button for the second part */}
                                <button id="prev"
                                    onClick={handleSubmitPrev}>Prev</button>
                                {/* <Link to="/SignIn">
                  <button className="next-button">Sign In</button>
                </Link> */}
                                <button id='sign-up' type='submit' disabled={!isChecked}>Sign Up</button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Link to="/SignIn" style={{ textDecoration: 'none', textAlign: 'center' }}>
                                <div style={{ display: 'flex', color: 'black', marginTop: '20px' }}>
                                <div style={{ color: 'grey' }}>Already have an account? </div>
                                <h4 style={{ marginLeft: '5px' }}>Login Here</h4>
                                </div>
                            </Link>
                            </div>

                            </form>
                    )
                } </div>
            </div>
        </div>
    );
};

export default Screen2;
