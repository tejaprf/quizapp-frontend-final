import React,{useState,useEffect} from 'react';
import '../styles/quiz.css';
import avatar from '../avatar.png'
import { useGlobalContext } from '../GlobalContext.js';
import { useNavigate, useParams } from 'react-router-dom';
import logout from '../logout.png'

function Quiz() {
    const param=useParams();
    // const param={url:'copy-of-crack-the-digital-code-prodigital-quiz-for-todays-prodigiestr',email:'luckyfrog219@yahoo.com'}
    const {globalState,setGlobalState}=useGlobalContext();



    const navigate=useNavigate();
    const handleLogout=()=>{
        navigate("/");
        window.location.reload();
    }
  return (
    <div >
      <header>
        <div style={{display:'flex', justifyContent:'space-between',margin:'10px 10px 0 10px', color:'#710A85'}}>
        <img src={avatar} style={{display:"inline", width:"5vw",height:"5vw"}} onClick={() => navigate("/home")}/>
        <h1 style={{position:'absolute',left:'37.5%'}}>Digital Hero Zone</h1>
        <div style={{display:'flex',alignItems:'center'}}>
            <h3>Hello! {globalState.username}</h3>
            <img src={logout} onClick={handleLogout}style={{width:'50px',height:'40px'}}/>
        </div>
        </div>
      </header>
    <h2 style={{textAlign:'center'}}>Play the <span className="highlight">{globalState.topic}</span> Quiz</h2>
    <div className='quiz-main-container'>
    <div className="iframe-container">
      <div className="quiz-header">
      </div>
      <div className="quiz-container">
        <div className="quiz-interface">
        <iframe
            className="quiz-container"
          name="proprofs" 
          id="proprofs" 
          src={`https://www.proprofs.com/quiz-school/ugc/story.php?title=${param.url}&user_email=${param.email}&ew=430`}
        //   src={`${param.url}&user_email=${param.email}&ew=430`}


        allow="camera *;microphone *;fullscreen;"
          title="ProProfs Digital Code Quiz"
        ></iframe>
        </div>
      </div>
    </div>
      <div className="quiz-footer">
        <p>Good Job!<br/>You have <span className="points">{globalState.totalScore}</span> points</p>
        <p>Score 70%+ and earn a Gem for the topic</p>
      </div>
    </div>
    </div>
  );
}

export default Quiz;
