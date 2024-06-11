import React,{ useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../styles/Screen2.css';
import axios from 'axios';
import { useGlobalContext } from '../GlobalContext.js';
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
    email: '',
    password: '',
  });


  const handleChange = (e) => {
      const {id, value} = e.target;
      setFormData({
          ...formData,
          [id]: value
      });
  };

  const {globalState,setGlobalState}=useGlobalContext();
  const [showPassword,setShowPassword]=useState(false);

const navigate=useNavigate();
  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      const isSigned=await axios.post(`${process.env.REACT_APP_serverUrl}auth/signin`, formData);
      console.log(isSigned);
      
      if(isSigned.data.message==='Login successful')
      {
        setGlobalState({...globalState,email:formData.email,isAuthenticated:true});
        //alert('Login Successfull');
        navigate('/home');
      }else if(isSigned.data.message==='User does not exist'){
        alert('User does not exists. Please signup.');
        navigate('/signin')
      }else{
        alert('Username or Password is incorrect');
      }
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
      <Link to="/SignUp">
          <button className='signInButton' style={{position:'fixed',top:'10px',right:'30px'}}>Sign Up</button>
      </Link>
    <div className='page-title'>
      <h1>Hello! Digital Warriors</h1>
      <h2 style={{marginTop:'50px'}}>Welcome to the </h2>
      <h2>DigiVerse</h2>
    </div>
    <div className="screen2-container">

      <form className="registration-form" onSubmit={handleSubmit}>
      <div>
          <h3 style={
              {'margin': '0px'}
          }>Login</h3>
          <div style={
              {
                  'margin': '10px 0px 40px 0px',
                  fontSize: '13px'
              }
          }>Login to access your content</div>
      </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} required onKeyPress={(e) => moveToNext(e, 'contact')} />
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
            </div>
            <img src={showPassword ? eopen : eclose} style={{ width: '30px', height: '30px',position:'relative',right:'40px' }} onClick={() => setShowPassword(!showPassword)} alt="Toggle Password Visibility" />
        </div>

        <div className='form-group-button'>
            <button id="SignIn"  type='submit'>Sign In</button>
            {/* <Link to="/SignUp">
            <button id="SignUp" >Sign Up</button>
            </Link> */}
        </div>
        {/* <div style={{display:'flex',justifyContent:'center'}}>

        <Link to="/SignUp" style={{textDecoration:'none',textAlign:'center'}}>

          <div style={{display:'flex',color:'black',alignItems:'baseline',marginTop:'20px'}}>
            <div style={{color:'grey'}}>Don't have an account? </div>
            <h4>Register Here</h4>
          </div>

        </Link>

        </div> */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link to="/SignUp" style={{ textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ display: 'flex', color: 'black', marginTop: '20px' }}>
              <div style={{ color: 'grey' }}>Don't have an account? </div>
              <h4 style={{ marginLeft: '5px' }}>Register Here</h4>
            </div>
          </Link>
        </div>

      </form>
    </div>
    </div>
  );
};

export default Screen2;


