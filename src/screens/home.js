import React, {useEffect, useState} from 'react';
import '../styles/home.css';
import axios from 'axios';
import avatar from "../avatar.png";
import {Link, useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../GlobalContext.js';
import gem from '../gem.png'
import crown from '../crown.png'
import image from '../image.png'
import logout from '../logout.png'

const LeaderboardTable = ({leaderboardData}) => {
    return (
        <div className="leaderboard-container">
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Weekly</th>
                        <th>Monthly</th>
                        <th>All Time</th>
                    </tr>
                </thead>
                <tbody> {
                    leaderboardData.allTime.map((item, index) => (
                        <tr key={index}>
                            <td>{
                                index + 1
                            }.{
                                leaderboardData.weekly[index]?._id.username
                            }</td>
                            <td>{
                                index + 1
                            }.{
                                leaderboardData.monthly[index]?._id.username
                            }</td>
                            <td>{
                                index + 1
                            }.{
                                leaderboardData.allTime[index]?._id.username
                            }</td>
                        </tr>
                    ))
                } </tbody>
            </table>
        </div>
    );
};


const DigitalHeroZone = () => {
    const [points, setPoints] = useState("");
    const [username, setUsername] = useState("");
    const {globalState, setGlobalState} = useGlobalContext();
    const email = globalState.email;
    // const email='luckyfrog219@yahoo.com';
    const [userData, setUserData] = useState("");
    const [curLevel, setCurLevel] = useState(1);
    const [leaderboard, setLeaderboard] = useState();
    const [totalScore,setTotalScore]=useState(0);

    useEffect(() => {

        const getTopics = async () => {
            try {
                const response = await axios.post(`${
                    process.env.REACT_APP_serverUrl
                }userProfile/${email}`, {email: email});
                setUserData(response.data);
                setUsername(response.data.username);
                setCurLevel(response.data.level);
                setPoints(response.data.levelTotalScore);
                setTotalScore(response.data.totalScore);
                setGlobalState({
                    ...globalState,
                    curLevel: curLevel,
                    username: response.data.username,
                    totalScore: response.data.totalScore,
                    gems: response.data.gemEarned
                });

                const lboardData = await axios.post(`${
                    process.env.REACT_APP_serverUrl
                }leaderboard`);
                setLeaderboard(lboardData.data);
                console.log(lboardData.data);

            } catch (err) {
                console.log('Error fetching values', err);
            }
        }
        if (!userData) { // Check if userData is empty before fetching
            getTopics();
            console.log(globalState);
        }



        return() => {
        };
    }, [email])


    // console.log('My topics', userData);

    // console.log('current level is ', curLevel);

    const [curTopic, setCurTopic] = useState("");

    const handleCurtopic = (topicName) => {
        let selectedTopic;
        selectedTopic = userData.topics.find(topic => topic.topicName === topicName);
        if (selectedTopic) {
            selectedTopic.levels.sort((a, b) => a.levelId - b.levelId);
            setCurTopic(selectedTopic);
            setGlobalState({
                ...globalState,
                topic: topicName
            });
            // console.log(selectedTopic);
        }
    }


    // console.log('Email is ',email);


    let totalLevels = 0;
    if (Array.isArray(userData.topics)) 
        totalLevels = userData.topics.length;
    


    // console.log('My topics',topics);

    const renderButtons = () => {
        const buttons = [];
        // for (let i = 1; i <= totalLevels; i++) {
        // Optional Chaining (?.): If you're using modern JavaScript (ES2020+), you can use optional chaining to access properties of potentially undefined objects without causing errors. For example:
        // if curTopic.levels is not completed fetching we will not get error. When fetched it will be updated.
        curTopic.levels ?. forEach(level => {

            buttons.push (
                <Link to={
                    `/quiz/${
                        level.quizUrl
                    }/${email}`
                }>
                    <button key={
                        level.levelId
                    }>Level {
                        level.levelId
                    }</button>
                </Link>
            // <button key={i} onClick={() => handleCurtopic(`Topic ${i}`)}>Level {i}</button>
            // <Link to={`/quiz/${quizId}`}></Link>

            );
        });


        return buttons;
    };
    const navigate=useNavigate();
    const handleLogout=()=>{
        navigate("/");
        window.location.reload();
    }


    // const renderLeaderboard=()=>{
    //     const lboardHtml=[]
    //     lboardHtml.push(<div className='lboardCol'>
    //         <button>Weekly</button>
    //     </div>)

    //     for(const lboard of leaderboard){

    //     }
    // }
    // console.log(userData);


    return (
        <div className="container">
            <header>
                <div style={
                    {
                        display: 'flex',
                        justifyContent: 'space-between'
                    }
                }>
                    <img src={avatar}
                        style={
                            {
                                display: "inline",
                                width: "5vw",
                                height: "5vw"
                            }
                        }/>
                    <h1 style={
                        {
                            position: 'absolute',
                            left: '37.5%',
                        }
                    }>Digital Hero Zone</h1>
                    <div style={{display:'flex',alignItems:'center'}}>
                    <h3>Hello! {
                        userData.username
                    }</h3><img src={logout} onClick={handleLogout}style={{width:'50px',height:'40px'}}/>
                    </div>
                </div>
                <p className="welcome-message">Welcome to the Digital Battlefield!</p>
                <p>Level up your skills and unlock new challenges as you master the digital world</p>
            </header>
            <div className='home-container'>
                <div className='left-section'>
                    <div className='left-section-section'>
                    <p>This is a huge <b>Digital Library</b> that houses important data & protects many secrets which Technologists have been passing through generations. A <b>sneaky virus</b> called the Data Corrupter is all set to attack this House of Ultimate Digital Knowledge and hack well-kept secrets!</p>
                    <p>Captain Diginaut is on her mission to save the library. She needs to use all her Digital Powers but it's a race against time & <b>she needs your Help!</b></p>
                    <p><b>Play the Quizzes, pass the Levels, win the Gems</b> and clear this stage to help Captain Diginaut & become <b>the LEGEND - the Legendary Digital Hero!!</b></p>

                    </div>
                    <div className="profile">
                        
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <h2 style={{fontSize:'42px'}}>🌟 Warrior {username}</h2>
                            <div style={{textAlign:'center'}}>
                                <img src={crown} style={{width:'30px',height:'40px'}}/>
                                <p>{totalScore}</p>
                            </div>
                        </div>
                        {/* <p>Level <strong>{curLevel}</strong></p>
            <p>Points: <strong>{points}</strong></p>
            <p>Gems: <img src={gem}/></p> */}
                        <table style={{marginLeft:'50px',textAlign:'left'}}>
                            <tbody>
                                <tr style={
                                    {height: '50px'}
                                }>
                                    <td>Level</td>
                                    <td>
                                        <strong>{curLevel}</strong>
                                    </td>
                                </tr>
                                <tr style={
                                    {height: '50px'}
                                }>
                                    <td>Points</td>
                                    <td>
                                        <strong>{points}</strong>
                                    </td>
                                </tr>
                                <tr style={
                                    {height: '50px'}
                                }>
                                    <td>Gems</td>
                                    <td>
                                        <span style={
                                            {
                                                position: 'relative',
                                                top: '-18px'
                                            }
                                        }>
                                            {
                                            globalState.gems
                                        }</span><img src={gem}
                                            alt="Gem"/></td>
                                </tr>
                            </tbody>
                        </table>


                        <p>Continue to play Quizzes and keep clearing the Levels.</p>
                        <p style={{fontSize:'20px'}}>Save the Library of Wisdom and be the Digital Hero.</p>
                    </div>
                </div>

                <div className="right-section">
                    <div className="current-status">
                        <div className="status-image">
                            <img src={image}/>
                        </div>
                    </div>
                    <div>
                        <p style={
                            {paddingLeft: "20px",fontSize:'20px',marginBottom:'30px'}
                        }>Dive into fun quizzes to help out your friend Captain Diginaut as she takes on the villains of DigiVerse. As you play, also learn you awesome Tech Tricks, Digital Good Habits & Safety tips!</p>
                        <div className='asidebtn'>
                            {/* <button>PASSWORD</button>
                <button>ANTIVIRUS</button>
                <button>SMART PHONES</button>
                <button>INTERNET SEARCH</button> */}
                            {
                            Array.isArray(userData.topics) && userData.topics.map((topic) => {
                                return (
                                    <Link to={
                                        `/quiz/${
                                            topic.levels[curLevel - 1].quizUrl
                                        }/${email}`
                                    }>
                                        <button id={
                                                topic.topicName
                                            }
                                            value={
                                                topic.topicName
                                            }
                                            onClick={
                                                () => handleCurtopic(topic.topicName)
                                        }>
                                            {
                                            topic.topicName
                                        }</button>
                                    </Link>
                                )
                            })
                        } </div>
                    </div>
                </div>
            </div>

            <div style={
                {
                    display: 'flex',
                    marginTop: '40px',
                    justifyContent: 'space-around'
                }
            }>
                <div style={
                    {
                        width: '35vw',
                        height: '300px',
                        padding: '20px',
                        lineHeight: '40px',
                        letterSpacing: '0.03em',
                        marginTop:'50px'
                    }
                }>
                    <h3>Can you top the leader board and show you're the ultimate digital champion</h3>
                </div>
                <div className='leaderboard'>
                    {/* <div className='lboardCol'>
                        <button>Weekly</button>
                        {leaderboard.map((x)=>{

                        })}
                    </div> */}
                    <h1 style={
                        {marginBottom: '30px'}
                    }>Leaderboard</h1>
                    {
                    leaderboard &&< LeaderboardTable leaderboardData = {
                        leaderboard
                    } />
                    } 
                </div>
            </div>
        </div>
    );
};

export default DigitalHeroZone;
