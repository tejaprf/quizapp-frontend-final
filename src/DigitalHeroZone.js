import {React,useEffect,useState} from 'react';
import './DigitalHeroZone.css';
import avatar from "./avatar.jpg";


const DigitalHeroZone = () => {
    const [points,setPoints]=useState(50);
    useEffect(()=>{
        async function getPoints(){
            // const res=await fetch('http://localhost:5000/posting',{method:'POST',body:JSON.stringify({
            //     message:"Trying to fetch",
            //     data:{
            //     "k1": "v1",
            //     "k2": "v2",
            //     "points": "0"
            //     }
            // })});
            // const res=await fetch('http://localhost:5000/posting');
            // const res=await fetch('http://localhost:5000/callback',{method:'POST'});
            const res=await fetch('https://chatapp-ousn.onrender.com/callback',{method:'POST'});


            // console.log(res);
            const data=await(res.json());
            // console.log("Hello this is react");
            // console.log(data);

            setPoints(data["queryData"].user_obtained_marks || data["bodyData"].user_obtained_marks);

            // { points: Math.floor(Math.random() * 100) }

            // setPoints(data[data]);
            // setPoints(73);
        }

        const intervalId = setInterval(getPoints, 5000);

        // Initial fetch
        getPoints();
    
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    },[points])
  return (
      <div className="container">
      <header>
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <img src={avatar} style={{display:"inline", width:"5vw",height:"5vw"}}/>
        <h1>Digital Hero Zone</h1>
        <h3>Hello! ABC</h3>
        </div>
        <p className="welcome-message">Welcome to the Digital Battlefield!</p>
        <p>Level up your skills and unlock new challenges as you master the digital world</p>
      </header>
      <main>
        <section>
            <p>Story line for saving Library of Wisdom</p>
            <p>Your journey to becoming a ProDigi starts here!</p>
        </section>
        <aside className="current-status">
          <div className="status-image">IMAGE SHOW CURRENT UNLOCK, LEVELS ETC</div>
        </aside>
        


      </main>
      <div className="main2">
      <article className="profile">
          <h2>🌟 Warrior ABC</h2>
          <p>Level <strong>4</strong></p>
          <div className="points-gems">
            <p>Points: <strong>{points}</strong></p>
            <p>Gems: <span className="gem green"></span> <span className="gem blue"></span></p>
          </div>
          <p>Continue to play Quizzes and keep clearing the Levels.</p>
          <p>Save the Library of Wisdom and be the Digital Hero.</p>
          <p className="rules-link">Check Rules and get started</p>
        </article>
      <aside>
            <p style={{paddingLeft:"20px"}}>Dive into fun games that teach you awesome tech tricks and safety tips!</p>
            <div className='asidebtn'>
                <button>PASSWORD</button>
                <button>ANTIVIRUS</button>
                <button>SMART PHONES</button>
                <button>INTERNET SEARCH</button>
            </div>
        </aside>
      </div>
    </div>
  );
};

export default DigitalHeroZone;


