import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import "./App.css"
import Screen1 from './screens/s1.js';
import SignUp from './screens/signup.js';
import SignIn from './screens/signin.js';
import Home from './screens/home.js';
import Screen4 from './screens/levels.js';
import Screen5 from './screens/s5.js';
import Quiz from './screens/quiz.js';
import DigitalLiteracyPrograms from './screens/packages.js';
import { useGlobalContext } from './GlobalContext.js';


const App = () => {
  const {globalState} = useGlobalContext();
  console.log('authenticated',globalState);
  // console.log('Server Url',process.env.REACT_APP_serverUrl);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/quiz/:url/:email" element={globalState.isAuthenticated ? <Quiz /> : <Navigate to="/SignIn" />} />
        {/* <Route path="/screen1" element={globalState.isAuthenticated ? <Screen1 /> : <Navigate to="/SignIn" />} /> */}
        <Route path="/home" element={globalState.isAuthenticated ? <Home /> : <Navigate to="/SignIn" />} />
        {/* {!globalState.isAuthenticated && <Route path="*" element={<SignIn />} />} */}
        {/* <Route path="/home" element={ <Home />} /> */}
        {/* <Route path="/screen4" element={globalState.isAuthenticated ? <Screen4 /> : <Navigate to="/SignIn" />} /> */}
        <Route path="/packages" element={<DigitalLiteracyPrograms />} />

        {/* <Route path="/quiz/" element={<Quiz />} /> */}


      </Routes>
    </Router>
  );
};


export default App;
