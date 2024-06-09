import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Screen4.css';
import axios from 'axios';

const Screen4 = () => {
  const [userData,setUserData]=useState("");
  
  // useEffect(async ()=>{
  //     const data=await axios.get('http://localhost:5000/topics/');
  //     console.log(data);
  //   } 
  //   const data= await topics();
  //   console.log('My data',data);
  // )
  
  useEffect(()=>{
    const getTopics=async ()=>{
      try{
        const response=await axios.post('http://localhost:5000/userProfile',{email:'luckyfrog219@yahoo.com'});
        console.log(response.data);
        setUserData(response.data);
      }catch(err){
        console.log('Error fetching values',err);
      }
    }
    getTopics();
  },[]);

  console.log('My topics',userData);
  const curLevel=userData.currentLevel;
  console.log('current level is ',curLevel)
  const [curTopic,setCurTopic]=useState("");

  const handleCurtopic=(e)=>{
    userData.topics.array.forEach(x => {
      if(x.topicName===e.target.value)
      {
        setCurTopic(x);
      }
    });
  }

  return (
    <div className="screen4-container">
      <h1>Warrior Info</h1>
      <div className="info">
        <p>Warrior ABC</p>
        <p>Save the Galaxy...</p>
      </div>
      <Link to="/screen5">
        <button className="next-button">Next</button>
      </Link>
    </div>
  );
};

export default Screen4;
