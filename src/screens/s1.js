import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Screen1.css';
import part1 from '../part1.png';
import part2 from '../part2.png';
import part3 from '../part3.png';
import part4 from '../part4.png';
import Youtube from 'react-youtube'
import insta from '../insta.png'
import youtube from '../youtube.png'


const Screen1 = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);


  useEffect(()=>{
        
      const handleScroll = () => {
          const scrollY = window.scrollY;
          const threshold = 50; // Adjust as needed
    
          // Toggle header visibility based on scroll position
          if (scrollY > threshold) {
            setIsHeaderVisible(false);
          } else {
            setIsHeaderVisible(true);
          }
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
  },[])
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const navigate=useNavigate();
  return (
    // <div>
    //    <Link to="/SignUp">
    //       <button className='signInButton' style={{position:'fixed',top:'10px',right:'30px'}}>Sign Up</button>
    //   </Link>
    // <div className="screen1-container">
    //   <div className='home-form-container'>
    //     <h1>hello</h1>
    //   </div>
    // </div>
    // </div>
    <div className="screen1-container">
      <div className='youtube'>
      <Youtube videoId='dXEG1iC1yjA' opts={opts}/>
      </div>
       <Link to="/SignIn">
        <button className='signInButton' style={{position:'absolute',top:'10px',right:'30px'}}>Sign In</button>
        </Link>
        <Link to="/SignIn">
        <button className='signInButton' style={{backgroundColor:'transparent',color:'white',position:'absolute',top:'15px',left:'15vw'}}>Play Quiz</button>
        </Link>
        <Link to="/packages">
        <button className='signInButton' style={{backgroundColor:'transparent',color:'white',position:'absolute',top:'15px',left:'25vw'}}>Quiz Packages</button>
        </Link>
    <img src={part1} alt="Background Image"/>
    <div style={{position:'relative'}}>
    <img src={part2} alt="Background Image"/>
    <div className='nurture'>
      <div><span>Good Digital Habits</span></div>
      <div><span>Avoid Digital Risk</span></div>
      <div><span>Use Technology but responsibly</span></div>
      <div><span>Tips and Tricks</span></div>
    </div>
    </div>
    <img src={part3} alt="Background Image"/>
    <img src={part4} alt="Background Image"/>
    <div style={{display:'flex',justifyContent:'center',gap:'30px',position:'relative',top:'-100px'}}>
      <img src={youtube} style={{width:'60px',height:'60px'}} onClick={()=>window.location.href='https://www.youtube.com/@captaindiginaut'}/>
      <img src={insta} style={{width:'60px',height:'60px'}} onClick={()=>window.location.href='https://www.instagram.com/captain_diginaut/'}/>
    </div>
    <div className='content'>
      <p>Contact Us</p>
      <h3>Let's get in touch</h3>
    <form>
      <div style={{display:'flex',justifyContent:'center',gap:'30px'}}>
    <div className="form-group-group">
        <input type="text" id="fullname" placeholder="Full Name" name="fullname" required/>
    </div>
    <div className="form-group-group">
        <input type="email" id="email" placeholder="Email"  name="email" required/>
    </div>
    </div>
    <div className='form-group-group' >
        <input id="subject" placeholder="Subject" name="email" style={{width:'73vw'}} required/>
    </div>
    <div className="form-group-group">
        <textarea id="message" name="message" rows="7" required></textarea>
    </div>
    <div className="form-group-group">
        <button type="submit">Submit</button>
    </div>
</form>
    </div>
    <div style={{backgroundColor:'white',height:'100px'}}>
      @copyright 2024 all right reserved by team Captain Diginaut
    </div>
</div>


  );
};

export default Screen1;


// .screen1-container {
//   background-color: #f3e5f5;
//   padding: 20px;
//   text-align: center;
//   /* background-image: url('../bg9.png'); */
//   background-image: url('../bg10.png');

//   background-repeat: no-repeat;
//   background-size: contain;
//   background-size: 0vmax;

//   height: 4700px;
//   display: flex;
// }


// .screen1-container h1 {
//   font-size: 24px;
// }

// .next-button {
//   margin-top: 20px;
//   padding: 10px 20px;
//   background-color: #8e24aa;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// }

// .home-form-container{
//   display: flex;
// }
